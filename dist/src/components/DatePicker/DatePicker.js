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
exports.Calendar = void 0;
var React = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Calendar_1 = require("./Calendar");
exports.Calendar = Calendar_1.default;
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelect = function (date) {
            _this.setState({
                date: date
            });
            _this.props.onSelect ? _this.props.onSelect(date) : null;
        };
        var date = _this.props.date || new Date(Date.now());
        _this.state = {
            date: date,
            open: props.open || false
        };
        return _this;
    }
    DatePicker.prototype.componentWillReceiveProps = function (nextProps) {
        var self = this;
        if (nextProps.open !== this.props.open) {
            self.setState({
                open: nextProps.open
            });
        }
        if (nextProps.date !== this.props.date) {
            self.setState({
                date: nextProps.date
            });
        }
    };
    DatePicker.prototype.toggleOpen = function () {
        if (this.props.onClick) {
            this.props.onClick();
        }
        else {
            this.setState({
                open: !this.state.open
            });
        }
    };
    DatePicker.prototype.toggleClose = function () {
        this.setState({
            open: false
        });
    };
    DatePicker.prototype.onOpen = function (boolean) {
        return null;
    };
    DatePicker.prototype.render = function () {
        var date = this.state.date;
        var _a = this.props, mobile = _a.mobile, title = _a.title, className = _a.className, outline = _a.outline, size = _a.size, block = _a.block;
        return (React.createElement(Dropdown_1.default, { className: className, icon: "calendar", type: "text", material: true, title: title ? title : getDateFormatted(this.state.date, this.props.selectTime), mobile: mobile, open: this.state.open, onClick: this.toggleOpen.bind(this), onClose: this.toggleClose.bind(this), theme: this.props.theme, outline: outline, size: size, block: block, onOpen: this.onOpen.bind(this) },
            React.createElement(Calendar_1.default, { mobile: mobile, selectTime: this.props.selectTime, selectedDay: this.state.date, inDropdown: true, date: date, onSelect: this.onSelect })));
    };
    return DatePicker;
}(React.Component));
exports.default = DatePicker;
function getDateFormatted(date, selectTime) {
    var dd = date.getDate(), mm = date.getMonth() + 1, yyyy = date.getFullYear(), hours = date.getHours(), minutes = date.getMinutes(), day = dd < 10 ? '0' + dd : '' + dd, month = mm < 10 ? '0' + mm : '' + mm;
    if (selectTime) {
        return month + '/' + day + '/' + yyyy + ' - ' + hours + ':' + minutes;
    }
    else {
        return month + '/' + day + '/' + yyyy;
    }
}
//# sourceMappingURL=DatePicker.js.map