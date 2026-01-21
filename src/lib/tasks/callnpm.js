/**
 *  src/lib/tasks/callnpm.js: grunt-call-npm
 * 
 *  Implements the core logic of the `call_npm` Grunt multitask.
 *
 *  This module provides functionality to execute npm commands as part of a Grunt
 *  task, for reading config files, preparing task options and registering the task.
 *
 *  @module grunt-call-npm/tasks/callnpm
 *
 *//*
 *  © 2024, db-developer. 
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied 
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 */
"use strict";

const constants = require("../constants");
const options   = require("../options/callnpm");

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const executecallnpm    = "execute";
  const missingproperty   = "Missing property";

  return {
    ERROR_MSG_MISSING_ARGS:         `${ executecallnpm }: ${ missingproperty } 'obj.args'.`,
    ERROR_MSG_MISSING_CMD:          `${ executecallnpm }: ${ missingproperty } 'obj.cmd'.`,
    ERROR_MSG_MISSING_OPTS:         `${ executecallnpm }: ${ missingproperty } 'obj.opts'.`,
    ERROR_MSG_MISSING_ENV:          `${ executecallnpm }: ${ missingproperty } 'obj.opts.env'.`,
    ERROR_MSG_MISSING_CWD:          `${ executecallnpm }: ${ missingproperty } 'obj.opts.cwd'.`,
    ERROR_MSG_MISSING_STDIO:        `${ executecallnpm }: ${ missingproperty } 'obj.opts.stdio'.`,
    IGNORE:                         "ignore"
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Executes an npm command using the provided task options.
 *  'node --[node opts] call-npm --[opts]'
 *
 *  @async
 *  @param   {grunt}       grunt The Grunt runtime
 *  @param   {grunt.task}  task  The current Grunt task
 *  @param   {Object}      obj Options object containing cmd, args, opts
 *  @returns {Promise<Object>} Resolved object with execution details
 *  @throws  {Error} If required properties are missing
 */
module.exports.execute = async function execute( grunt, task, obj ) {
  if ( ! obj?.cmd ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_CMD );
  }
  if ( ! obj?.args ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_ARGS );
  }
  if ( ! obj?.opts ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTS );
  }
  if ( ! obj?.opts?.env ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_ENV );
  }
  if ( ! obj?.opts?.cwd ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_CWD );
  }
  if ( ! obj?.opts?.stdio ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_STDIO );
  }

  // Adjust stdio for quiet mode
  obj.opts.stdio = ( obj.opts.quiet === true ) ? _STRINGS.IGNORE : obj.opts.stdio;
  if ( obj?.opts?.quiet !== undefined ) { delete obj.opts.quiet }

  const logmsg = `Will execute (stdio: '${ obj?.opts?.stdio }'): ${ obj?.cmd } ${ obj?.args.join( " " )}`;
      
  /* istanbul ignore else */// Dry-run: just log
  if ( obj?.dryrun === true ) {
       grunt.log.ok( logmsg );
       return obj;
  }
  else grunt.verbose.ok( logmsg );

  return new Promise((resolve, reject) => {
    /* istanbul ignore next */
    grunt.util.spawn( obj, ( error, result ) => {
      if ( ! error ) {
            obj.result = result;
            resolve( obj );
      }
      else reject( error );
    });
  });
}

/**
 *  Runs the `call_npm` task for the given Grunt task instance.
 *
 *  This function performs the full execution pipeline:
 *    1. Converts task-specific options into an options object via `toArgs`.
 *    2. Executes npm with the resolved options using `execute`.
 *
 *  It returns a Promise that resolves once the task has completed, either
 *  successfully or with a Rollup instance.
 *
 *  @async
 *  @function module:grunt-call-npm/tasks/callnpm.runTask
 *  @param {grunt} grunt - The Grunt runtime instance.
 *  @param {grunt.task} task - The current Grunt task instance.
 *  @returns {Promise<Object>} Resolved object containing task options and spawn result (if executed)
 *  @throws {Error} If option resolution or Rollup execution fails.
 */
module.exports.runTask = async function runTask( grunt, task ) {
  const obj = await options.toArgs(grunt, task);
  return module.exports.execute(grunt, task, obj);
}

/**
 *  Registers the `call_npm` multitask with Grunt.
 *
 *  This is the main integration point for `grunt-call-npm` in a Gruntfile.
 *  It wraps the asynchronous task execution pipeline:
 *    1. Resolves task options via `runTask`.
 *    2. Handles logging and error reporting.
 *
 *  @function module:grunt-call-npm/tasks/callnpm.registerMultiTask
 *  @param {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = function registerMultiTask( grunt ) {
  grunt.registerMultiTask( constants.TASKNAME, constants.TASKDESCRIPTION,
    /* istanbul ignore next */ function () {
    const task = this;
    const done = task.async();
    module.exports.runTask( grunt, task )
                  .then((       ) => { done()},
                        ( error ) => { grunt.log.error( error ); done( false )});
  });
}
