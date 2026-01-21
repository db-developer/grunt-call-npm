/**
 *  © 2024, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.00.tasks.callnpm.spec.js - Testing module 'lib/task/callnpm.js'", () => {
    const tasks         = require( "../../lib/tasks/callnpm"   );
    const callnpm = require( "../../lib/options/callnpm" );

    describe( "Testing exports of module 'callnpm'", () => {
      it( "Function 'execute' should exist", () => {
          expect( tasks.execute ).not.to.be( undefined  );
          expect( tasks.execute ).not.to.be( null       );
          expect( tasks.execute ).to.be.a(   "function" );
      });
      it( "Function 'runTask' should exist", () => {
          expect( tasks.runTask ).not.to.be( undefined  );
          expect( tasks.runTask ).not.to.be( null       );
          expect( tasks.runTask ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTask' should exist", () => {
          expect( tasks.registerMultiTask ).not.to.be( undefined  );
          expect( tasks.registerMultiTask ).not.to.be( null       );
          expect( tasks.registerMultiTask ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'execute' of module 'callnpm'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "execute: Missing property 'obj.cmd'.";
          expect(() => { tasks.execute()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (0)", ( done ) => {
          const cmd     = "dummy";
          const errmsg  = "execute: Missing property 'obj.args'.";
          expect(() => { tasks.execute( undefined, undefined, { cmd })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (1)", ( done ) => {
          const cmd     = "dummy";
          const args    = [ ];
          const errmsg  = "execute: Missing property 'obj.opts'.";
          expect(() => { tasks.execute( undefined, undefined, { cmd, args })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (2)", ( done ) => {
          const cmd     = "dummy";
          const args    = [ ];
          const opts    = { };
          const errmsg  = "execute: Missing property 'obj.opts.env'.";
          expect(() => { tasks.execute( undefined, undefined, { cmd, args, opts })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing obj.opts.cwd)", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'obj.opts.cwd'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.cwd;
                           return tasks.execute( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing obj.opts.stdio)", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'obj.opts.stdio'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.stdio;
                           return tasks.execute( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (dryrun === true, opts.quiet === true)", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          expect(() => { promise.then(( obj ) => {
                          obj.dryrun      = true;
                          obj.opts.quiet  = false;
                          // console.log( "===>", obj );
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (delete obj.opts.quiet)", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          expect(() => { promise.then(( obj ) => {
                          obj.dryrun      = true;
                          delete obj.opts.quiet;
                          // console.log( "===>", obj );
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (dryrun === true, opts.stdio === 'ignore')", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          expect(() => { promise.then(( obj ) => {
                          obj.dryrun      = true;
                          obj.opts.stdio  = "ignore";
                          // console.log( "===>", obj );
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (opts.quiet === true, opts.shell === true, opts.stdio  = 'ignore')", ( done ) => {
          const promise = callnpm.toArgs( env.grunt, env.task );
          expect(() => { promise.then(( obj ) => {
                          obj.args        = [ "help" ];
                          obj.opts.quiet  = true;
                          obj.opts.shell  = true;
                          obj.opts.stdio  = "ignore";
                          // console.log( "===>", obj );
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { console.error( error ); done( error ); });
                       }).not.to.throwException();
      }).timeout( 16000 );
    });
    describe( "Testing function 'runTask' of module 'callnpm'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "callnpm.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTask()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg = "callnpm.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { tasks.runTask( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} but get rejected", ( done ) => {
          expect(() => { tasks.runTask( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      done();
                               })
                              .catch(( error ) => { console.error( error ); done( error ); });
                       }).not.to.throwException();
      }).timeout( 8000 );
    });
    describe( "Testing function 'registerMultiTask' of module 'callnpm'", () => {
      const errmsg      = "Cannot read property 'registerMultiTask' of undefined";
      const errmsg_v_16 = "Cannot read properties of undefined (reading 'registerMultiTask')"
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTask(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTask( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
