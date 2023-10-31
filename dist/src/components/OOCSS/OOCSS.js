"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OOCSS = void 0;
var React = require("react");
var Allowed_1 = require("./Allowed");
var StepThrough_1 = require("./StepThrough");
var OOCSS = function () { return function (Component) {
    var result = (function (_super) {
        __extends(YourComponentName, _super);
        function YourComponentName(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                style: {}
            };
            _this.styleObject = [];
            return _this;
        }
        YourComponentName.prototype.componentDidMount = function () {
            var oocss = this.props.oocss;
            oocss ? this.convertClassToStyle(oocss) : null;
        };
        YourComponentName.prototype.componentWillReceiveProps = function (nextProps) {
            if (nextProps.oocss !== this.props.oocss) {
                this.convertClassToStyle(nextProps.oocss);
            }
        };
        YourComponentName.prototype.convertClassToStyle = function (classNames, currentClassIndex) {
            var _this = this;
            var classesArray = classNames.split(' ');
            var classIndex = currentClassIndex || 0;
            var amountOfClasses = classesArray.length;
            var currentClass = classesArray[classIndex];
            if (classIndex < amountOfClasses) {
                var currentKey = void 0;
                var currentValue = void 0;
                var currentMeasurement = void 0;
                (0, StepThrough_1.stepThrough)(currentClass).shiftKey(Allowed_1.allowedKeys).shiftValue(Allowed_1.allowedValues, function (data) {
                    _this.styleObject.push(data);
                }).shiftMeasurement();
                return this.convertClassToStyle(classNames, classIndex + 1);
            }
            else {
                this.setState({
                    style: Object.assign.apply(Object, __spreadArray([{}], this.styleObject, false))
                });
            }
        };
        YourComponentName.prototype.render = function () {
            return React.createElement(Component, __assign({}, this.props, { style: Object.assign({}, this.state.style, this.props.style) }));
        };
        return YourComponentName;
    }(React.Component));
    return result;
}; };
exports.OOCSS = OOCSS;
//# sourceMappingURL=OOCSS.js.map