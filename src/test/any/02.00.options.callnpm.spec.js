/**
 *  © 2024, slashlib.org.
 */
const expect    = require( "expect.js"   );
const path      = require( "path" );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "02.00.options.callnpm.spec.js - Testing module 'lib/options/callnpm.js'", () => {
    const callnpm = require( "../../lib/options/callnpm" );

    describe( "Testing exports of module 'options/callnpm'", () => {
      it( "Function 'getArguments' should exist", () => {
          expect( callnpm.getArguments ).not.to.be( undefined  );
          expect( callnpm.getArguments ).not.to.be( null       );
          expect( callnpm.getArguments ).to.be.a(   "function" );
      });
      it( "Function 'getOptions' should exist", () => {
          expect( callnpm.getOptions     ).not.to.be( undefined  );
          expect( callnpm.getOptions     ).not.to.be( null       );
          expect( callnpm.getOptions     ).to.be.a(   "function" );
      });
      it( "Function 'getTaskOptions' should exist", () => {
          expect( callnpm.getTaskOptions ).not.to.be( undefined  );
          expect( callnpm.getTaskOptions ).not.to.be( null       );
          expect( callnpm.getTaskOptions ).to.be.a(   "function" );
      });
      it( "Function 'toArgs' should exist", () => {
          expect( callnpm.toArgs         ).not.to.be( undefined  );
          expect( callnpm.toArgs         ).not.to.be( null       );
          expect( callnpm.toArgs         ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getArguments' of module 'options/callnpm'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { callnpm.getArguments(); }).not.to.throwException();
      });
      it( "should return an object literal {object} with properties 'cmd', 'args' and 'dryrun'", () => {
          const value = callnpm.getArguments();
          expect( value ).to.be.an( "object" );
          expect( value.cmd    ).not.to.be( undefined );
          expect( value.cmd    ).not.to.be( null      );
          expect( value.cmd    ).to.be.a(   "string"  );
          expect( value.args   ).not.to.be( undefined );
          expect( value.args   ).not.to.be( null      );
          expect( Array.isArray( value.args )).to.be.ok();
          expect( value.dryrun ).not.to.be( undefined );
          expect( value.dryrun ).not.to.be( null      );
          expect( value.dryrun === false ).to.be.ok();
      });
    });
    describe( "Testing function 'getOptions' of module 'options/callnpm'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { callnpm.getOptions(); }).not.to.throwException();
      });
      describe( "should return an object literal {object}", () => {
        const value = callnpm.getOptions();
        it( "with properties 'cwd', 'env', 'quiet', 'shell' and 'stdio'", () => {
            expect( value ).to.be.an( "object" );
            expect( value.cwd      ).not.to.be( undefined );
            expect( value.cwd      ).not.to.be( null      );
            expect( value.cwd      ).to.be.a(   "string"  );
            expect( value.cwd === process.cwd()).to.be.ok();
            expect( value.env      ).not.to.be( undefined );
            expect( value.env      ).not.to.be( null      );
            expect( value.env      ).to.be.an(  "object"  );
            expect( value.quiet    ).not.to.be( undefined );
            expect( value.quiet    ).not.to.be( null      );
            expect( value.quiet === false ).to.be.ok();
            expect( value.shell    ).not.to.be( undefined );
            expect( value.shell    ).not.to.be( null      );
            expect( value.shell === true ).to.be.ok();
            expect( value.stdio    ).not.to.be( undefined );
            expect( value.stdio    ).not.to.be( null      );
            expect( value.stdio    ).to.be.a(   "string"  );
            expect( value.stdio === "inherit" ).to.be.ok();
        });
      });
    });
    describe( "Testing function 'getTaskOptions' of module 'options/callnpm'", () => {
      it( "should not be callable without parameters", () => {
          const errmsg      = "Cannot read property 'options' of undefined";
          // WTF?!?!? Really??? *sigh*
          const errmsg_v_16 = "Cannot read properties of undefined (reading 'options')";
          expect(() => { callnpm.getTaskOptions(); }).to.throwException(( error ) => {
            expect( error ).to.be.a( TypeError );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'task' {grunt.task}", () => {
          expect(() => { callnpm.getTaskOptions( env.task ); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = callnpm.getTaskOptions( env.task );
        // console.log( env.task.data );
        // console.log( value );
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
        it( "should provide property 'cmd'", () => {
            // this value must match
            // .conf/grunt/call_npm.js => always.options.cmd
            expect( value.cmd   ).not.to.be( undefined );
            expect( value.cmd   ).not.to.be( null      );
            expect( value.cmd === "help" ).to.be.ok();
        });
        it( "should provide property 'args'", () => {
            // this value must match the default property 
            // [] (see: lib/options/callnpm.js)
            expect( value.args   ).not.to.be( undefined );
            expect( value.args   ).not.to.be( null      );
            expect( Array.isArray( value.args )).to.be.ok();
        });
        it( "should provide property 'dryrun'", () => {
            // this value must match the default property
            // 'false' (see: lib/options/callnpm.js)
            expect( value.dryrun ).not.to.be( undefined );
            expect( value.dryrun ).not.to.be( null      );
            expect( value.dryrun === false ).to.be.ok();
        });
        it( "should provide property 'opts'", () => {
            // this object literal must always exist
            expect( value.opts   ).not.to.be( undefined );
            expect( value.opts   ).not.to.be( null      );
            expect( value.opts   ).to.be.an(  "object"  );
        });
        it( "should provide property 'opts.cwd'", () => {
            // this value must match the default property 
            // 'process.cwd()' (see: lib/options/callnpm.js)
            expect( value.opts.cwd   ).not.to.be( undefined );
            expect( value.opts.cwd   ).not.to.be( null      );
            expect( value.opts.cwd === process.cwd()).to.be.ok();
        });
        it( "should provide property 'opts.env'", () => {
            // this value must match the default property 
            // 'process.env' (see: lib/options/callnpm.js)
            expect( value.opts.env   ).not.to.be( undefined );
            expect( value.opts.env   ).not.to.be( null      );
            expect( value.opts.env   ).to.be.an(  "object"  );
        });
        it( "should provide property 'opts.quiet'", () => {
            // this value must match the default property 
            // 'false' (see: lib/options/callnpm.js)
            expect( value.opts.quiet ).not.to.be( undefined );
            expect( value.opts.quiet ).not.to.be( null      );
            expect( value.opts.quiet === true ).to.be.ok();
        });
        it( "should provide property 'opts.shell'", () => {
            // this value must match
            // .conf/grunt/call_npm.js => always.options.opts.shell
            expect( value.opts.shell ).not.to.be( undefined );
            expect( value.opts.shell ).not.to.be( null      );
            expect( value.opts.shell === true ).to.be.ok();
        });
        it( "should provide property 'opts.stdio'", () => {
            // this value must match the default property 
            // 'false' (see: lib/options/callnpm.js)
            expect( value.opts.stdio ).not.to.be( undefined );
            expect( value.opts.stdio ).not.to.be( null      );
            expect( value.opts.stdio === "inherit" ).to.be.ok();
        });
        it( "should provide property 'opts.blubb'", () => {
            // this value must match
            // .conf/grunt/call_npm.js => always.options.opts.blubb
            expect( value.opts.blubb ).not.to.be( undefined );
            expect( value.opts.blubb ).not.to.be( null      );
            expect( value.opts.blubb === "blubb" ).to.be.ok();
        });
      });
    });
    describe( "Testing function 'toArgs' of module 'options/callnpm'", () => {
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg  = "callnpm.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { callnpm.toArgs()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'task' {task} but get rejected", ( done ) => {
          const errmsg  = "callnpm.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { callnpm.toArgs( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and resolve", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      /** *******************************************************************************************
       *
       *  Test options...
       *
       */// *****************************************************************************************
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.cwd === `${ process.cwd()} ...`)", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.cwd.startsWith( process.cwd())).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.dryrun undefined (filtered))", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.dryrun  ).to.be( undefined );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.opts.quiet === false)", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.quiet === true ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.opts.shell === 'shell')", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.shell === true ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.opts.stdio === 'inherit')", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.stdio === "inherit" ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.opts.blubb === 'blubb')", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value      ).to.be.an( "object" );
                                      expect( value.opts ).to.be.an( "object" );
                                      expect( value.opts.blubb === "blubb" ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.dryrun === true)", ( done ) => {
          expect(() => { callnpm.toArgs( env.grunt, env.task, { cmd: "help", args: [], dryrun: true } )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value       ).to.be.an( "object" );
                                      expect( value.dryrun === true ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
    });
  });
})();
