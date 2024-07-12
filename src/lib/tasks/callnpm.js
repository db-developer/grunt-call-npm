/**
 *	tasks/callnpm.js: grunt-call-npm
 *
 *  @module grunt-call-npm/tasks/callnpm
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  tasks/callnpm.js  is distributed WITHOUT  ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = {
  const:          require( "../constants" ),
  callnpmopts:    require( "../options/callnpm" )
};

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const executecallnpm    = "executeCallNPM";
  const missingproperty   = "Missing property";

  return {
    ERROR_MSG_MISSING_ARGS:         `${ executecallnpm }: ${ missingproperty } 'obj.args'.`,
    ERROR_MSG_MISSING_CMD:          `${ executecallnpm }: ${ missingproperty } 'obj.cmd'.`,
    ERROR_MSG_MISSING_OPTS:         `${ executecallnpm }: ${ missingproperty } 'obj.opts'.`,
    ERROR_MSG_MISSING_ENV:          `${ executecallnpm }: ${ missingproperty } 'obj.opts.env'.`,
    ERROR_MSG_MISSING_CWD:          `${ executecallnpm }: ${ missingproperty } 'obj.opts.cwd'.`,
    ERROR_MSG_MISSING_STDIO:        `${ executecallnpm }: ${ missingproperty } 'obj.opts.stdio'.`,
    EXECUTECALLNPM:                 `${ executecallnpm }`,
    IGNORE:                         "ignore",
    INHERIT:                        "inherit",
    REGISTERMULTITASKCALLNPM:       "registerMultiTaskCallNPM",
    RUNTASKCALLNPM:                 "runTaskCallNPM"
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Return a promise for executing
 *    'node --[node opts] call-npm --[opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj   wrapper for options and arguments.
 */
function executeCallNPM( grunt, task, obj ) {
  return new Promise(( resolve, reject ) => {
    try {
      if ( ! obj?.cmd ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CMD );
      }
      else if ( ! obj?.args ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_ARGS );
      }
      else if ( ! obj?.opts ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTS );
      }
      else if ( ! obj?.opts?.env ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_ENV );
      }
      else if ( ! obj?.opts?.cwd ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CWD );
      }
      else if ( ! obj?.opts?.stdio ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_STDIO );
      }
      else obj.opts.stdio = ( obj.opts.quiet === true ) ? _STRINGS.IGNORE : obj.opts.stdio;

      if ( obj?.opts?.quiet !== undefined ) { delete obj.opts.quiet }

      const logmsg = `Will execute (stdio: '${ obj?.opts?.stdio }'): ${ obj?.cmd } ${ obj?.args.join( " " )}`;
      
      /* istanbul ignore else */
      if ( obj?.dryrun === true ) {
           grunt.log.ok( logmsg );
           return resolve( obj );
      }
      else grunt.verbose.ok( logmsg );

      /* istanbul ignore next */
      grunt.util.spawn( obj, ( error, result ) => {
        if ( ! error ) {
             obj.result = result;
             resolve( obj );
        }
        else reject( error );
      });
    }
    catch( error ) { reject( error ); }
  });
}

/**
 *  Run the 'call_npm' task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
function runTaskCallNPM( grunt, task ) {
  let    promise = _m.callnpmopts.toArgs( grunt, task ); // prepare args for test runs ...
         promise = promise.then(( obj ) => { return executeCallNPM( grunt, task, obj )});
  return promise;
}

/**
 *  Registers the 'call_npm' multitask.
 *
 *  @param  {grunt} grunt
 */
function registerMultiTaskCallNPM( grunt ) {
  grunt.registerMultiTask( _m.const.TASKNAME_CALLNPM, _m.const.TASKDESCRIPTION_CALLNPM,
    /* istanbul ignore next */ function () {
      const task = this;
      const done = task.async();
      runTaskCallNPM( grunt, task ).then((       ) => { done()},
                                         ( error ) => { grunt.log.error( error ); done( false )});
  });
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXECUTECALLNPM, {
  value:    executeCallNPM,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCALLNPM, {
  value:    registerMultiTaskCallNPM,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKCALLNPM, {
  value:    runTaskCallNPM,
  writable: false, enumerable: true, configurable: false });
