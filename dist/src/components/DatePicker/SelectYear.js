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
var SelectYear = (function (_super) {
    __extends(SelectYear, _super);
    function SelectYear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectYear.prototype.render = function () {
        var _a = this.props, year = _a.year, selectYear = _a.selectYear;
        return (React.createElement(Dropdown_1.default, { material: true, title: year.toString(), selectedElements: [year], dataSource: availableYears(year), rowIsSelectable: "single", onChange: selectYear, pageSize: availableYears(year).length, hideHeader: true, hideDropdownHeader: true }));
    };
    return SelectYear;
}(React.Component));
exports.default = SelectYear;
function availableYears(year) {
    var availableYearsArray = [];
    var startYear = year - 2;
    var endYear = year + 100;
    function recursion(start, end) {
        var currentYear = start;
        var endYear = end;
        if (currentYear < endYear) {
            availableYearsArray.push(currentYear);
            recursion(currentYear + 1, endYear);
        }
        else {
            return false;
        }
    }
    recursion(startYear, endYear);
    return availableYearsArray;
}
//# sourceMappingURL=SelectYear.js.map