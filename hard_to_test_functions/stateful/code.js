var count = 0;
exports.increment = function() {
    return ++count;
};

exports.increment2 = function(c) {
    return ++c;
};

exports.Counter = class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        return ++this.count;
    }
}