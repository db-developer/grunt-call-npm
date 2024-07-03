/**
 *	Package interface of grunt-call-npm<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module grunt-call-npm
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
const _m = {
  tasks:    require( "./tasks" )
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKCALLNPM: "registerMultiTaskCallNPM",
}

// Module exports:
/**
 *  Register a multitask for call_npm.
 *
 *  @see    Function [registerMultiTaskCallNPM]{@link tasks/index.md#.registerMultiTaskCallNPM}
 *          published by module tasks for a detailed function description.
 *
 *  @function module:grunt-call-npm.registerMultiTaskCallNPM
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCALLNPM, {
  value:    _m.tasks.registerMultiTaskCallNPM,
  writable: false, enumerable: true, configurable: false });
