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
var Toolbar_1 = require("../Toolbar/Toolbar");
var Button_1 = require("../Button/Button");
var SlideIn = (function (_super) {
    __extends(SlideIn, _super);
    function SlideIn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            offset: props.offset || 0,
            axis: props.from === 'left' || 'right' ? 'X' : 'Y',
            style: props.if ? { transform: 'translate' + (props.from === 'left' || 'right' ? 'X' : 'Y') + '(' + props.offset + ')' } : null,
            showChildren: props.if
        };
        return _this;
    }
    SlideIn.prototype.componentWillReceiveProps = function (nextProps) {
        nextProps.if ? this.open() : this.close();
    };
    SlideIn.prototype.open = function () {
        this.beforeOpen();
        this.afterOpen();
    };
    SlideIn.prototype.beforeOpen = function () {
        this.props.beforeOpen ? this.props.beforeOpen() : null;
        this.slideIn();
    };
    SlideIn.prototype.slideIn = function () {
        var _this = this;
        this.setState({
            style: { transform: 'translate' + this.state.axis + '(' + this.state.offset + ')' },
        }, function () {
            _this.afterOpen();
        });
    };
    SlideIn.prototype.afterOpen = function () {
        this.setState({
            showChildren: true
        });
    };
    SlideIn.prototype.close = function () {
        var _this = this;
        this.setState({
            style: null
        }, function () {
            _this.setState({
                open: false,
                showChildren: false
            });
        });
    };
    SlideIn.prototype.render = function () {
        var self = this;
        var props = self.props;
        var fill = props.fill, fixed = props.fixed, flex = props.flex;
        var slideInContainerClass = classNames('r-SlideIn', { 'e-open': (props.if) }, { 'e-fill': (fill) }, { 'e-flex': (flex) }, { 'fixed': (fixed) }, props.className, props.from);
        return (React.createElement("div", { tabIndex: -1, onClick: props.onClick, ref: "slideIn", className: slideInContainerClass, style: this.state.slideInContainerStyle },
            props.title || props.onClose ? React.createElement(Toolbar_1.default, { block: true, flush: true, noRadius: true, className: "r-Modal__header border-bottom clearfix" },
                props.title ?
                    React.createElement(Button_1.default, { simple: true, size: "small" }, this.props.title)
                    : null,
                props.onClose ?
                    React.createElement(Button_1.default, { shortcut: "x", simple: true, size: "small", right: true, onClick: props.onClose, icon: "times" })
                    : null) : null,
            props.children));
    };
    return SlideIn;
}(React.Component));
exports.default = SlideIn;
//# sourceMappingURL=SlideIn.js.map