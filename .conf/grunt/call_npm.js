/**
 *  © 2024, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    options: {
      opts: {
        quiet: true,
        shell: true,
        blubb: "blubb"
      }
    },
    always: {
      options: {
        cmd: "help"
      }
    }
  };
};
