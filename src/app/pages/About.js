import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import readmeContents from '../../../README.md';

class About extends Component {
  render() {
    return <Jumbotron dangerouslySetInnerHTML={{ __html: readmeContents }} />;
  }
}

export default connect()(About);
