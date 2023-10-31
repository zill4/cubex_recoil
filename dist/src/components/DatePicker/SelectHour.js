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
var SelectHour = (function (_super) {
    __extends(SelectHour, _super);
    function SelectHour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectHour.prototype.render = function () {
        var _a = this.props, hour = _a.hour, hours = _a.hours, selectHour = _a.selectHour;
        return (React.createElement(Dropdown_1.default, { material: true, title: hour, selectedElements: [hour], rowIsSelectable: "single", onChange: selectHour, dataSource: hours, pageSize: hours.length, hideHeader: true, hideDropdownHeader: true, scrollToId: hours[hour] }));
    };
    return SelectHour;
}(React.Component));
exports.default = SelectHour;
//# sourceMappingURL=SelectHour.js.map