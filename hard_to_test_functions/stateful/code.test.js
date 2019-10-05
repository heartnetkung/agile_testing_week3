var code = require('./code');

console.log(code.increment());
console.log(code.increment());

console.log(code.increment2(0)===1);
console.log(code.increment2(0)===1);

var counter = new Counter();
console.log(counter.increment());
console.log(counter.increment());