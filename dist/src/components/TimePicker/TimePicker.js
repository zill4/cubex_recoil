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
var Toolbar_1 = require("../Toolbar/Toolbar");
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelect = function (time) {
            _this.setState({
                time: time
            });
            _this.props.onSelect ? _this.props.onSelect(time) : null;
        };
        _this.onChange = function (value) {
            _this.setState({
                time: new Date(value).getTime()
            });
        };
        var time = _this.props.time || new Date(Date.now()).getTime();
        _this.state = {
            time: time
        };
        return _this;
    }
    TimePicker.prototype.render = function () {
        return (React.createElement(Toolbar_1.default, { flex: true, flush: true },
            React.createElement(Dropdown_1.default, { rowIsSelectable: "single", hideDropdownHeader: true, hideHeader: true, title: 'HH', dataSource: hours }),
            React.createElement(Dropdown_1.default, { rowIsSelectable: "single", hideDropdownHeader: true, hideHeader: true, title: 'MM', dataSource: secondsMinutes }),
            React.createElement(Dropdown_1.default, { rowIsSelectable: "single", hideDropdownHeader: true, hideHeader: true, title: 'SS', dataSource: secondsMinutes })));
    };
    return TimePicker;
}(React.Component));
exports.default = TimePicker;
var hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
var secondsMinutes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59
];
//# sourceMappingURL=TimePicker.js.map