/**
 *   src/lib/options/callnpm.js: grunt-call-npm
 * 
 *   Provides default options and arguments for executing npm commands
 *   from Grunt tasks.
 *
 *   @module grunt-call-npm/options/callnpm
 *
 *//*
 *    © 2024, db-developer. 
 *
 *    Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied 
 *    warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 */
"use strict";

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const errormsg  = `callnpm.js - Function 'toArgs': missing parameter`;

  return {
    ERROR_MSG_MISSING_GRUNT:          `${ errormsg } 'grunt'.`,
    ERROR_MSG_MISSING_OPTIONS:        `${ errormsg } 'options'.`,
    ERROR_MSG_MISSING_TASK:           `${ errormsg } 'task'.`,
    INHERIT:                          "inherit",
    HELP:                             "help",
    NPM:                              "npm"
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Returns the default arguments for call_npm task.
 *
 *  @function module:grunt-call-npm/options/callnpm.getArguments
 *  @returns {Object} Default arguments { cmd, args, dryrun }
 */
module.exports.getArguments = function getArguments() {
  return {
    cmd:      _STRINGS.HELP,
    args:     [],               // default arguments passed to 'npm <command> args'
    dryrun:   false             // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns the default options for the `call_npm` task.
 *
 *  These defaults are used as a base and will be merged with
 *  task-specific options provided via `task.options()`.
 *
 *  @function module:grunt-call-npm/options/callnpm.getOptions
 *  @returns {Object} default options object
 *  @property {string}   cwd     Path to `current working directory`
 *  @property {string}   env     default environment
 *  @property {boolean}  quiet   run in quiet mode
 *  @property {boolean}  shell   as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
 *  @property {string}   stdio   how to handle io between parent and child process
 */
module.exports.getOptions = function getOptions() {
  return {
    cwd:      process.cwd(),    // working directory pass to 'spawn'
    env:      process.env,      // default environment
    quiet:    false,            // run in quiet mode
    shell:    true,             // as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
    stdio:    _STRINGS.INHERIT  // pass through the corresponding stdio stream 
    //                             from the parent to the spawned child process. 
  };
}

/**
 *  Returns task-specific options for the `call_npm` task.
 *
 *  The returned object is a merge of the default options and the
 *  options provided via `task.options()`.
 *
 *  A deep clone is used to avoid side effects caused by Grunt's
 *  internal option handling in multi-task environments.
 *
 *  @function module:grunt-call-npm/options/callnpmp.getTaskOptions
 *  @param   {grunt.task} task  The current Grunt task instance
 *  @returns {Object}           Resolved task options
 */
module.exports.getTaskOptions = function getTaskOptions( task ) {
  const  dfltargs = structuredClone(module.exports.getArguments());
  const  dfltopts = structuredClone(module.exports.getOptions());

  // get options from task and filter away unused properties
  const  { cmd, args, dryrun, opts } = structuredClone(( task.options()));
  const  options  = { };

  /* istanbul ignore else */
  if ( cmd    !== undefined ) { options.cmd    = cmd    }
  /* istanbul ignore if */
  if ( args   !== undefined ) { options.args   = args   }
  /* istanbul ignore if */
  if ( dryrun !== undefined ) { options.dryrun = dryrun }

  options.opts = { ...dfltopts, ...(opts || /* istanbul ignore next */ {}) };
  return { ...dfltargs, ...options };
}

/**
 *  Converts task-specific options for the `call_npm` task into
 *  a plain options object used for executing Rollup.
 *
 *  If an `options` object is provided explicitly, it will be deep-cloned
 *  using `structuredClone()` to prevent unintended mutations.
 *  Otherwise, task options are resolved via `getTaskOptions()`.
 *
 *  @function module:grunt-call-npm/options/callnpm.toArgs
 *  @param   {grunt}        grunt    The Grunt runtime instance
 *  @param   {grunt.task}   task     The current Grunt task instance
 *  @param   {Object}      [options] Optional task options override
 *  @returns {Promise<Object>}       Resolved options object
 *  @throws  {Error}                 If required parameters are missing
 */
module.exports.toArgs = async function toArgs( grunt, task, options ) {
  if (( grunt === null ) || ( grunt === undefined )) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_GRUNT);
  }
  if (( task === null  ) || ( task === undefined  )) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_TASK);
  }

  options = options || module.exports.getTaskOptions(task);
  /* istanbul ignore if - code should never be reached */
  if (( options === null ) || ( options === undefined )) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_OPTIONS);
  }

  const retval  = {
    cmd:    _STRINGS.NPM,
    args:   [options.cmd, ...options.args],
    opts:   options.opts
  };

  if ( options.dryrun === true ) retval.dryrun = options.dryrun;

  return retval;
}
