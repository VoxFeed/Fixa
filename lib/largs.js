/**
 * Fix the number of arguments returned in a callback to N.
 * If the original function had return more parameters, they are ignored and just firsts N arguments are returned.
 * If the original function had return less parameters, all of them are returned along with null values until complete N arguments.
 *
 * @param N The number of arguments to return in callback
 * @returns {*}
 */
Function.prototype.fixa = function fixa(N) {
    var originalFunction = this;
    return function executeFunction() {
        var callback = arguments[arguments.length - 1];

        if (callback && ({}).toString.call(callback) === '[object Function]') {
            var originalArgs = arguments;
            // Rewrite callback
            originalArgs[originalArgs.length - 1] = function handleCallback() {
                var newArguments = [];
                for (var i = 0; i < N; i++) {
                    newArguments.push(arguments[i] || null);
                }
                // Send limited arguments
                callback.apply(originalFunction, newArguments);
            };
            originalFunction.apply(this, originalArgs)
        } else {
            // No callback sent, return results
            return originalFunction.apply(this, arguments);
        }
    }
};

/**
 * Synonym for fixa function
 *
 * @returns {*}
 */
Function.prototype.fixArguments = function fixArguments(N) {
    return this.fixa(N).apply(this, arguments);
};

/**
 * Fix the number of arguments returned in a callback to 1 argument.
 *
 * @returns {*}
 */
Function.prototype.oneArg = function oneArg() {
    return this.fixa(1).apply(this, arguments);
};

/**
 * Fix the number of arguments returned in a callback to 2 arguments.
 *
 * @returns {*}
 */
Function.prototype.twoArgs = function twoArgs() {
    return this.fixa(2).apply(this, arguments);
};

/**
 * Fix the number of arguments returned in a callback to 3 arguments.
 *
 * @returns {*}
 */
Function.prototype.threeArgs = function threeArgs() {
    return this.fixa(3).apply(this, arguments);
};

/**
 * Fix the number of arguments returned in a callback to 4 arguments.
 *
 * @returns {*}
 */
Function.prototype.fourArgs = function fourArgs() {
    return this.fixa(4).apply(this, arguments);
};