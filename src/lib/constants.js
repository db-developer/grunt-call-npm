
/**
 *	constants.js: grunt-call-npm
 *
 *  @module grunt-call-npm/constants
 *
 *//*
 *  © 2024, db-developer.
 *
 *  constants.js  is distributed  WITHOUT  ANY WARRANTY;  without  even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * 
 */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  PROPERTY_TASKNAME_CALLNPM:    "TASKNAME_CALLNPM",
  PROPERTY_TASKDESC_CALLNPM:    "TASKDESCRIPTION_CALLNPM",
  TASKNAME_CALLNPM:             "call_npm",
  TASKDESCRIPTION_CALLNPM:      "Check package.json for dependencies"
};

// Module exports:
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKNAME_CALLNPM, {
  value:    _STRINGS.TASKNAME_CALLNPM,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKDESC_CALLNPM, {
  value:    _STRINGS.TASKDESCRIPTION_CALLNPM,
  writable: false, enumerable: true, configurable: false });
