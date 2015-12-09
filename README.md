# react-github-corner

[![NPM version](https://badge.fury.io/js/react-github-corner.svg)](http://badge.fury.io/js/react-github-corner)
[![Dependency Status](https://david-dm.org/skratchdot/react-github-corner.svg)](https://david-dm.org/skratchdot/react-github-corner)
[![devDependency Status](https://david-dm.org/skratchdot/react-github-corner/dev-status.svg)](https://david-dm.org/skratchdot/react-github-corner#info=devDependencies)

[![NPM](https://nodei.co/npm/react-github-corner.png)](https://npmjs.org/package/react-github-corner)


## Description

Add a Github banner to your project page. A React version of:

- [https://github.com/tholman/github-corners](https://github.com/tholman/github-corners)


## Getting Started

Install the module with: `npm install --save react-github-corner`


## Usage

```javascript
import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
export default class MyApp extends Component {
  render() {
    return (
      <div>
        <header>Wow</header>
        <div>Cool</div>
        <footer>Neat</footer>
        <GithubCorner href="https://github.com/username/repo" />
      </div>
    );
  }
}
```


## Documentation

Here are the props you can pass to the `GithubCorner` instance:

| Property Name | Type | Default Value | Description |
|--------------:|:----:|:-------------:|-------------|
| href | String | '/' | The link to your project page |
| width | Number or String | 80 | The width of the banner |
| height | Number or String | 80 | The height of the banner |
| direction | String | 'right' | Whether the banner shows up on the right or left |
| octoColor | String | '#fff' | The CSS color of the Octocat |
| bannerColor | String | '#151513' | The CSS color of the banner |


## Links

- [Source Code](https://github.com/skratchdot/react-github-corner/)
- [Project Page](http://projects.skratchdot.com/react-github-corner/)
- [Project Page Source](https://github.com/skratchdot/react-github-corner/tree/gh-pages)


## License
Copyright (c) 2015 [skratchdot](http://skratchdot.com/)  
Licensed under the [MIT license](LICENSE-MIT).
