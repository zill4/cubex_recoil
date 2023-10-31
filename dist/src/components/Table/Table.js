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
var classNames = require("classnames");
var TableHead_1 = require("./TableHead");
var TableBody_1 = require("./TableBody");
var TableFooter_1 = require("./TableFooter");
var TableSearch_1 = require("./TableSearch");
var Layer_1 = require("../Layer/Layer");
var Toolbar_1 = require("../Toolbar/Toolbar");
var Button_1 = require("../Button/Button");
var Emerge_1 = require("../Emerge/Emerge");
var Loading_1 = require("../Loading/Loading");
var DataSource_1 = require("../DataSource/DataSource");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var self = this;
        var props = self.props;
        var disableSelectedElements = props.disableSelectedElements, searchValue = props.searchValue, selectedKey = props.selectedKey, filterOpenDetailTemplate = props.filterOpenDetailTemplate, filterRow = props.filterRow, contentMaxHeight = props.contentMaxHeight, menuTemplate = props.menuTemplate, detailTemplate = props.detailTemplate, showDataSourceLength = props.showDataSourceLength, onSort = props.onSort, hidePageSize = props.hidePageSize, rowCount = props.rowCount, sortable = props.sortable, detailTemplateOpenOnRowSelect = props.detailTemplateOpenOnRowSelect, onPageChange = props.onPageChange, hideHeader = props.hideHeader, detailTemplateHideToggle = props.detailTemplateHideToggle, rowIsSelectable = props.rowIsSelectable, checkable = props.checkable, hideColumns = props.hideColumns, onRowSelect = props.onRowSelect, pageSizerOptions = props.pageSizerOptions, sortType = props.sortType, sortKey = props.sortKey, columns = props.columns, page = props.page, pageSize = props.pageSize, detailTemplateSelectedElements = props.detailTemplateSelectedElements, selectedElements = props.selectedElements, isArray = props.isArray, numberOfPages = props.numberOfPages, numberPerPage = props.numberPerPage, dataSource = props.dataSource, activeRows = props.activeRows, toggleSelectedElements = props.toggleSelectedElements, selectAll = props.selectAll, previousPage = props.previousPage, nextPage = props.nextPage, gotoPage = props.gotoPage, firstPage = props.firstPage, lastPage = props.lastPage, detailTemplateToggleSelectedElements = props.detailTemplateToggleSelectedElements, changePageSize = props.changePageSize, toggleSorting = props.toggleSorting, filterItems = props.filterItems, detailTemplateToggleAll = props.detailTemplateToggleAll, searchTerm = props.searchTerm, title = props.title, hideFooter = props.hideFooter, scrollToId = props.scrollToId, scrollIf = props.scrollIf, loading = props.loading, hideCheckAll = props.hideCheckAll, onSearchChange = props.onSearchChange, headerTemplate = props.headerTemplate, serverSide = props.serverSide, id = props.id, portal = props.portal, focusOnMount = props.focusOnMount;
        var tableProps = {
            dataSource: dataSource,
            activeRows: activeRows,
            columns: columns,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate,
            detailTemplateSelectedElements: detailTemplateSelectedElements,
            selectedElements: selectedElements,
            checkable: checkable,
            detailTemplateHideToggle: detailTemplateHideToggle,
            hideColumns: hideColumns,
            isArray: isArray,
            detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
            selectedKey: selectedKey,
            filterRow: filterRow,
            filterOpenDetailTemplate: filterOpenDetailTemplate,
            serverSide: serverSide,
            id: id,
            portal: portal,
            disableSelectedElements: disableSelectedElements
        };
        var headProps = {
            detailTemplateToggleAll: detailTemplateToggleAll,
            selectAll: selectAll,
            sortable: sortable,
            toggleSorting: toggleSorting,
            onSort: onSort,
            sortType: sortType,
            sortKey: sortKey,
            hideCheckAll: hideCheckAll
        };
        var bodyProps = {
            rowIsSelectable: rowIsSelectable,
            toggleSelectedElements: toggleSelectedElements,
            detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
            onRowSelect: onRowSelect
        };
        var footerProps = {
            currentPage: page,
            numberOfPages: numberOfPages,
            numberPerPage: numberPerPage,
            nextPage: nextPage,
            previousPage: previousPage,
            firstPage: firstPage,
            gotoPage: gotoPage,
            lastPage: lastPage,
            changePageSize: changePageSize,
            pageSizerOptions: pageSizerOptions,
            dataSource: dataSource,
            pageSize: pageSize,
            onPageChange: onPageChange,
            rowCount: rowCount,
            hidePageSize: hidePageSize,
            hideHeader: hideHeader,
            showDataSourceLength: showDataSourceLength,
            title: title
        };
        var tableSearchProps = {
            filterItems: filterItems,
            searchableKeys: this.props.searchableKeys,
            focusOnMount: focusOnMount,
            searchTitle: this.props.searchTitle,
            value: searchValue,
            onSearchChange: onSearchChange
        };
        var tableClass = classNames('r-Table', { 'e-flex': (props.flex) }, { 'e-fill': (props.fill) }, { 'e-selectable': (!!props.rowIsSelectable) }, { 'e-selectable': (detailTemplateOpenOnRowSelect === true || detailTemplateOpenOnRowSelect === 'single') }, props.className);
        if (loading) {
            return React.createElement(Loading_1.default, null);
        }
        else if ((!!dataSource && dataSource.length) && !!columns && columns.length) {
            var nothingMatchesSearchCriteria = searchTerm !== '' && activeRows.length === 0;
            return (React.createElement("div", { id: props.id ? portal ? props.id + '-portal' : props.id : null, className: tableClass },
                headerTemplate ? headerTemplate : null,
                React.createElement(TableSearch_1.default, __assign({}, tableSearchProps)),
                menuTemplate ? menuTemplate() : null,
                React.createElement(Layer_1.default, { tabIndex: -1, scrollY: true, theme: "light", scrollToId: scrollToId, scrollIf: scrollIf, fill: true, style: contentMaxHeight ? { height: contentMaxHeight } : null }, nothingMatchesSearchCriteria ?
                    React.createElement(Emerge_1.default, { className: "e-fill" },
                        React.createElement(Toolbar_1.default, { block: true, textCenter: true, className: "p10 ptb20" },
                            React.createElement("small", null, "Nothing matches search criteria...")))
                    :
                        React.createElement("table", { "tab-index": -1, className: "w100" },
                            React.createElement(TableHead_1.default, __assign({}, tableProps, headProps)),
                            React.createElement(TableBody_1.default, __assign({}, tableProps, bodyProps)))),
                nothingMatchesSearchCriteria || hideFooter ? null : React.createElement(TableFooter_1.default, __assign({}, footerProps))));
        }
        else {
            return (React.createElement(Emerge_1.default, { className: "e-fill" },
                React.createElement(Toolbar_1.default, { block: true, textCenter: true, className: "ptb20" },
                    React.createElement(Button_1.default, { block: true, size: "large", simple: true }, "No items found"))));
        }
    };
    Table.defaultProps = {
        showDataSourceLength: true,
        title: 'items',
        portal: false,
        disableSelectedElements: [],
        scrollY: true
    };
    return Table;
}(React.Component));
exports.default = (0, DataSource_1.default)(React.createElement(Table, null));
//# sourceMappingURL=Table.js.map