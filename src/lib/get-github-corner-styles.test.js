import getGithubCornerStyles from './get-github-corner-styles.js';
test('get-github-corner-styles', () => {
  expect(getGithubCornerStyles()).toMatchSnapshot();
});
