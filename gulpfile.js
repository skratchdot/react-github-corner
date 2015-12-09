/*eslint prefer-template: 0, no-console: 0 */
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gutil = require('gulp-util');
const isparta = require('isparta');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');
const packageInfo = require('./package.json');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

const port = 8080;
const devDir = `${__dirname}/build/dev/${packageInfo.name}`;
const prodDir = `${__dirname}/build/prod`;
const files = {
	clean: [`${devDir}/*`, `${prodDir}/*`],
	cover: ['./src/**/*.js', '!./src/cli/cli.js'],
	lint: ['./src/**/*.js', './gulpfile.js', './webpack.config.js'],
	test: ['./test/**/*.js'],
	transpile: ['./src/lib/**/*.js']
};

gulp.task('clean', function () {
	return gulp.src(files.clean, {
			read: false
		})
		.pipe(rimraf());
});

gulp.task('lint', function () {
	return gulp.src(files.lint)
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format('stylish'))
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});

gulp.task('transpile', function () {
  return gulp.src(files.transpile)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});

gulp.task('test', function () {
  return gulp.src(files.cover)
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      return gulp.src(files.test, {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({
          reporter: 'spec'
        }))
        .on('error', function (err) {
          console.error(err.toString());
          this.emit('end');
        })
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'json', 'text-summary']
        }));
    });
});

gulp.task('build:prod', function (callback) {
	// modify some webpack config options
	const myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			'process.env': {
				// This has effect on the react lib size
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);
	myConfig.output.path = __dirname + '/build/prod';

	// run webpack
	webpack(myConfig, function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack:build', err);
		}
		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));
		callback();
	});
});

// modify some webpack config options
const myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;
// from: http://webpack.github.io/docs/webpack-dev-server.html
Object.keys(myDevConfig.entry).forEach(function (key) {
	myDevConfig.entry[key].unshift('webpack-dev-server/client?http://localhost:' + port);
	myDevConfig.entry[key].unshift('webpack/hot/only-dev-server');
});

// create a single instance of the compiler to allow caching
const devCompiler = webpack(myDevConfig);

gulp.task('build:dev', function (callback) {
	// run webpack
	devCompiler.run(function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack:build-dev', err);
		}
		gutil.log('[webpack:build-dev]', stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('server', function () {
	// modify some webpack config options
	const myConfig = Object.create(webpackConfig);
	myConfig.devtool = 'sourcemap'; //'eval';
	myConfig.debug = true;
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: `/${packageInfo.name}/`,
		historyApiFallback: {
			index: `/${packageInfo.name}/index.html`
		},
		stats: {
			colors: true
		}
	}).listen(port, 'localhost', function (err) {
		if (err) {
			throw new gutil.PluginError('server', err);
		}
		gutil.log('[server]', 'http://localhost:' + port + '/webpack-dev-server/index.html');
	});
});

gulp.task('build-clean', ['clean', 'build']);
gulp.task('build', ['lint', 'transpile', 'build:prod', 'build:dev']);
gulp.task('default', ['build', 'server', 'watch']);

gulp.task('watch', function () {
	['lint'].forEach(function (name) {
		gulp.watch(files[name], [name]);
	});
});

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
