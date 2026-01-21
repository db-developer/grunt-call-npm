/**
 * lib/options/index.js: grunt-call-npm
 * 
 * Aggregated options API for `grunt-call-npm`.
 *
 * This module exposes the public option-related functions that are
 * intended for external consumption.
 *
 * @module grunt-call-npm/options
 *
 *//*
 *  © 2024, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const callnpm = require( "./callnpm" );

/**
 *  Converts task-specific options for the `call_npm` task into
 *  a plain options object used for executing NPM.
 *
 *  This is a re-export of function [toArgs]{@link callnpm.md#.toArgs}
 *  published by module [options/callnpm]{@link callnpm.md}
 *
 *  @function module:grunt-call-npm/options.toArgs
 *  @param   {grunt}        grunt    The Grunt runtime instance
 *  @param   {grunt.task}   task     The current Grunt task instance
 *  @param   {Object}      [options] Optional task options override
 *  @returns {Promise<Object>}       Resolved options object
 */
module.exports.toArgs = callnpm.toArgs