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
var DropdownHeader = (function (_super) {
    __extends(DropdownHeader, _super);
    function DropdownHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownHeader.prototype.titleTemplate = function () {
        var self = this;
        var props = self.props;
        var onClose = props.onClose, title = props.title, icon = props.icon;
        return (React.createElement(Button_1.default, { tabIndex: -1, icon: icon, left: true, simple: true, onClick: onClose }, title));
    };
    DropdownHeader.prototype.menuTemplate = function () {
        var props = this.props;
        var onClose = props.onClose;
        return (React.createElement(Button_1.default, { shortcut: 'x', tabIndex: -1, simple: true, right: true, icon: "times", onClick: onClose }));
    };
    DropdownHeader.prototype.render = function () {
        var self = this;
        var props = self.props;
        var onClose = props.onClose;
        return (React.createElement(Toolbar_1.default, { onClick: onClose, block: true, className: "r-Dropdown__header" },
            this.titleTemplate(),
            this.menuTemplate()));
    };
    return DropdownHeader;
}(React.Component));
exports.default = DropdownHeader;
//# sourceMappingURL=DropdownHeader.js.map