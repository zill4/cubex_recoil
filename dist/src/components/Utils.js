"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysEqual = exports.getType = exports.isType = exports.search = exports.branchIn = exports.debouncePromise = exports.debounce = void 0;
function debounce(func, wait, immediate) {
    var timeout;
    var self = {};
    return function () {
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(self, args);
            }
        };
        var callNow = immediate && !timeout;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
            func.apply(self, args);
        }
    };
}
exports.debounce = debounce;
function debouncePromise(func, wait, thisArg) {
    var self = thisArg || {};
    var args;
    var timeout;
    var promise;
    var resolveExternal;
    return function () {
        args = arguments;
        if (!promise) {
            promise = new Promise(function (resolve) {
                resolveExternal = resolve;
                timeout = window.setTimeout(function () {
                    timeout = undefined;
                    promise = undefined;
                    resolve(func.apply(self, args));
                }, wait);
            });
        }
        else {
            if (timeout) {
                window.clearTimeout(timeout);
                timeout = window.setTimeout(function () {
                    timeout = undefined;
                    promise = undefined;
                    resolveExternal(func.apply(self, args));
                }, wait);
            }
            else {
                throw 'No Promise or Timeout for debouncePromise';
            }
        }
        return promise;
    };
}
exports.debouncePromise = debouncePromise;
function branchIn(value, key, step) {
    var result = key.split('.'), stepLength = result.length, currentStep = step || 0, letCurrentValue = value[result[currentStep]];
    if (currentStep !== stepLength - 1) {
        return branchIn(letCurrentValue, key, currentStep + 1);
    }
    else {
        return letCurrentValue;
    }
}
exports.branchIn = branchIn;
function search(dataSource, term, keys, fn) {
    var queryResult = [];
    if (term.length > 0) {
        dataSource.forEach(function (item) {
            keys.forEach(function (key) {
                if (branchIn(item, key) ? branchIn(item, key).toString().toLowerCase().indexOf(term.toString().toLowerCase()) != -1 : false) {
                    if (!queryResult.includes(item)) {
                        queryResult.push(item);
                    }
                }
            });
        });
    }
    if (fn) {
        return fn(dataSource, term);
    }
    else {
        return queryResult;
    }
}
exports.search = search;
function isType(value) {
    var type;
    if (value instanceof Array) {
        type = 'array';
    }
    else {
        switch (typeof value) {
            case 'object':
                type = 'object';
                break;
            case 'string':
                type = 'string';
                break;
            default:
                type = 'value';
                break;
        }
    }
    return type;
}
exports.isType = isType;
function getType(value) {
    var type = typeof value;
    if (type === 'object' && value instanceof Array) {
        type = 'array';
    }
    return type;
}
exports.getType = getType;
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
//# sourceMappingURL=Utils.js.map