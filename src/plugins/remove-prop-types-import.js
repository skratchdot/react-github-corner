'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = function() {
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        if (
          path.node &&
          path.node.source &&
          path.node.source.value === 'prop-types'
        ) {
          path.remove();
        }
      }
    }
  };
};
