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
var SelectMonth = (function (_super) {
    __extends(SelectMonth, _super);
    function SelectMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMonth.prototype.render = function () {
        var _a = this.props, month = _a.month, selectMonth = _a.selectMonth, monthNames = _a.monthNames;
        return (React.createElement(Dropdown_1.default, { className: "w100", material: true, title: monthNames[month], selectedElements: [monthNames[month]], rowIsSelectable: "single", onChange: selectMonth, dataSource: monthNames, pageSize: monthNames.length, hideHeader: true, hideDropdownHeader: true, scrollToId: monthNames[month] }));
    };
    return SelectMonth;
}(React.Component));
exports.default = SelectMonth;
//# sourceMappingURL=SelectMonth.js.map