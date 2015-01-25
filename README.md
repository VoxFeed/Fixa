# Fixa
Fixa (from Fix Arguments) is a Javascript Library to fix the number of arguments returned on callbacks.
It's very useful to standardize callback responses between libraries, for example when using [Async](https://github.com/caolan/async).

## Install

For NodeJS, use npm:

```
npm install --save fixa
```

## Use

To use it just call `fixa(N)` of your original function, where `N` is the number of arguments that will sent to the callback function.
Fixa adds its methods to Function's prototype.

If original function had to return more arguments than `N`, Fixa will execute callback only with the firsts `N` arguments.
On the other hand, if the original function had to return less arguments than `N`, Fixa will return those arguments along
will null values until complete `N` arguments.

**Last argument must be the callback** where you expect a fixed `N` number of arguments.
If you don't send a callback at the end it won't crash but the library will be useless.


### Available methods:

**fixa(N)**

Fix to N the number of arguments sent to the callback.
N must be 0 or a positive integer.
```
[function].fixa(N)(arg1[, arg2[, ...]], callback);
```

**fixArguments(N)**

Just a synonym of `fixa(N)` to make code more readable.
```
[function].fixArguments(N)(arg1[, arg2[, ...]], callback);
```

**noArgs**

Executes the callback with no arguments.
Synonym of `fixa(0)` to make code more readable.
```
[function].noArgs(arg1[, arg2[, ...]], callback);
```

**oneArg**

Executes the callback sending only the first argument.
Synonym of `fixa(1)` to make code more readable.
```
[function].oneArg(arg1[, arg2[, ...]], callback);
```

**twoArgs**

Executes the callback sending only the firsts 2 arguments.
Synonym of `fixa(2)` to make code more readable.
```
[function].twoArgs(arg1[, arg2[, ...]], callback);
```

**threeArgs**

Executes the callback sending only the firsts 3 arguments.
Synonym of `fixa(3)` to make code more readable.
```
[function].threeArgs(arg1[, arg2[, ...]], callback);
```


**fourArgs**

Executes the callback sending only the firsts 4 arguments.
Synonym of `fixa(4)` to make code more readable.
```
[function].fourArgs(arg1[, arg2[, ...]], callback);
```


## Examples

```
require("fixa");

// Sample functions
function sampleFunction5Arguments(callback) {
    return callback(1, 2, 3, 4, 5);
}

function sampleFunction2Arguments(a, b, callback) {
    return callback(null, {
        result : a + b
    });
}

// Limiting arguments.
// Execute sample function normally.
sampleFunction5Arguments(function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: 1 2 3 4 5
});

// Fix to 2 arguments.
sampleFunction5Arguments.fixa(2)(function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: 1 2 undefined undefined undefined
});

// Fix to 3 arguments.
sampleFunction5Arguments.threeArgs(function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: 1 2 3 undefined undefined
});


// Adding arguments
// Fix to 2 arguments.
sampleFunction2Arguments(3, 4, function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: null {result : 7} undefined undefined undefined
});

// Fix to 5 arguments.
sampleFunction2Arguments.fixa(5)(3, 4, function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: null {result : 7} null null null
});

// Fix to 1 argument.
sampleFunction2Arguments.oneArg(3, 4, function(one, two, three, four, five) {
    console.log(one, two, three, four, five);
    // Prints: null undefined undefined undefined undefined
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 VoxFeed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
