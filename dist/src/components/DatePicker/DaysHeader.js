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
var DaysHeader = (function (_super) {
    __extends(DaysHeader, _super);
    function DaysHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaysHeader.prototype.render = function () {
        return (React.createElement("table", { className: "w100" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "p5" }, "Sun"),
                    React.createElement("th", { className: "p5" }, "Mon"),
                    React.createElement("th", { className: "p5" }, "Tue"),
                    React.createElement("th", { className: "p5" }, "Wed"),
                    React.createElement("th", { className: "p5" }, "Thu"),
                    React.createElement("th", { className: "p5" }, "Fri"),
                    React.createElement("th", { className: "p5" }, "Sat")))));
    };
    return DaysHeader;
}(React.Component));
exports.default = DaysHeader;
//# sourceMappingURL=DaysHeader.js.map