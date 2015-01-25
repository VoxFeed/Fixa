require("../lib/fixa");
var assert = require("assert");


function sampleFunction5Arguments(callback) {
    return callback(1, 2, 3, 4, 5);
}

function sampleFunction2Arguments(a, b, callback) {
    return callback(null, {
        result : a + b
    });
}


// Limiting arguments.
sampleFunction5Arguments(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 3 4 5
    assert.equal(one,   1);
    assert.equal(two,   2);
    assert.equal(three, 3);
    assert.equal(four,  4);
    assert.equal(five,  5);
});

sampleFunction5Arguments.fixa(2)(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   1);
    assert.equal(two,   2);
    assert.equal(three, undefined);
    assert.equal(four,  undefined);
    assert.equal(five,  undefined);
});

sampleFunction5Arguments.noArgs(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   undefined);
    assert.equal(two,   undefined);
    assert.equal(three, undefined);
    assert.equal(four,  undefined);
    assert.equal(five,  undefined);
});

sampleFunction5Arguments.oneArg(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   1);
    assert.equal(two,   undefined);
    assert.equal(three, undefined);
    assert.equal(four,  undefined);
    assert.equal(five,  undefined);
});

sampleFunction5Arguments.twoArgs(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   1);
    assert.equal(two,   2);
    assert.equal(three, undefined);
    assert.equal(four,  undefined);
    assert.equal(five,  undefined);
});

sampleFunction5Arguments.threeArgs(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   1);
    assert.equal(two,   2);
    assert.equal(three, 3);
    assert.equal(four,  undefined);
    assert.equal(five,  undefined);
});

sampleFunction5Arguments.fourArgs(function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: 1 2 undefined undefined undefined
    assert.equal(one,   1);
    assert.equal(two,   2);
    assert.equal(three, 3);
    assert.equal(four,  4);
    assert.equal(five,  undefined);
});


// Adding arguments
var value1 = 3,
    value2 = 4,
    result = value1 + value2;

sampleFunction2Arguments(value1, value2, function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: null {result : 7} undefined undefined undefined
});

sampleFunction2Arguments.fixa(4)(value1, value2, function (one, two, three, four, five) {
    console.log(one, two, three, four, five); // Prints: null {result : 7} null null null
    assert.equal(one,   null);
    assert.deepEqual(two,   {result : result});
    assert.equal(three, null);
    assert.equal(four,  null);
    assert.equal(five,  undefined);
});