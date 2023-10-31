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
var Toolbar_1 = require("../Toolbar/Toolbar");
var Button_1 = require("../Button/Button");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Pager = (function (_super) {
    __extends(Pager, _super);
    function Pager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pager.prototype.gotoPage = function (pageNumber) {
        this.props.gotoPage(pageNumber);
        this.props.onPageChange ? this.props.onPageChange(pageNumber) : null;
    };
    Pager.prototype.onSelected = function (pageSizeAmount) {
        this.props.changePageSize(pageSizeAmount);
    };
    Pager.prototype.lastPage = function (numberOfPages) {
        this.props.lastPage(numberOfPages);
    };
    Pager.prototype.renderPager = function (page, pageCount, pagerSize) {
        var self = this;
        var currentPage = this.props.currentPage;
        var lastPager = page + Math.floor(pagerSize / 2);
        var firstPager = page - Math.ceil(pagerSize / 2) + 1;
        if (firstPager < 0) {
            lastPager -= firstPager;
            firstPager = 0;
        }
        if (lastPager >= pageCount) {
            var difference = lastPager - (pageCount - 1);
            lastPager -= difference;
            firstPager -= difference;
            if (firstPager < 0) {
                firstPager = 0;
            }
        }
        var pagers = [];
        for (var index = firstPager; index <= lastPager; index++) {
            pagers.push(React.createElement(Button_1.default, { simple: true, block: true, size: "small", tabIndex: -1, advanced: true, checked: currentPage === index ? true : false, onClick: this.gotoPage.bind(self, index), key: index }, index + 1));
        }
        return pagers;
    };
    Pager.prototype.render = function () {
        var self = this;
        var props = self.props;
        var currentPage = props.currentPage, firstPage = props.firstPage, previousPage = props.previousPage, nextPage = props.nextPage, pageSize = props.pageSize, pageSizerOptions = props.pageSizerOptions, numberOfPages = props.numberOfPages, dataSource = props.dataSource, rowCount = props.rowCount, hidePageSize = props.hidePageSize, pagerSize = props.pagerSize;
        var dataSourceLength;
        if (rowCount || dataSource && dataSource.length) {
            dataSourceLength = rowCount || dataSource.length;
        }
        return (React.createElement("div", { className: "r-Pager" },
            numberOfPages === 1 ? null :
                React.createElement(Toolbar_1.default, { flex: true, textCenter: true, flush: true, block: true, noRadius: true, className: props.className },
                    React.createElement(Button_1.default, { simple: true, block: true, size: "small", disabled: currentPage === 0, tabIndex: -1, onClick: firstPage, icon: "fast-backward" }),
                    React.createElement(Button_1.default, { simple: true, block: true, size: "small", disabled: currentPage === 0, tabIndex: -1, onClick: previousPage, icon: "step-backward" }),
                    this.renderPager(currentPage, numberOfPages, pagerSize ? pagerSize : 5),
                    React.createElement(Button_1.default, { simple: true, block: true, size: "small", disabled: currentPage === numberOfPages - 1, tabIndex: -1, onClick: nextPage, icon: "step-forward" }),
                    React.createElement(Button_1.default, { simple: true, block: true, size: "small", disabled: currentPage === numberOfPages - 1, tabIndex: -1, onClick: this.lastPage.bind(this, numberOfPages), icon: "fast-forward" }),
                    hidePageSize ? null : React.createElement(Dropdown_1.default, { simple: true, block: true, hideHeader: true, hideDropdownHeader: true, rowIsSelectable: "single", onChange: this.onSelected.bind(this), material: true, size: "small", title: "Page Size " + pageSize, pageSizerOptions: pageSizerOptions, dataSource: pageSizerOptions || ['5', '10', '15'] })),
            hidePageSize ? null : React.createElement(Toolbar_1.default, { flush: true, noRadius: true, className: props.className },
                React.createElement(Button_1.default, { simple: true, size: "small" }, ((currentPage + 1) * pageSize) - pageSize + 1 + ' - ' + (((currentPage + 1) * pageSize) > dataSourceLength ? dataSourceLength : (currentPage + 1) * pageSize) + '' + (' of ' + dataSourceLength + ' ' + props.title)))));
    };
    return Pager;
}(React.Component));
exports.default = Pager;
//# sourceMappingURL=Pager.js.map