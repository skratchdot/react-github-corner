'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getGithubCornerStyles = require('./get-github-corner-styles.js');

var _getGithubCornerStyles2 = _interopRequireDefault(_getGithubCornerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var githubCornerStyleId = '____GITHUB_CORNER_SUPER_SECRET___';
var githubCornerStyles = (0, _getGithubCornerStyles2.default)();

/**
 * A react component based off of:
 *   https://github.com/tholman/github-corners
 *
 * @class GithubCorner
 * @extends React.Component
 * @example
 * <GithubCorner href="http://skratchdot.com/" />
 */

var GithubCorner = function (_Component) {
  _inherits(GithubCorner, _Component);

  function GithubCorner() {
    _classCallCheck(this, GithubCorner);

    return _possibleConstructorReturn(this, (GithubCorner.__proto__ || Object.getPrototypeOf(GithubCorner)).apply(this, arguments));
  }

  _createClass(GithubCorner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!document.getElementById(githubCornerStyleId)) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = githubCornerStyleId;
        if (style.styleSheet) {
          style.styleSheet.cssText = githubCornerStyles;
        } else {
          style.appendChild(document.createTextNode(githubCornerStyles));
        }
        head.appendChild(style);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          size = _props.size,
          direction = _props.direction,
          octoColor = _props.octoColor,
          bannerColor = _props.bannerColor,
          ariaLabel = _props.ariaLabel,
          className = _props.className,
          svgStyle = _props.svgStyle,
          otherProps = _objectWithoutProperties(_props, ['href', 'size', 'direction', 'octoColor', 'bannerColor', 'ariaLabel', 'className', 'svgStyle']);

      var mainStyle = {
        position: 'absolute',
        top: 0,
        fill: octoColor
      };
      var armStyle = {};
      var pathBanner = '';
      var pathArm = '';
      var pathBody = '';
      if (direction === 'left') {
        pathBanner = 'M250 0L135 115h-15l-12 27L0 250V0z';
        pathArm = 'M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16';
        pathBody = 'M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z';
        mainStyle.left = 0;
        armStyle.WebkitTransformOrigin = '120px 144px';
        armStyle.transformOrigin = '120px 144px';
      } else {
        pathBanner = 'M0 0l115 115h15l12 27 108 108V0z';
        pathArm = 'M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16';
        pathBody = 'M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z';
        mainStyle.right = 0;
        armStyle.WebkitTransformOrigin = '130px 106px';
        armStyle.transformOrigin = '130px 106px';
      }
      var additionalClass = typeof className === 'string' ? ' ' + className : '';
      return _react2.default.createElement(
        'a',
        _extends({}, otherProps, {
          href: href,
          className: 'github-corner' + additionalClass,
          'aria-label': ariaLabel
        }),
        _react2.default.createElement(
          'svg',
          {
            width: size,
            height: size,
            viewBox: '0 0 250 250',
            style: _extends({}, mainStyle, svgStyle)
          },
          _react2.default.createElement('path', { className: 'octo-banner', d: pathBanner, fill: bannerColor }),
          _react2.default.createElement('path', { className: 'octo-arm', d: pathArm, style: armStyle }),
          _react2.default.createElement('path', { className: 'octo-body', d: pathBody })
        )
      );
    }
  }]);

  return GithubCorner;
}(_react.Component);

GithubCorner.defaultProps = {
  href: '/',
  size: 80,
  direction: 'right',
  octoColor: '#fff',
  bannerColor: '#151513',
  ariaLabel: 'Open GitHub project'
};
exports.default = GithubCorner;
//# sourceMappingURL=GithubCorner.js.map