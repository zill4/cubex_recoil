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
var Utils_1 = require("../Utils");
var Button_1 = require("../Button/Button");
var Checkbox_1 = require("../Checkbox/Checkbox");
var DetailTemplateHeadToggle = (function (_super) {
    __extends(DetailTemplateHeadToggle, _super);
    function DetailTemplateHeadToggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailTemplateHeadToggle.prototype.detailTemplateToggleAll = function (dataSource) {
        this.props.detailTemplateToggleAll(dataSource);
    };
    DetailTemplateHeadToggle.prototype.render = function () {
        var props = this.props;
        return (React.createElement("th", { style: { width: "25" }, className: "r-Table__DetailTd text-center" },
            React.createElement(Button_1.default, { icon: (0, Utils_1.arraysEqual)(props.dataSource, props.detailTemplateSelectedElements) ? 'chevron-down' : 'chevron-right', onClick: this.detailTemplateToggleAll.bind(this, props.dataSource), simple: true, size: "small" })));
    };
    return DetailTemplateHeadToggle;
}(React.Component));
var CheckboxHead = (function (_super) {
    __extends(CheckboxHead, _super);
    function CheckboxHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxHead.prototype.selectAll = function (dataSource) {
        this.props.selectAll(dataSource);
    };
    CheckboxHead.prototype.render = function () {
        var props = this.props;
        var hideCheckAll = props.hideCheckAll;
        return (React.createElement("th", { style: { width: "25px" } }, !hideCheckAll ? React.createElement(Checkbox_1.default, { onChange: this.selectAll.bind(this, props.dataSource), size: 'small', checked: (0, Utils_1.arraysEqual)(props.dataSource, props.selectedElements) }) : null));
    };
    return CheckboxHead;
}(React.Component));
;
var TableHead = (function (_super) {
    __extends(TableHead, _super);
    function TableHead(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sortType: props.sortType || 'desc',
            column: props.sortKey || '',
            columns: []
        };
        return _this;
    }
    TableHead.prototype.toggleSorting = function (dataSource, columnName) {
        var self = this;
        this.setState({
            sortType: this.state.sortType === 'desc' ? 'asc' : 'desc',
            column: columnName
        }, function () {
            self.props.onSort ? self.props.onSort(columnName, self.state.sortType) : self.props.toggleSorting(dataSource, columnName, self.state.sortType);
        });
    };
    TableHead.prototype.render = function () {
        var _this = this;
        var _a = this.props, detailTemplate = _a.detailTemplate, hideCheckAll = _a.hideCheckAll, sortKey = _a.sortKey, columns = _a.columns, detailTemplateHideToggle = _a.detailTemplateHideToggle, hideHeader = _a.hideHeader, hideColumns = _a.hideColumns, detailTemplateToggleAll = _a.detailTemplateToggleAll, dataSource = _a.dataSource, detailTemplateSelectedElements = _a.detailTemplateSelectedElements, selectAll = _a.selectAll, checkable = _a.checkable, selectedElements = _a.selectedElements, sortable = _a.sortable;
        var columnHeadArray = [];
        columns.map(function (key, index) {
            var hideColumnsArrayIncludesEitherNameOrTitle = hideColumns && hideColumns.includes(key.title ? key.title : key.name);
            if (hideColumnsArrayIncludesEitherNameOrTitle) {
                return null;
            }
            else {
                columnHeadArray.push(React.createElement("th", { style: { width: key.width }, key: index }, key.titleTemplate ? key.titleTemplate() : React.createElement(Button_1.default, { tabIndex: -1, className: "p0", icon: sortable && (key.name === sortKey || key.title === sortKey) ? 'sort-' + _this.state.sortType : null, size: "small", simple: true, iconLocation: "right", onClick: sortable ? _this.toggleSorting.bind(_this, dataSource, key.name || key.title) : null }, key.hideHeader ? null : (key.title || key.name))));
            }
        });
        var detailTemplateHeadProps = {
            detailTemplateToggleAll: detailTemplateToggleAll,
            dataSource: dataSource,
            detailTemplateSelectedElements: detailTemplateSelectedElements
        };
        var checkboxHeadProps = {
            selectAll: selectAll,
            selectedElements: selectedElements,
            dataSource: dataSource,
            hideCheckAll: hideCheckAll
        };
        if (!hideHeader) {
            return (React.createElement("thead", { "tab-index": -1 },
                React.createElement("tr", null,
                    checkable ? React.createElement(CheckboxHead, __assign({}, checkboxHeadProps)) : null,
                    detailTemplate && !detailTemplateHideToggle ? React.createElement(DetailTemplateHeadToggle, __assign({}, detailTemplateHeadProps)) : null,
                    columnHeadArray)));
        }
        else
            return null;
    };
    return TableHead;
}(React.Component));
exports.default = TableHead;
//# sourceMappingURL=TableHead.js.map