'use strict'

var riotVersion = '2.3.11'

Package.describe({
  name: 'benoit:riot',
  version: riotVersion + '_1',
  summary: 'Compile Riot .tag files to Javascript, and include the Riot library on the client.',
  git: 'https://github.com/bchaperon/meteor-riot.git',
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'riot-compiler',
  sources: [ 'plugin.js' ],
  npmDependencies: { 'riot': riotVersion }
})

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.1')
  api.use('isobuild:compiler-plugin@1.0.0')
  api.addFiles('.npm/plugin/riot-compiler/node_modules/riot/riot.js', 'client')
  api.addFiles('autorun-mixin.js', 'client')
})
