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
var Shrink = (function (_super) {
    __extends(Shrink, _super);
    function Shrink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shrink.prototype.render = function () {
        var self = this;
        var props = self.props;
        var shrinkStyle;
        var shrinkClass = classNames('r-Shrink', { 'e-shrink': (props.if) }, { 'e-fill': (props.fill) }, { 'e-flex': (props.flex) }, props.className);
        if (props.if) {
            shrinkStyle = {
                'transform': 'scale(' + props.scale + ')',
                opacity: props.opacity / 100,
                position: props.position
            };
        }
        else {
            shrinkStyle = {
                position: props.position
            };
        }
        ;
        return (React.createElement("div", { className: shrinkClass, style: shrinkStyle }, props.children));
    };
    Shrink.defaultProps = {
        opacity: 5,
        scale: .98,
        position: 'relative'
    };
    return Shrink;
}(React.Component));
exports.default = Shrink;
//# sourceMappingURL=Shrink.js.map