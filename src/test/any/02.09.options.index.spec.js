/**
 *  © 2024, slashlib.org.
 */
const expect = require( "expect.js" );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "02.09.options.index.spec.js - Testing module 'lib/options/index.js'", () => {
    const options = require( "../../lib/options" );

    describe( "Testing exports of module 'options'", () => {
      it( "Function 'toCallNPMArgs' should exist", () => {
          expect( options.toCallNPMArgs ).not.to.be( undefined  );
          expect( options.toCallNPMArgs ).not.to.be( null       );
          expect( options.toCallNPMArgs ).to.be.a(   "function" );
      });
    });
  });
})();
