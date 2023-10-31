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
var Table_1 = require("../Table/Table");
var Tree_1 = require("../Tree/Tree");
var Calendar_1 = require("../DatePicker/Calendar");
var DropdownContentType = (function (_super) {
    __extends(DropdownContentType, _super);
    function DropdownContentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContentType.prototype.render = function () {
        var self = this;
        var props = self.props;
        var id = props.id, children = props.children, open = props.open, disableSelectedElements = props.disableSelectedElements, dataSource = props.dataSource, focusOnMount = props.focusOnMount, hideHeader = props.hideHeader, rowIsSelectable = props.rowIsSelectable, selectedElements = props.selectedElements, selectedKey = props.selectedKey, pageSizerOptions = props.pageSizerOptions, columns = props.columns, onSort = props.onSort, sortable = props.sortable, hidePageSize = props.hidePageSize, pageSize = props.pageSize, rowCount = props.rowCount, page = props.page, onPageChange = props.onPageChange, searchableKeys = props.searchableKeys, searchTitle = props.searchTitle, contentMaxHeight = props.contentMaxHeight, onRowSelect = props.onRowSelect, filterOpenDetailTemplate = props.filterOpenDetailTemplate, sortKey = props.sortKey, hideFooter = props.hideFooter, scrollToId = props.scrollToId, scrollIf = props.scrollIf, parentId = props.parentId, hideRoot = props.hideRoot;
        var dropdownTypePartial;
        var tableProps = {
            disableSelectedElements: disableSelectedElements,
            id: id,
            portal: true,
            dataSource: dataSource,
            focusOnMount: focusOnMount,
            hideHeader: hideHeader,
            rowIsSelectable: rowIsSelectable,
            selectedElements: selectedElements,
            selectedKey: selectedKey,
            pageSizerOptions: pageSizerOptions,
            columns: columns,
            onSort: onSort,
            hidePageSize: hidePageSize,
            pageSize: pageSize ? pageSize : dataSource ? dataSource.length : pageSize,
            rowCount: rowCount,
            page: page,
            onPageChange: onPageChange,
            searchableKeys: searchableKeys,
            searchTitle: searchTitle,
            contentMaxHeight: contentMaxHeight,
            onRowSelect: onRowSelect,
            filterOpenDetailTemplate: filterOpenDetailTemplate,
            sortKey: sortKey,
            sortable: sortable,
            hideFooter: hideFooter,
            scrollToId: scrollToId,
            scrollIf: scrollIf,
            scrollY: true
        };
        var treeProps = {
            dataSource: dataSource,
            columns: columns,
            onRowSelect: onRowSelect,
            selectedElements: selectedElements,
            selectedKey: selectedKey,
            filterOpenDetailTemplate: filterOpenDetailTemplate,
            parentId: parentId,
            hideRoot: hideRoot
        };
        switch (props.type) {
            case 'table':
                dropdownTypePartial = React.createElement(Table_1.default, __assign({}, tableProps));
                break;
            case 'tree':
                dropdownTypePartial = React.createElement(Tree_1.default, __assign({}, treeProps));
                break;
            case 'calendar':
                dropdownTypePartial = React.createElement(Calendar_1.default, null);
                break;
            default:
                dropdownTypePartial = children;
        }
        return open ? dropdownTypePartial : null;
    };
    return DropdownContentType;
}(React.Component));
exports.default = DropdownContentType;
//# sourceMappingURL=DropdownContentType.js.map