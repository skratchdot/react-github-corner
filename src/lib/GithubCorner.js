import React, { Component } from 'react';
import getGithubCornerStyles from './styles.js';

const githubCornerStyleId = '____GITHUB_CORNER_SUPER_SECRET___';
const githubCornerStyles = getGithubCornerStyles();

/**
 * A react component based off of:
 *   https://github.com/tholman/github-corners
 *
 * @class GithubCorner
 * @extends React.Component
 * @example
 * <GithubCorner href="http://skratchdot.com/" />
 */
export default class GithubCorner extends Component {
  componentDidMount() {
    if (!document.getElementById(githubCornerStyleId)) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
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
  render() {
    const { href, width, height, direction, octoColor, bannerColor } = this.props;
    const mainStyle = {
      position: 'absolute',
      top: 0,
      fill: octoColor
    };
    const armStyle = {};
    let pathBanner = '';
    let pathArm = '';
    let pathBody = '';
    if (direction === 'left') {
      pathBanner = 'M250 0L135 115h-15l-12 27L0 250V0z';
      pathArm = 'M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16';
      pathBody = 'M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z';
      mainStyle.left = 0;
      armStyle.webkitTransformOrigin = '120px 144px';
      armStyle.transformOrigin = '120px 144px';
    } else {
      pathBanner = 'M0 0l115 115h15l12 27 108 108V0z';
      pathArm = 'M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16';
      pathBody = 'M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z';
      mainStyle.right = 0;
      armStyle.WebkitTransformOrigin = '130px 106px';
      armStyle.transformOrigin = '130px 106px';
    }
		return (
      <a href={href} className="github-corner">
        <svg width={width} height={height} viewBox="0 0 250 250" style={mainStyle}>
          <path className="octo-banner" d={pathBanner} fill={bannerColor}></path>
          <path className="octo-arm" d={pathArm} style={armStyle}></path>
          <path className="octo-body" d={pathBody}></path>
        </svg>
      </a>
		);
	}
}

GithubCorner.defaultProps = {
  href: '/',
  width: 80,
  height: 80,
  direction: 'right',
  octoColor: '#fff',
  bannerColor: '#151513'
};
