# grunt-call-npm

run npm commands (like `install` or `update`) from grunt.

[![npm version](https://img.shields.io/npm/v/grunt-call-npm?color=blue)](https://www.npmjs.com/package/grunt-call-npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/grunt-call-npm/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-call-npm)
[![Build Status](https://travis-ci.com/db-developer/grunt-call-npm.svg?branch=master)](https://travis-ci.com/db-developer/grunt-call-npm)
[![dependencies](https://img.shields.io/librariesio/release/npm/grunt-call-npm)](https://libraries.io/)

This plugin is a fork of [grunt-npm-command](https://github.com/unindented/grunt-npm-command) (archived repository)  
Reason: https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing grunt-call-npm](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-call-npm](docs/grunt.md#code-coverage)
  * [Build grunt-call-npm from scratch](docs/grunt.md#building)
  * [NPM integration of grunt-call-npm](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package grunt-call-npm](docs/api.index.md)

[Changelog](CHANGELOG.md)

## getting started ##

This guide assumes, that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-call-npm --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile:

<code>grunt.loadNpmTasks( "grunt-call-npm" );</code>

Setup the task configuration as described below (see usage) and run the task:

<code>grunt call_npm</code>

Of cause, the task can be integrated into any complex build process.

## usage ##

The following examples assume that the grunt plugin 'load-grunt-config' is used.
Alternatively, the code can of course be integrated into the 'gruntfile.js' file.  

```javascript
// file check_outdated.js
module.exports = function ( grunt, options ) {
  return {
    always: {                   // this is a grunt multitask, so define a target.
      options: {
        cmd:  "help",           // will run 'npm help'
        args:   [ ],            // will append any arguments to 'npm help'
        dryrun: true,           // will NOT run 'npm help' but print out the 'npm help' command that would have been run
        opts: {                 // options passrd to nodes 'child_process::spawn'
          shell: true,          // required as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2 (default! not required)
          quiet: true           // will execute 'npm help' silently
          ...                   // any other option that can be passed to 'child_process::spawn' 'opts'
        }
      }
    }
  };
};
```
