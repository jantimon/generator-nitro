/**
 * handlebars helper: {{faker fakeName fakeAttribute}}
 *
 *  Allows to use the faker.js module inside our templates:
 *
 * Usage:
 * {{faker "internet.email"}}
 * Output:
 * Patricia_Schamberger75@gmail.com
 *
 * Usage (with argument)
 * {{faker "lorem.words" 3}}
 * Output:
 * voluptas in omnis
 *
 */
module.exports = require('handlebars-faker');
