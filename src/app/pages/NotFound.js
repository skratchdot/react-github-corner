import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
const packageInfo = require('../../../package.json');

class NotFound extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="title">404 - Not Found</h1>
          <p>
            We couldn't find the page you are looking for.
            You may want to visit the home page by clicking
            the button below:
          </p>
          <p>
            <Link to={`/${packageInfo.name}`} className="btn btn-primary">Homepage</Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default connect()(NotFound);
