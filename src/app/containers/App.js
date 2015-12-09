import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import pathGet from 'object-path-get';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GithubCorner from '../../lib/GithubCorner';
import stringToCssName from '../helpers/stringToCssName';

class App extends Component {
  render() {
    const path = pathGet(this, 'this.children.props.route.path', '');
		const pageParams = pathGet(this, 'props.params', {});
		const githubUrl = 'https://github.com/skratchdot/react-github-corner';
    return (
      <div className={`page-${stringToCssName(path)}`}>
				<Grid>
					<Header pageParams={pageParams} />
					{this.props.children}
					<Footer />
					<GithubCorner href={githubUrl} />
				</Grid>
			</div>
    );
  }
}

export default App;
