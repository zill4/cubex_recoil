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
var Portal_1 = require("../Portal/Portal");
var DropdownContentType_1 = require("./DropdownContentType");
var DropdownHeader_1 = require("./DropdownHeader");
var DropdownContent = (function (_super) {
    __extends(DropdownContent, _super);
    function DropdownContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContent.prototype.render = function () {
        var self = this;
        var props = self.props;
        var id = props.id, open = props.open, title = props.title, icon = props.icon, onClose = props.onClose, type = props.type, children = props.children, disableSelectedElements = props.disableSelectedElements, dataSource = props.dataSource, focusOnMount = props.focusOnMount, hideHeader = props.hideHeader, rowIsSelectable = props.rowIsSelectable, selectedElements = props.selectedElements, selectedKey = props.selectedKey, pageSizerOptions = props.pageSizerOptions, columns = props.columns, onSort = props.onSort, sortable = props.sortable, hidePageSize = props.hidePageSize, pageSize = props.pageSize, rowCount = props.rowCount, page = props.page, onPageChange = props.onPageChange, searchableKeys = props.searchableKeys, searchTitle = props.searchTitle, contentMaxHeight = props.contentMaxHeight, onRowSelect = props.onRowSelect, filterOpenDetailTemplate = props.filterOpenDetailTemplate, portalId = props.portalId, mobile = props.mobile, sortKey = props.sortKey, hideFooter = props.hideFooter, hideDropdownHeader = props.hideDropdownHeader, scrollToId = props.scrollToId, scrollIf = props.scrollIf, parentId = props.parentId, hideRoot = props.hideRoot;
        var dropdownHeaderProps = {
            onClose: onClose,
            title: title,
            icon: icon
        };
        var dropdownContentTypeProps = {
            id: id,
            type: type,
            children: children,
            open: open,
            disableSelectedElements: disableSelectedElements,
            dataSource: dataSource,
            focusOnMount: focusOnMount,
            hideHeader: hideHeader,
            rowIsSelectable: rowIsSelectable,
            selectedElements: selectedElements,
            selectedKey: selectedKey,
            pageSizerOptions: pageSizerOptions,
            columns: columns,
            onSort: onSort,
            sortable: sortable,
            hidePageSize: hidePageSize,
            pageSize: pageSize,
            rowCount: rowCount,
            page: page,
            onPageChange: onPageChange,
            searchableKeys: searchableKeys,
            searchTitle: searchTitle,
            contentMaxHeight: contentMaxHeight,
            onRowSelect: onRowSelect,
            filterOpenDetailTemplate: filterOpenDetailTemplate,
            sortKey: sortKey,
            hideFooter: hideFooter,
            scrollToId: scrollToId,
            scrollIf: scrollIf,
            parentId: parentId,
            hideRoot: hideRoot
        };
        var dropdownPortal = React.createElement(Portal_1.default, { portalType: "SlideIn", title: props.title, icon: props.icon, open: open, onClose: onClose, portalId: portalId },
            React.createElement(DropdownContentType_1.default, __assign({}, dropdownContentTypeProps)));
        if (mobile) {
            return dropdownPortal;
        }
        else {
            return (React.createElement("div", { className: "r-DropdownWrapper" },
                hideDropdownHeader ? null : React.createElement(DropdownHeader_1.default, __assign({}, dropdownHeaderProps)),
                React.createElement(DropdownContentType_1.default, __assign({}, dropdownContentTypeProps))));
        }
    };
    return DropdownContent;
}(React.Component));
exports.default = DropdownContent;
//# sourceMappingURL=DropdownContent.js.map