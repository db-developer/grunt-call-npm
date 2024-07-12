
/**
 *	index.js: grunt-call-npm/options
 *
 *  @module grunt-call-npm/options
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
const _m = { callnpm: require( "./callnpm" )};

/**
 *  String table
 *  @ignore
 */
const _STRINGS = { TOCALLNPMARGS: "toCallNPMArgs" };

// Module exports:
/**
 *  Register a multitask for 'call_npm'.
 *
 *  @see    Function [toArgs]{@link callnpm.md#.toArgs}
 *          published by module callnpm for a detailed function description.
 *
 *  @function module:grunt-call-npm/options.toArgs
 *  @param  {grunt}           grunt
 *  @param  {grunt.task}      task
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
Object.defineProperty( module.exports, _STRINGS.TOCALLNPMARGS, {
  value:    _m.callnpm.toArgs,
  writable: false, enumerable: true, configurable: false });
