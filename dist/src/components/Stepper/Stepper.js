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
var Align_1 = require("../Align/Align");
var Shrink_1 = require("../Shrink/Shrink");
var Stepper = (function (_super) {
    __extends(Stepper, _super);
    function Stepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stepper.prototype.render = function () {
        var self = this;
        var props = self.props;
        var itemArray = [];
        var createList = function (item, index) {
            if (index === props.children.length - 1) {
                itemArray.push(React.createElement(Shrink_1.default, { key: index, opacity: 50, scale: 1, if: index > props.stepIndex },
                    React.createElement("div", null, item)));
            }
            else {
                itemArray.push(React.createElement(Shrink_1.default, { key: index, opacity: 50, scale: 1, if: index > props.stepIndex },
                    React.createElement("div", null, item)), React.createElement(Shrink_1.default, { key: index, opacity: 50, scale: 1, if: index > props.stepIndex },
                    React.createElement("div", { className: index > props.stepIndex - 1 ? "flex-step e-gray" : "flex-step" })));
            }
        };
        props.children.map(createList);
        return (React.createElement("div", { className: "r-Stepper dblock w100" },
            props.title ? React.createElement("h5", null, props.title) : null,
            React.createElement(Align_1.default, { vertical: props.vertical }, itemArray)));
    };
    return Stepper;
}(React.Component));
exports.default = Stepper;
//# sourceMappingURL=Stepper.js.map