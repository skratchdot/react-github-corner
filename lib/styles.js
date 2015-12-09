"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGithubCornerStyles;
function getGithubCornerStyles() {
  return "\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  20% {\n    transform: rotate(-25deg);\n  }\n\n  40% {\n    transform: rotate(10deg);\n  }\n\n  60% {\n   transform: rotate(-25deg);\n  }\n\n  80% {\n    transform: rotate(10deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n";
}
//# sourceMappingURL=styles.js.map
