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
var Layer_1 = require("../Layer/Layer");
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var Months_1 = require("./Months");
var DaysHeader_1 = require("./DaysHeader");
var SelectMonth_1 = require("./SelectMonth");
var SelectYear_1 = require("./SelectYear");
var SelectHour_1 = require("./SelectHour");
var SelectMinute_1 = require("./SelectMinute");
var MobileTemplate_1 = require("./MobileTemplate");
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var createArrayOfNumbers = function (n, string) {
    var numbersArray = [];
    for (var x = 0; x < n; x++) {
        numbersArray.push(x.toString() + string);
    }
    return numbersArray;
};
var periods = ['AM', 'PM'];
var Calendar = (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.increaseMonth = function () {
            _this.setState({
                month: _this.state.month === 11 ? 0 : _this.state.month + 1
            });
        };
        _this.selectMonth = function () {
            var Args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                Args[_i] = arguments[_i];
            }
            var monthIndex = Args[1];
            _this.setState({
                month: monthIndex
            });
        };
        _this.decreaseMonth = function () {
            _this.setState({
                month: (_this.state.month + 11) % 12
            });
        };
        _this.increaseYear = function () {
            _this.setState({
                year: _this.state.year + 1
            });
        };
        _this.selectYear = function (year) {
            _this.setState({
                year: Number(year)
            });
        };
        _this.decreaseYear = function () {
            _this.setState({
                year: _this.state.year - 1
            });
        };
        var date = props.date || new Date(Date.now());
        _this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date,
            selectedDay: props.selectedDay || new Date(Date.now()),
            hour: date.getHours() + 'h' || "0h",
            minute: date.getMinutes() + 'm' || "0m",
            period: 'AM'
        };
        return _this;
    }
    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.date !== this.props.date) {
            this.setState({
                date: nextProps.date,
                year: nextProps.date.getFullYear(),
                month: nextProps.date.getMonth()
            });
        }
    };
    Calendar.prototype.selectDay = function (day) {
        if (this.props.onSelect) {
            this.props.onSelect(day);
            this.setState({
                selectedDay: day
            });
        }
    };
    Calendar.prototype.getDays = function (year, month) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var days = [firstDay];
        for (var index = 2, length_1 = lastDay.getDate(); index < length_1; index++) {
            days.push(new Date(year, month, index));
        }
        days.push(lastDay);
        return days;
    };
    Calendar.prototype.getWeeks = function (year, month) {
        var days = this.getDays(year, month);
        var weeks = [];
        var week;
        if (days[0].getDay() !== 0) {
            week = [];
            weeks.push(week);
        }
        days.forEach(function (day) {
            if (day.getDay() === 0) {
                week = [];
                weeks.push(week);
            }
            week.push(day);
        });
        return weeks;
    };
    Calendar.prototype.selectHour = function (hour) {
        this.setState({
            hour: hour
        });
    };
    Calendar.prototype.selectMinute = function (min) {
        this.setState({
            minute: min
        });
    };
    Calendar.prototype.SelectPeriod = function (period) {
        this.setState({
            period: period
        });
    };
    Calendar.prototype.render = function () {
        var self = this;
        var _a = self.state, year = _a.year, month = _a.month, date = _a.date, selectedDay = _a.selectedDay;
        var _b = self.props, calendarHeight = _b.calendarHeight, inDropdown = _b.inDropdown;
        var setHeight = inDropdown ? { height: '100%' } : { height: calendarHeight };
        return (React.createElement(Layer_1.default, { flex: true, className: "r-Calendar" },
            React.createElement(Toolbar_1.default, { flush: true, block: true, flex: true, noRadius: true },
                React.createElement(Toolbar_1.default, { block: !this.props.selectTime, flush: true, flex: true, noRadius: true },
                    React.createElement(Button_1.default, { onClick: this.decreaseMonth, icon: "chevron-left" }),
                    React.createElement(Button_1.default, { onClick: this.increaseMonth, icon: "chevron-right" }),
                    React.createElement(SelectMonth_1.default, { month: month, monthNames: monthNames, selectMonth: this.selectMonth.bind(this) }),
                    React.createElement(SelectYear_1.default, { year: year, monthNames: monthNames, selectYear: this.selectYear.bind(this) })),
                this.props.selectTime ?
                    React.createElement(Toolbar_1.default, { flush: true, flex: true, noRadius: true },
                        React.createElement(Button_1.default, null, "-"),
                        React.createElement(SelectHour_1.default, { hour: this.state.hour, hours: createArrayOfNumbers(25, 'h'), selectHour: this.selectHour.bind(this) }),
                        React.createElement(Button_1.default, null, ":"),
                        React.createElement(SelectMinute_1.default, { minute: this.state.minute, minutes: createArrayOfNumbers(60, 'm'), selectMinute: this.selectMinute.bind(this) }))
                    : null),
            React.createElement(Layer_1.default, { overflow: true, flex: true, theme: "light" },
                React.createElement(Layer_1.default, { fill: true, flex: true },
                    React.createElement(DaysHeader_1.default, null),
                    this.props.mobile ?
                        React.createElement(MobileTemplate_1.default, { monthNames: monthNames, date: this.state.date, selectDay: this.selectDay.bind(this), selectedDay: this.state.selectedDay, year: this.state.year, getWeeks: this.getWeeks.bind(this), month: this.state.month, setHeight: setHeight })
                        :
                            React.createElement(Months_1.default, { title: monthNames[this.state.month], year: year, month: this.state.month, currentMonth: this.getWeeks(year, this.state.month), selectDay: this.selectDay.bind(this), date: date, selectedDay: selectedDay, mobile: this.props.mobile })))));
    };
    Calendar.defaultProps = {
        calendarHeight: '400px',
        inDropdown: false,
        date: new Date(Date.now()),
        selectTime: false
    };
    return Calendar;
}(React.Component));
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map