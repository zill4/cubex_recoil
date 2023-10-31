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
var SelectPeriod = (function (_super) {
    __extends(SelectPeriod, _super);
    function SelectPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectPeriod.prototype.render = function () {
        var _a = this.props, period = _a.period, periods = _a.periods, selectPeriod = _a.selectPeriod;
        return (React.createElement(Dropdown_1.default, { className: "w100", material: true, block: true, title: periods[period], selectedElements: [periods[period]], rowIsSelectable: "single", onChange: selectPeriod, dataSource: periods, pageSize: periods.length, hideHeader: true, hideDropdownHeader: true, scrollToId: periods[period] }));
    };
    return SelectPeriod;
}(React.Component));
exports.default = SelectPeriod;
//# sourceMappingURL=SelectPeriod.js.map