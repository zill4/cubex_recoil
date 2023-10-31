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
var ReactDOM = require("react-dom");
var DropdownContent_1 = require("./DropdownContent");
var DropdownPortal = (function (_super) {
    __extends(DropdownPortal, _super);
    function DropdownPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.portalElement = null;
        _this.state = {
            position: null
        };
        return _this;
    }
    DropdownPortal.prototype.componentDidMount = function () {
        this.getDropdownPosition();
    };
    DropdownPortal.prototype.getDropdownPosition = function () {
        var _this = this;
        var element = ReactDOM.findDOMNode(this.props.element);
        var position = element.getBoundingClientRect();
        this.setState({
            position: [position.top, position.left]
        }, function () {
            _this.createDropdownPortal();
        });
    };
    DropdownPortal.prototype.createDropdownPortal = function () {
        var position = this.state.position;
        var y = position[0];
        var x = position[1];
        var absolutePosition = {
            position: 'absolute',
            top: y,
            left: x
        };
        var p = this.props.portalId && document.getElementById(this.props.portalId);
        if (!p) {
            var docfrag = document.createDocumentFragment();
            p = document.createElement('div');
            p.id = this.props.portalId;
            p.style.position = 'absolute';
            p.style.top = absolutePosition.top;
            p.style.left = absolutePosition.left;
            docfrag.appendChild(p);
            document.getElementById('Recoil').appendChild(docfrag);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    };
    DropdownPortal.prototype.componentWillUnmount = function () {
        document.getElementById('Recoil').removeChild(this.portalElement);
    };
    DropdownPortal.prototype.componentDidUpdate = function () {
        var self = this;
        var props = self.props;
        var id = props.id, open = props.open, title = props.title, onClose = props.onClose, icon = props.icon, position = props.position, type = props.type, children = props.children, dataSource = props.dataSource, focusOnMount = props.focusOnMount, hideHeader = props.hideHeader, rowIsSelectable = props.rowIsSelectable, selectedElements = props.selectedElements, selectedKey = props.selectedKey, pageSizerOptions = props.pageSizerOptions, columns = props.columns, onSort = props.onSort, sortable = props.sortable, hidePageSize = props.hidePageSize, pageSize = props.pageSize, rowCount = props.rowCount, page = props.page, onPageChange = props.onPageChange, searchableKeys = props.searchableKeys, searchTitle = props.searchTitle, contentMaxHeight = props.contentMaxHeight;
        var dropdownContentProps = {
            id: id,
            open: open,
            title: title,
            icon: icon,
            onClose: onClose,
            position: position,
            type: type,
            children: children,
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
            contentMaxHeight: contentMaxHeight
        };
        ReactDOM.render(React.createElement(DropdownContent_1.default, __assign({}, dropdownContentProps)), this.portalElement);
    };
    DropdownPortal.prototype.render = function () { return null; };
    return DropdownPortal;
}(React.Component));
exports.default = DropdownPortal;
//# sourceMappingURL=DropdownPortal.js.map