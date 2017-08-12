import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const packageInfo = require('../../../package.json');

class Header extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };
  getActiveClass(pathname) {
    const { match } = this.props;
    return pathname === match.path ? 'active' : '';
  }
  render() {
    return (
      <header>
        <Row className="header">
          <Col md={8}>
            <Link to={`/${packageInfo.name}`}>
              <h1 className="title">
                react-github-corner &nbsp;
                <small>version {packageInfo.version}</small>
              </h1>
            </Link>
          </Col>
          <Col md={4}>
            <Nav bsStyle="pills">
              <li
                key="home"
                className={
                  this.getActiveClass(`/${packageInfo.name}`) +
                  this.getActiveClass(`/${packageInfo.name}/home`)
                }
              >
                <Link to={`/${packageInfo.name}`}>Home</Link>
              </li>
              <li
                key="about"
                className={this.getActiveClass(`/${packageInfo.name}/about`)}
              >
                <Link to={`/${packageInfo.name}/about`}>About</Link>
              </li>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="main-seperator" />
          </Col>
        </Row>
      </header>
    );
  }
}

export default withRouter(connect()(Header));
