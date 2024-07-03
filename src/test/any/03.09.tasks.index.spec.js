/**
 *  © 2024, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.09.tasks.index.spec.js - Testing module 'lib/tasks/index.js'", () => {
    const tasks   = require( "../../lib/tasks" );

    describe( "Testing exports of module 'tasks'", () => {
      it( "Function 'registerMultiTaskCallNPM' should exist", () => {
          expect( tasks.registerMultiTaskCallNPM ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskCallNPM ).not.to.be( null       );
          expect( tasks.registerMultiTaskCallNPM ).to.be.a(   "function" );
      });
      it( "Function 'runTaskCallNPM' should exist", () => {
          expect( tasks.runTaskCallNPM           ).not.to.be( undefined  );
          expect( tasks.runTaskCallNPM           ).not.to.be( null       );
          expect( tasks.runTaskCallNPM           ).to.be.a(   "function" );
      });
    });
  });
})();
