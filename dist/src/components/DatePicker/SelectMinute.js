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
var Dropdown_1 = require("../Dropdown/Dropdown");
var SelectMinute = (function (_super) {
    __extends(SelectMinute, _super);
    function SelectMinute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMinute.prototype.render = function () {
        var _a = this.props, minute = _a.minute, minutes = _a.minutes, selectMinute = _a.selectMinute;
        return (React.createElement(Dropdown_1.default, { material: true, title: minute, selectedElements: minute, rowIsSelectable: "single", onChange: selectMinute, dataSource: minutes, pageSize: minutes.length, hideHeader: true, hideDropdownHeader: true, scrollToId: minutes[minute] }));
    };
    return SelectMinute;
}(React.Component));
exports.default = SelectMinute;
//# sourceMappingURL=SelectMinute.js.map