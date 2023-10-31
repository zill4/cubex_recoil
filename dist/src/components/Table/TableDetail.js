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
var Open_1 = require("../Open/Open");
var TableDetail = (function (_super) {
    __extends(TableDetail, _super);
    function TableDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDetail.prototype.shouldComponentUpdate = function () {
        return true;
    };
    TableDetail.prototype.render = function () {
        var self = this;
        var props = self.props;
        var element = props.element, columns = props.columns, detailTemplate = props.detailTemplate, detailTemplateOpenAll = props.detailTemplateOpenAll, detailTemplateSelectedElements = props.detailTemplateSelectedElements, checkable = props.checkable, selectedKey = props.selectedKey;
        if (detailTemplate) {
            return (React.createElement("tr", { className: "r-TableColumnDetail" },
                React.createElement("td", { colSpan: columns.length + (checkable ? 1 : 0) + (detailTemplate ? 1 : 0) },
                    React.createElement(Open_1.default, { if: detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) || detailTemplateOpenAll }, self.props.detailTemplate(element)))));
        }
        else
            return null;
    };
    return TableDetail;
}(React.Component));
exports.default = TableDetail;
//# sourceMappingURL=TableDetail.js.map