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
var Open = (function (_super) {
    __extends(Open, _super);
    function Open() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Open.prototype.render = function () {
        var self = this;
        var props = self.props;
        var OpenClass = classNames('r-Open', { 'e-open': (props.if) }, { 'e-close': (!props.if) }, { 'e-fill': (props.fill) }, props.className);
        var hasStyle;
        if (props.openToHeight) {
            hasStyle = { height: props.openToHeight && props.if === true ? props.openToHeight : 0 };
        }
        else {
            hasStyle = null;
        }
        return (React.createElement("div", { ref: "Open", className: OpenClass, style: hasStyle }, props.openToHeight ?
            props.children
            : props.if ? props.children : null));
    };
    return Open;
}(React.Component));
exports.default = Open;
//# sourceMappingURL=Open.js.map