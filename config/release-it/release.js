const config = require('./common');

module.exports = {
  ...config,
  git: {
    ...config,
    commit: true,
    push: true,
    tag: false,
    requireCleanWorkingDir: false,
    requireUpstream: false
  },
  npm: {
    ...config,
    publish: true,
    ignoreVersion: true
  }
};
