# grunt-call-npm

run npm commands (like `install` or `update`) from grunt.

[![npm version](https://img.shields.io/npm/v/grunt-call-npm?color=blue)](https://www.npmjs.com/package/grunt-call-npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![dependencies](https://img.shields.io/librariesio/release/npm/grunt-call-npm)](https://libraries.io/)
![Build & Test](https://github.com/db-developer/grunt-call-npm/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/db-developer/grunt-call-npm/branch/main/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-call-npm)

This plugin is a fork of [grunt-npm-command](https://github.com/unindented/grunt-npm-command) (archived repository).  
Reason: https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2

Due to changes in Node.js security defaults (April 2024), spawning npm processes without an explicit shell
may fail or behave differently in certain environments.  
This plugin explicitly supports the required configuration and keeps npm invocation predictable inside
Grunt-based build pipelines.

## Content

* Usage
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)
  * [When to use this plugin](#when-to-use-this-plugin)

* Developers
  * [Testing grunt-call-npm](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-call-npm](docs/grunt.md#code-coverage)
  * [Build grunt-call-npm from scratch](docs/grunt.md#building)
  * [NPM integration of grunt-call-npm](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package grunt-call-npm](docs/api.index.md)

[Changelog](CHANGELOG.md)

## Getting started

This guide assumes that you are already familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").

This plugin is intended for users who already work with Grunt-based build processes.
It does not aim to abstract npm itself, but to integrate npm commands cleanly into
existing Grunt workflows.

The plugin can be installed using the following command:

```
npm install grunt-call-npm --save-dev
```

Once installed, the plugin can be loaded from within your Gruntfile:

```
grunt.loadNpmTasks("grunt-call-npm");
```

Set up the task configuration as described below (see usage) and run the task:

```
grunt call_npm
```

Of course, the task can be integrated into any more complex build process.

## When to use this plugin

Use this plugin if your Grunt build needs to trigger npm commands as part of a reproducible workflow, for example:

* installing or updating dependencies in sub-packages
* preparing fixtures or test environments during a build
* synchronizing npm-based steps with other Grunt tasks

If you only need to run an occasional shell command, a generic `exec` task may be sufficient.
This plugin is useful when npm invocation is a first-class part of your build logic.

## Usage

The following examples assume that the Grunt plugin
[`load-grunt-config`](https://www.npmjs.com/package/load-grunt-config) is used.

Alternatively, the configuration can be integrated directly into the `Gruntfile.js`.

```javascript
// file call_npm.js
module.exports = function ( grunt, options ) {
  return {
    options: {
      opts: {                     // options passed to Node.js 'child_process::spawn'
                                  // Note: this is a default option and can be omitted
        shell: true,              // required as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
                                  // default: true
        quiet: true               // will execute 'npm help' silently
                                  // default: false
        // ...                    // any other option supported by 'child_process::spawn'
      }
    },
    always: {                     // target 'always' of Grunt multitask 'call_npm'
      options: {
        cmd:    "help",           // will run 'npm help'
        args:   [],               // arguments appended to 'npm help'
        cwd:    "./path/to/pkg",  // working directory of the npm command
        dryrun: true              // prints the command without executing it
        // opts: {...}            // overrides default 'opts' if defined
      }
    }
  };
};
```

For `npm <command>` and supported command-line arguments, see the
[npm documentation](https://docs.npmjs.com/).
