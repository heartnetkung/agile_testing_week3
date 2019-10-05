const random = require('seedrandom');

exports.randomNumber = function(n, seed) {
    return Math.floor(random(seed)() * n) + 1;
};
console.log(exports.randomNumber(5), exports.randomNumber(5, 3))