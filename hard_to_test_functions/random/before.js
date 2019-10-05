exports.randomNumber = function(n) {
    return Math.floor(Math.random() * n) + 1;
};
console.log(exports.randomNumber(5))