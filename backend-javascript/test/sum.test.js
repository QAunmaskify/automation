#! /usr/bin/node
const sum = require('../sum');

test("Add 2 + 1 to equal 3", () => {
    expect(sum(2, 1)).toBe(3);
})
// console.log("SUM => ", sum);