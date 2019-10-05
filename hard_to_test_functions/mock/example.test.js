var proxy = require('proxyquire');
var { printCap } = proxy('./example', {});

printCap('path/to/file.js');
var { printCap } = proxy('./example', {
    path: {
        basename: (a) => 'STOLEN FUNCTION ' + a
    }
});
printCap('path/to/file.js');