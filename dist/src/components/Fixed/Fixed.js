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
var Fixed = (function (_super) {
    __extends(Fixed, _super);
    function Fixed(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            default: 0,
            node: null,
            fixed: false
        };
        return _this;
    }
    Fixed.prototype.componentDidMount = function () {
        var svg = this.refs.fixedNode;
        document.body.addEventListener("scroll", this.handleShortcuts.bind(this), true);
        this.setState({
            default: svg.getBoundingClientRect().top,
            node: svg
        });
    };
    Fixed.prototype.handleShortcuts = function () {
        var self = this;
        var svg = this.refs.fixedNode;
        if (svg.getBoundingClientRect().top <= 2) {
            self.setState({
                fixed: true
            });
        }
    };
    Fixed.prototype.render = function () {
        var self = this;
        var props = self.props;
        var fixed = self.state.fixed;
        var fixedClass = classNames('r-Fixed', { 'e-fixed': (fixed === true) });
        return (React.createElement("div", { ref: "fixedNode", className: fixedClass }, props.children));
    };
    return Fixed;
}(React.Component));
exports.default = Fixed;
//# sourceMappingURL=Fixed.js.map