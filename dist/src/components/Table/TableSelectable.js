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
var Selectable_1 = require("../Selectable/Selectable");
var TableSelectable = (function (_super) {
    __extends(TableSelectable, _super);
    function TableSelectable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableSelectable.prototype.render = function () {
        var self = this;
        var _a = self.props, columns = _a.columns, detailTemplate = _a.detailTemplate, selectedElements = _a.selectedElements, element = _a.element, checkable = _a.checkable, selectedKey = _a.selectedKey;
        return (React.createElement("tr", { tabIndex: -1, className: "r-TableColumnSelectable" },
            React.createElement("td", { colSpan: columns.length + (checkable ? 1 : 0) + (detailTemplate ? 1 : 0) },
                React.createElement(Selectable_1.default, { checked: selectedElements.includes(selectedKey ? element[selectedKey] : element) }))));
    };
    return TableSelectable;
}(React.Component));
exports.default = TableSelectable;
//# sourceMappingURL=TableSelectable.js.map