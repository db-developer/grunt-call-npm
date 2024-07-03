/**
 *  © 2024, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    always: {
      options: {
        cmd: "help",
        opts: {
          quiet: true,
          shell: true,
          blubb: "blubb"
        }
      }
    }
  };
};
