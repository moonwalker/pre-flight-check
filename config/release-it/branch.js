const config = require('./common');

module.exports = {
  ...config,
  git: {
    ...config.git,
    commit: false,
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: 'DROP - release ${version}'
  }
};
