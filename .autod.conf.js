'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  dep: [
    'egg',
    'egg-scripts'
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'egg-mock',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg'
  ],
  exclude: [
    './test/fixtures',
    './dist'
  ]
}
