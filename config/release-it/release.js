const config = require('./common');

module.exports = {
  ...config,
  git: {
    ...config.git,
    commit: false,
    push: false,
    tag: false,
    requireCleanWorkingDir: false,
    requireUpstream: false
  },
  github: {
    release: true,
    autoGenerate: true
  },
  npm: {
    ...config.npm,
    publish: true
  }
};
