import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import pathGet from 'object-path-get';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GithubCorner from '../../lib/GithubCorner';
import PropTypes from 'prop-types';
import stringToCssName from '../helpers/stringToCssName';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.object.isRequired
  };
  render() {
    const path = pathGet(this, 'props.match.path', '');
    const githubUrl = 'https://github.com/skratchdot/react-github-corner';
    return (
      <div className={`page-${stringToCssName(path)}`}>
        <Grid>
          <Header />
          {this.props.children}
          <Footer />
          <GithubCorner href={githubUrl} />
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect()(App));
