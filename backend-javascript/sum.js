#! /usr/bin/node

const sum = function (a, b) {
    let _a, _b;
    if (typeof a === 'number' && typeof b === 'number') {
        _a = Math.round(a);
        _b = Math.round(b);
    }
    return _a + _b;
}

module.exports=sum;
