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
var TableColumn_1 = require("./TableColumn");
var Button_1 = require("../Button/Button");
var Checkbox_1 = require("../Checkbox/Checkbox");
var Utils_1 = require("../Utils");
var DetailTemplateColumnToggle = (function (_super) {
    __extends(DetailTemplateColumnToggle, _super);
    function DetailTemplateColumnToggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailTemplateColumnToggle.prototype.detailTemplateToggleSelectedElements = function (element) {
        this.props.detailTemplateToggleSelectedElements(element);
    };
    DetailTemplateColumnToggle.prototype.render = function () {
        var props = this.props;
        var detailTemplateOpenOnRowSelect = props.detailTemplateOpenOnRowSelect, element = props.element, selectedKey = props.selectedKey, filterOpenDetailTemplate = props.filterOpenDetailTemplate, selectedElements = props.selectedElements;
        return (React.createElement("td", { onClick: !detailTemplateOpenOnRowSelect ? this.detailTemplateToggleSelectedElements.bind(this, props.element) : null, className: "r-Table__DetailTd", style: { width: "25px" } }, filterOpenDetailTemplate ?
            filterOpenDetailTemplate(element) === true ?
                React.createElement(Button_1.default, { tabIndex: -1, simple: true, size: "small", icon: props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) ? 'chevron-down' : 'chevron-right' })
                : null :
            React.createElement(Button_1.default, { tabIndex: -1, simple: true, size: "small", icon: props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) ? 'chevron-down' : 'chevron-right' })));
    };
    return DetailTemplateColumnToggle;
}(React.Component));
;
var CheckboxColumn = (function (_super) {
    __extends(CheckboxColumn, _super);
    function CheckboxColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxColumn.prototype.toggleSelectedElements = function (element) {
        this.props.toggleSelectedElements(element);
    };
    CheckboxColumn.prototype.render = function () {
        var props = this.props;
        return (React.createElement("td", { style: { width: "25px" } },
            React.createElement(Checkbox_1.default, { onChange: this.toggleSelectedElements.bind(this, props.element), size: 'small', checked: props.selectedElements.includes(props.element) })));
    };
    return CheckboxColumn;
}(React.Component));
;
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRow.prototype.toggleSelectedElements = function (element, index) {
        this.props.rowIsSelectable ? this.props.toggleSelectedElements(element, index) : null;
        !this.props.rowIsSelectable && this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
        this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
    };
    TableRow.prototype.onRowSelect = function (element, index) {
        this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
        this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
    };
    TableRow.prototype.render = function () {
        var self = this;
        var props = self.props;
        var element = props.element, columns = props.columns, detailTemplate = props.detailTemplate, detailTemplateToggleSelectedElements = props.detailTemplateToggleSelectedElements, detailTemplateSelectedElements = props.detailTemplateSelectedElements, detailTemplateHideToggle = props.detailTemplateHideToggle, toggleSelectedElements = props.toggleSelectedElements, selectedElements = props.selectedElements, rowIsSelectable = props.rowIsSelectable, hideColumns = props.hideColumns, checkable = props.checkable, onRowSelect = props.onRowSelect, isArray = props.isArray, detailTemplateOpenOnRowSelect = props.detailTemplateOpenOnRowSelect, selectedKey = props.selectedKey, index = props.index, filterOpenDetailTemplate = props.filterOpenDetailTemplate, id = props.id, disableSelectedElements = props.disableSelectedElements;
        var columnsValueArray = [];
        for (var index_1 = 0; index_1 < columns.length; index_1++) {
            var key = columns[index_1].name;
            columnsValueArray.push(key ? (0, Utils_1.branchIn)(element, key) : element[key]);
        }
        var createColumnValue = function (value, key) {
            return (React.createElement(TableColumn_1.default, { isArray: isArray, hideColumns: hideColumns, element: element, key: key, value: value, column: columns[key] }));
        };
        var DetailTemplateColumnToggleProps = {
            element: element,
            detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
            detailTemplateSelectedElements: detailTemplateSelectedElements,
            detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
            selectedKey: selectedKey,
            filterOpenDetailTemplate: filterOpenDetailTemplate
        };
        var CheckBoxColumnProps = {
            element: element,
            selectedElements: selectedElements,
            toggleSelectedElements: toggleSelectedElements
        };
        var disabled = disableSelectedElements.includes(selectedKey ? element[selectedKey] : element);
        return (React.createElement("tr", { "tab-index": -1, className: selectedElements.includes(selectedKey ? element[selectedKey] : element) ? disableSelectedElements.length ? 'r-TableColumn disabled' : 'r-TableColumn checked' : 'r-TableColumn', onClick: rowIsSelectable && !checkable ?
                this.toggleSelectedElements.bind(this, element, index)
                : null
                    ||
                        (onRowSelect || detailTemplateOpenOnRowSelect ?
                            this.onRowSelect.bind(this, element, index)
                            : null) },
            checkable ? React.createElement(CheckboxColumn, __assign({}, CheckBoxColumnProps)) : null,
            detailTemplate && !detailTemplateHideToggle ? React.createElement(DetailTemplateColumnToggle, __assign({}, DetailTemplateColumnToggleProps)) : null,
            columnsValueArray.map(createColumnValue)));
    };
    return TableRow;
}(React.Component));
exports.default = TableRow;
//# sourceMappingURL=TableRow.js.map