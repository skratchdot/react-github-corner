import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import marked from 'marked';
const fs = require('fs');
const readmeContents = marked(fs.readFileSync(`${__dirname}/../../../README.md`, 'utf-8'));

class About extends Component {
  render() {
    return (
      <Jumbotron dangerouslySetInnerHTML={{__html: readmeContents}} />
    );
  }
}

export default connect()(About);
