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
var Months = (function (_super) {
    __extends(Months, _super);
    function Months() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Months.prototype.render = function () {
        var _this = this;
        var _a = this.props, year = _a.year, month = _a.month, currentMonth = _a.currentMonth, date = _a.date, title = _a.title, selectedDay = _a.selectedDay, mobile = _a.mobile;
        if (currentMonth) {
            return (React.createElement("table", { className: "w100 h100" },
                React.createElement("tbody", { className: "r-Calendar__body h100" },
                    mobile ? React.createElement("tr", null,
                        React.createElement("td", { colSpan: 7, className: "month-header" }, title)) : null,
                    currentMonth.map(function (week, index) {
                        return (React.createElement("tr", { key: index },
                            index === 0 && week.length < 7 ?
                                React.createElement("td", { className: "empty-date p0", colSpan: 7 - week.length })
                                : undefined,
                            week.map(function (day, index) {
                                var selected = selectedDay.toDateString() == day.toDateString();
                                return (React.createElement("td", { className: "p0", key: year + ' ' + month + ' ' + index },
                                    React.createElement(Button_1.default, { simple: true, advanced: true, checked: selected, onClick: _this.props.selectDay.bind(_this, day), theme: selected ? 'primary' : undefined, className: "e-fill" }, day.getDate())));
                            }),
                            index > 0 && week.length < 7 ?
                                React.createElement("td", { className: "empty-date p0", colSpan: 7 - week.length })
                                : undefined));
                    }))));
        }
        else
            return null;
    };
    return Months;
}(React.Component));
exports.default = Months;
//# sourceMappingURL=Months.js.map