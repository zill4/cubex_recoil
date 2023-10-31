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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var Transform = (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transform.prototype.render = function () {
        var self = this;
        var props = self.props;
        var transformStyle;
        var transformClass = classNames('r-Transform', { 'e-translate': (props.type === 'translate') }, { 'e-scale': (props.type === 'scale') }, { 'e-scale': (props.type === 'rotate') }, { 'e-active': (props.if) }, { 'e-fill': (props.fill) }, { 'e-flex': (props.flex) }, props.className);
        if (props.if && !props.push) {
            transformStyle = {
                'transform': props.type + (props.axis) + '(' + props.amount + ')',
                transitionDelay: (props.delay) + 'ms'
            };
        }
        else if (props.if && props.push) {
            if (props.push === 'right') {
                transformStyle = {
                    paddingRight: props.amount
                };
            }
            else if (props.push === 'left') {
                transformStyle = {
                    paddingLeft: props.amount
                };
            }
            else if (props.push === 'top') {
                transformStyle = {
                    paddingTop: props.amount
                };
            }
            else if (props.push === 'bottom') {
                transformStyle = {
                    paddingBottom: props.amount
                };
            }
        }
        else {
            transformStyle = {
                'transform': props.type + (props.axis) + '(' + 0 + ')',
                transitionDelay: 0 + 'ms'
            };
        }
        return (React.createElement("div", { className: transformClass, style: transformStyle }, props.children));
    };
    return Transform;
}(React.Component));
exports.default = Transform;
//# sourceMappingURL=Transform.js.map