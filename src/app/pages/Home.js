import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import GithubCorner from '../../lib/GithubCorner';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="title">
            react-github-corner
            <br />
            <small>Add a Github banner to your project page.</small>
          </h1>
          <p>
            View the examples below or learn more by visiting the about page
            after clicking the button below:
          </p>
          <p>
            <Link to={'/react-github-corner/about'} className="btn btn-primary">
              About Page
            </Link>
          </p>
        </Jumbotron>
        <h1 className="title text-center">Examples</h1>
        {[
          ['#fff', '#151513', '#fff', 'right'],
          ['#fff', '#64CEAA', '#fff', 'right'],
          ['#fff', '#FD6C6C', '#fff', 'right'],
          ['#fff', '#70B7FD', '#fff', 'right'],
          ['#000', '#fff', '#000', 'right'],
          ['#000', '#64CEAA', '#fff', 'right'],
          ['#000', '#FD6C6C', '#fff', 'right'],
          ['#000', '#70B7FD', '#fff', 'right'],
          ['#fff', '#151513', '#fff', 'left'],
          ['#fff', '#64CEAA', '#fff', 'left'],
          ['#fff', '#FD6C6C', '#fff', 'left'],
          ['#fff', '#70B7FD', '#fff', 'left'],
          ['#000', '#fff', '#000', 'left'],
          ['#000', '#64CEAA', '#fff', 'left'],
          ['#000', '#FD6C6C', '#fff', 'left'],
          ['#000', '#70B7FD', '#fff', 'left']
        ].map(function (obj, i) {
          const [ backgroundColor, bannerColor, octoColor, direction ] = obj;
          const height = 200;
          return (
            <Row key={i} style={{
                margin: 20,
                padding: 20,
                backgroundColor: '#f8f8f8',
                border: '2px solid #aaa',
                borderRadius: 20
            }}>
              <Col mdOffset={3} md={3} style={{
                  display: 'relative',
                  height: height,
                  background: backgroundColor
              }}>
                <GithubCorner
                  href=""
                  bannerColor={bannerColor}
                  octoColor={octoColor}
                  width={80}
                  height={80}
                  direction={direction}
                />
              </Col>
              <Col md={3}>
                <pre style={{width: '100%', height: height}}>
                  {`<GithubCorner
  href={customHref}
  bannerColor="${bannerColor}"
  octoColor="${octoColor}"
  width={80}
  height={80}
  direction="${direction}"
/>`}
                </pre>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default connect()(Home);
