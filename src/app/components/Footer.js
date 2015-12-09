import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
		return (
			<footer>
				<Row>
					<Col md={12}><div className="main-seperator"></div></Col>
				</Row>
				<Row className="footer">
					<Col md={6} className="copyright">
						&copy; Copyright 2015 &nbsp;
						<a href="http://skratchdot.com/">skratchdot</a>
					</Col>
					<Col md={6} className="social">
					</Col>
				</Row>
				<br />
			</footer>
		);
	}
}

export default connect()(Footer);
