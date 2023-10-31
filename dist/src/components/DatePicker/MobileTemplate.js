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
var Months_1 = require("./Months");
var Layer_1 = require("../Layer/Layer");
var MobileTemplate = (function (_super) {
    __extends(MobileTemplate, _super);
    function MobileTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileTemplate.prototype.render = function () {
        var _a = this.props, monthNames = _a.monthNames, date = _a.date, selectDay = _a.selectDay, selectedDay = _a.selectedDay, year = _a.year, getWeeks = _a.getWeeks, month = _a.month, setHeight = _a.setHeight;
        var Jan = getWeeks(year, 0), Feb = getWeeks(year, 1), Mar = getWeeks(year, 2), Apr = getWeeks(year, 3), May = getWeeks(year, 4), Jun = getWeeks(year, 5), Jul = getWeeks(year, 6), Aug = getWeeks(year, 7), Sep = getWeeks(year, 8), Oct = getWeeks(year, 9), Nov = getWeeks(year, 10), Dec = getWeeks(year, 11);
        return (React.createElement(Layer_1.default, { style: setHeight, className: "r-Calendar-Scroll", flex: true, scrollY: true, scrollIf: month.toString().length, scrollToId: month.toString() },
            React.createElement("div", { id: "0" },
                React.createElement(Months_1.default, { title: monthNames[0], year: year, month: 0, currentMonth: Jan, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "1" },
                React.createElement(Months_1.default, { title: monthNames[1], year: year, month: 1, currentMonth: Feb, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "2" },
                React.createElement(Months_1.default, { title: monthNames[2], year: year, month: 2, currentMonth: Mar, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "3" },
                React.createElement(Months_1.default, { title: monthNames[3], year: year, month: 3, currentMonth: Apr, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "4" },
                React.createElement(Months_1.default, { title: monthNames[4], year: year, month: 4, currentMonth: May, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "5" },
                React.createElement(Months_1.default, { title: monthNames[5], year: year, month: 5, currentMonth: Jun, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "6" },
                React.createElement(Months_1.default, { title: monthNames[6], year: year, month: 6, currentMonth: Jul, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "7" },
                React.createElement(Months_1.default, { title: monthNames[7], year: year, month: 7, currentMonth: Aug, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "8" },
                React.createElement(Months_1.default, { title: monthNames[8], year: year, month: 8, currentMonth: Sep, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "9" },
                React.createElement(Months_1.default, { title: monthNames[9], year: year, month: 9, currentMonth: Oct, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "10" },
                React.createElement(Months_1.default, { title: monthNames[10], year: year, month: 10, currentMonth: Nov, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true })),
            React.createElement("div", { id: "11" },
                React.createElement(Months_1.default, { title: monthNames[11], year: year, month: 11, currentMonth: Dec, selectDay: selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: true }))));
    };
    return MobileTemplate;
}(React.Component));
exports.default = MobileTemplate;
//# sourceMappingURL=MobileTemplate.js.map