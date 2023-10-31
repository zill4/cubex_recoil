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
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var ModalHeader = (function (_super) {
    __extends(ModalHeader, _super);
    function ModalHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalHeader.prototype.toggleFullScreen = function () {
        this.props.toggleFullScreen();
    };
    ModalHeader.prototype.hasTitle = function () {
        var props = this.props;
        var icon = props.icon, title = props.title;
        return title ?
            React.createElement("div", null,
                icon ? React.createElement("i", { className: 'pull-left mt10 fa fa-' + icon }) : null,
                React.createElement("h2", { className: "dinblock" },
                    " ",
                    title,
                    " "))
            : null;
    };
    ModalHeader.prototype.menuTemplate = function () {
        var props = this.props;
        var fullScreen = props.fullScreen, onClose = props.onClose;
        return (React.createElement(Toolbar_1.default, { size: "small", right: true, spacing: true },
            !props.hideFullScreenButton ? React.createElement(Button_1.default, { onClick: this.toggleFullScreen.bind(this), icon: fullScreen ? 'expand' : 'compress' }) : null,
            !props.hideCloseButton ? React.createElement(Button_1.default, { shortcut: "x", id: this.props.closeId, onClick: onClose, icon: "times", theme: "error" }) : null));
    };
    ModalHeader.prototype.render = function () {
        var props = this.props;
        var open = props.open, hideCloseButton = props.hideCloseButton;
        if (open && !hideCloseButton && !hideCloseButton) {
            return (React.createElement(Toolbar_1.default, { className: "r-Modal__header" },
                this.hasTitle.bind(this),
                this.menuTemplate()));
        }
        else
            return null;
    };
    return ModalHeader;
}(React.Component));
exports.default = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map