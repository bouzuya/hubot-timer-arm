var Promise = require('q').Promise;

module.exports = function(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
};
