/**
 * lib/tasks/index.js: grunt-call-npm
 *
 * Aggregated tasks API for `grunt-call-npm`.
 *
 * This module exposes the public task-related functions that are
 * intended for external consumption.
 * 
 * @module grunt-call-npm/tasks
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
 *  Registers the `call_npm` multitask with Grunt.
 *
 *  This function is the main entry point to integrate `grunt-call-npm`
 *  into a Gruntfile. Internally, it forwards to
 *  [callnpm.registerMultiTask]{@link ./callnpm.md#.registerMultiTask}.
 *
 *  @function module:grunt-call-npm/tasks.registerMultiTask
 *  @param  {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = callnpm.registerMultiTask
