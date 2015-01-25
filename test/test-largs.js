require("../lib/largs");

Function.prototype.lArgs = function lArgs(n) {
    var originalFunction = this;
    return function executeFunction() {
        var callback = arguments[arguments.length - 1];

        if (callback && ({}).toString.call(callback) === '[object Function]') {
            var originalFunctionArgs = arguments;
            originalFunctionArgs[originalFunctionArgs.length - 1] = function handleCallback() {
                var newArguments = [];
                for (var i = 0; i < n; i++) {
                    newArguments.push(arguments[i] || null);
                }
                callback.apply(originalFunction, newArguments);
            }
        } else {
            return originalFunction.apply(this, arguments);
        }
    }
};

Function.prototype.oneArg = function oneArg(callback) {
    return this.lArgs(1)(callback);
};

Function.prototype.twoArgs = function twoArgs(callback) {
    return this.lArgs(2)(callback);
};

Function.prototype.threeArgs = function threeArgs(callback) {
    return this.lArgs(3)(callback);
};

Function.prototype.fourArgs = function fourArgs(callback) {
    return this.lArgs(4)(callback);
};