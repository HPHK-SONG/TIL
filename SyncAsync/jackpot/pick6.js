const _ = require("underscore");
const numbers = _.range(1, 46);
// [3,5,1,2,5,12]
module.exports = _.sample(numbers, 6).sort(
  (a, b) => a - b,
);
