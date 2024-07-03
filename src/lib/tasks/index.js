/**
 *	index.js: grunt-call-npm/tasks
 *
 *  @module grunt-call-npm/tasks
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = { callnpm:  require( "./callnpm" )};

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKCALLNPM: "registerMultiTaskCallNPM",
  RUNTASKCALLNPM:           "runTaskCallNPM"
};

// Module exports:
/**
 *  Register a multitask for call_npm.
 *
 *  @see    Function [registerMultiTaskChkOutdated]{@link callnpm.md#.registerMultiTaskChkOutdated}
 *          published by module callnpm for a detailed function description.
 *
 *  @function module:grunt-call-npm/tasks.registerMultiTaskChkOutdated
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCALLNPM, {
  value:    _m.callnpm.registerMultiTaskCallNPM,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKCALLNPM,  {
  value:    _m.callnpm.runTaskCallNPM,
  writable: false, enumerable: true, configurable: false });
