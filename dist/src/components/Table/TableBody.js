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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TableRow_1 = require("./TableRow");
var TableDetail_1 = require("./TableDetail");
var TableSelectable_1 = require("./TableSelectable");
var TableBody = (function (_super) {
    __extends(TableBody, _super);
    function TableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBody.prototype.render = function () {
        var self = this;
        var props = self.props;
        var columns = props.columns, detailTemplate = props.detailTemplate, activeRows = props.activeRows, selectedElements = props.selectedElements, dataSource = props.dataSource, serverSide = props.serverSide, detailTemplateOpenAll = props.detailTemplateOpenAll, detailTemplateToggleSelectedElements = props.detailTemplateToggleSelectedElements, detailTemplateSelectedElements = props.detailTemplateSelectedElements, detailTemplateHideToggle = props.detailTemplateHideToggle, disableSelectedElements = props.disableSelectedElements, toggleSelectedElements = props.toggleSelectedElements, rowIsSelectable = props.rowIsSelectable, id = props.id, portal = props.portal, checkable = props.checkable, hideColumns = props.hideColumns, onRowSelect = props.onRowSelect, isArray = props.isArray, detailTemplateOpenOnRowSelect = props.detailTemplateOpenOnRowSelect, selectedKey = props.selectedKey, filterRow = props.filterRow, filterOpenDetailTemplate = props.filterOpenDetailTemplate;
        var columnArray = [];
        var key;
        var data;
        if (serverSide) {
            data = dataSource;
        }
        else {
            data = activeRows;
        }
        if (data instanceof Array) {
            data.map(function (element, index) {
                var columnProps = {
                    element: element,
                    columns: columns,
                    detailTemplate: detailTemplate,
                    toggleSelectedElements: toggleSelectedElements,
                    detailTemplateOpenAll: detailTemplateOpenAll,
                    detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
                    detailTemplateSelectedElements: detailTemplateSelectedElements,
                    detailTemplateHideToggle: detailTemplateHideToggle,
                    rowIsSelectable: rowIsSelectable,
                    selectedElements: selectedElements,
                    checkable: checkable,
                    hideColumns: hideColumns,
                    onRowSelect: onRowSelect,
                    index: index,
                    isArray: isArray,
                    detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
                    selectedKey: selectedKey,
                    filterOpenDetailTemplate: filterOpenDetailTemplate,
                    id: id,
                    disableSelectedElements: disableSelectedElements
                };
                if (typeof element === 'string' || typeof element === 'number') {
                    key = element;
                }
                else {
                    if (!element['_uniqueId']) {
                        Object.defineProperty(element, '_uniqueId', {
                            configurable: true,
                            enumerable: false,
                            writable: true,
                            value: Math.floor(Math.random() * 100000)
                        });
                    }
                    key = element['_uniqueId'];
                }
                var keySelectable = key + '_selectable';
                var keyDetail = key + '_detail';
                var filteredElement;
                filterRow ? filteredElement = filterRow(element) : filteredElement = false;
                if (filteredElement === false) {
                    columnArray.push([
                        [React.createElement(TableRow_1.default, __assign({ key: key, id: key }, columnProps))],
                        [React.createElement(TableSelectable_1.default, __assign({ key: keySelectable }, columnProps))],
                        [React.createElement(TableDetail_1.default, __assign({ key: keyDetail }, columnProps))]
                    ]);
                }
                else
                    return null;
            });
        }
        return (React.createElement("tbody", { "tab-index": -1 }, columnArray));
    };
    return TableBody;
}(React.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map