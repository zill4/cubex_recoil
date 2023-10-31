"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepThrough = exports._$ = void 0;
var shorcut = {
    'w': 'width',
    'h': 'height',
    'm': 'margin',
    'l': 'left',
    't': 'top'
};
var _$ = (function () {
    function _$(className) {
        this.shiftKey = function (keys, func) {
            var prefixClass = this.currentClass.split(/[0-9]/)[0];
            var keysExistinClass = [];
            keys.forEach(function (key) {
                if (prefixClass.indexOf(key) > -1) {
                    keysExistinClass.push(key);
                }
            });
            var strongest = this.returnStrongestMatch(keysExistinClass);
            this.key = shorcut[strongest];
            this.styleObject[this.key] = 0;
            this.currentClass = this.currentClass.replace(strongest, '');
            func ? func(this.styleObject) : null;
            return this;
        };
        this.shiftValue = function (allowedValues, func) {
            var thenum = this.currentClass.replace(/^\D+/g, '');
            var withNoDigits = this.currentClass.replace(/[0-9]/g, '');
            this.currentClass = withNoDigits;
            this.styleObject[this.key] = thenum;
            func ? func(this.styleObject) : null;
            return this;
        };
        this.shiftMeasurement = function (measurements) {
        };
        this.returnStrongestMatch = function (keysExistinClass, idx, currentStrongest) {
            var strongest = currentStrongest || keysExistinClass[0];
            var currentIndex = idx || 0;
            var currentKey = keysExistinClass[currentIndex];
            if (idx < keysExistinClass.length) {
                if (strongest.length < currentKey.length) {
                    strongest = currentKey;
                }
                return this.returnStrongestMatch(keysExistinClass, currentIndex + 1, strongest);
            }
            else {
                return strongest;
            }
        };
        this.currentClass = className;
        this.styleObject = {};
        this.key = '';
        this.value = 0;
        this.measure = '';
    }
    return _$;
}());
exports._$ = _$;
;
var stepThrough = function (b) {
    return new _$(b);
};
exports.stepThrough = stepThrough;
function classContainsValue(className) {
    var bool;
    if (stringHasNumber(className)) {
        bool = true;
    }
    else if (stringHasValues(className)) {
    }
}
function stringHasNumber(string) {
    return /\d/.test(string);
}
function stringHasValues(string) {
    var valuesArray = [
        'px',
        'em',
        'rem',
        'rel',
        'abs',
        'none',
        'block',
        'inblock',
        'r',
        'l',
    ];
    return valuesArray.indexOf(string) > -1;
}
//# sourceMappingURL=StepThrough.js.map