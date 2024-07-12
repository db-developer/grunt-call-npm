/**
 *	options/callnpm.js: grunt-call-grunt
 *
 *  @module grunt-call-grunt/options/callnpm
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  callnpm.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const toargs    = "toArgs";
  const errormsg  = `callnpm.js - Function '${ toargs }': missing parameter`;

  return {
    ERROR_MSG_MISSING_GRUNT:          `${ errormsg } 'grunt'.`,
    ERROR_MSG_MISSING_OPTIONS:        `${ errormsg } 'options'.`,
    ERROR_MSG_MISSING_TASK:           `${ errormsg } 'task'.`,
    GETARGUMENTS:                     "getArguments",
    GETOPTIONS:                       "getOptions",
    GETTASKOPTIONS:                   "getTaskOptions",
    INHERIT:                          "inherit",
    HELP:                             "help",
    NPM:                              "npm",
    TOARGS:                           `${ toargs }`,
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Defines and returns the set of options that is passed to task 'check_outdated'.
 *
 *  @return {Object}  call_npm default arguments
 */
function getArguments() {
  return {
    cmd:      _STRINGS.HELP,
    args:     [],               // default arguments passed to 'npm <command> args'
    dryrun:   false             // dry run - do nothing just print cmd line
  };
}

/**
 *  Defines and returns the set of options that is passed to task 'check_outdated'.
 *
 *  @return {Object}  call_npm default options
 */
function getOptions() {
  return {
    cwd:      process.cwd(),    // working directory passe to 'spawn'
    env:      process.env,      // default environment
    quiet:    false,            // run in quiet mode
    shell:    true,             // as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
    stdio:    _STRINGS.INHERIT  // pass through the corresponding stdio stream 
    //                             from the parent to the spawned child process. 
  };
}

/**
 *  Returns grunt task specific options for 'call_npm'.
 *  Note: 'call_npm' default options and configuration
 *        options have already been merged!
 *
 *  @param  {grunt.task}  task
 *
 *  @return {Object}  'call_npm' options for grunt task
 */
function getTaskOptions( task ) {
  const  dfltargs = JSON.parse( JSON.stringify( getArguments()));
  const  dfltopts = JSON.parse( JSON.stringify( getOptions()));

  // get options from task and filter away unused properties
  const  { cmd, args, dryrun, opts } = JSON.parse( JSON.stringify( task.options()));
  const  options  = { };

  /* istanbul ignore else */
  if ( cmd    !== undefined ) { options.cmd    = cmd    }
  /* istanbul ignore if */
  if ( args   !== undefined ) { options.args   = args   }
  /* istanbul ignore if */
  if ( dryrun !== undefined ) { options.dryrun = dryrun }

  options.opts = Object.assign( dfltopts, opts );
  return Object.assign( dfltargs, options );
}

/**
 *  Convert grunt task specific options for 'call_npm' to an 
 *  array of arguments, which will be used for calling npm.
 *
 *  @param  {grunt}                   grunt
 *  @param  {grunt.task}              task
 *  @return {Promise<Array<Object>>}  { args, opts }
 */
function toArgs( grunt, task, options ) {
  return new Promise(( resolve, reject ) => {
    if (( grunt === null ) || ( grunt === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_GRUNT ));
    }
    else  if (( task === null ) || ( task === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_TASK ));
    }
    else {
          options = options || getTaskOptions( task );
          /* istanbul ignore if */
          if (( options === null ) || ( options === undefined )) {
                return reject( new Error( _STRINGS.ERROR_MSG_MISSING_OPTIONS ));
          }
    }
    try {
      const retval  = {
        cmd:    _STRINGS.NPM,
        args:   [ options.cmd ].concat( options.args ),
        opts:   options.opts
      };
      if ( options.dryrun === true ) {
           retval.dryrun = options.dryrun;
      }
      resolve( retval );
    }
    catch( error ) { /* istanbul ignore next */ reject( error ); }
  });
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.GETARGUMENTS,   {
  value:    getArguments,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETOPTIONS,     {
  value:    getOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETTASKOPTIONS, {
  value:    getTaskOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.TOARGS,         {
  value:    toArgs,
  writable: false, enumerable: true, configurable: false });
