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
var Button_1 = require("../Button/Button");
var Tags_1 = require("../Tags/Tags");
var DropdownContent_1 = require("./DropdownContent");
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dropdownIsOpen: props.open || false,
            type: props.dataSource && props.type !== 'tree' ? "table" : props.type,
            selectedElements: props.selectedElements || [],
            scrollToId: props.scrollToId || '',
            title: props.title || ''
        };
        return _this;
    }
    Dropdown.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.type !== this.props.type) {
            this.setState({
                type: nextProps.type
            });
        }
        if (!this.props.loading && nextProps.open !== this.state.dropdownIsOpen) {
            this.setState({
                dropdownIsOpen: nextProps.open
            }, function () {
                _this.props.onOpen && _this.state.dropdownIsOpen === true ? _this.props.onOpen(true) : null;
                _this.props.onClose && _this.state.dropdownIsOpen === false ? _this.props.onOpen(false) : null;
            });
        }
        if (nextProps.scrollToId !== this.state.scrollToId) {
            this.setState({
                scrollToId: nextProps.scrollToId
            });
        }
        if (nextProps.selectedElements !== this.state.selectedElements) {
            this.setState({
                selectedElements: nextProps.selectedElements
            });
        }
        if (this.props.type === 'tree' && this.props.selectedElements && nextProps.selectedElements.length !== this.props.selectedElements.length) {
            this.closeDropdown();
        }
    };
    Dropdown.prototype.closeDropdown = function () {
        var _this = this;
        this.setState({
            dropdownIsOpen: false
        }, function () {
            _this.props.onClose ? _this.props.onClose(false) : null;
        });
    };
    Dropdown.prototype.openDropdown = function () {
        var _this = this;
        this.setState({
            dropdownIsOpen: true
        }, function () {
            _this.props.onOpen ? _this.props.onOpen(true) : null;
        });
    };
    Dropdown.prototype.onRowSelect = function (element, index, selectedElements, id) {
        var _this = this;
        var rowIsSelectable = this.props.rowIsSelectable;
        this.setState({
            selectedElements: selectedElements
        }, function () {
            if (rowIsSelectable === 'single') {
                _this.setState({
                    scrollToId: _this.props.selectedKey ? element[_this.props.titleKey ? _this.props.titleKey : _this.props.selectedKey] : null
                });
                _this.closeDropdown();
            }
            _this.props.onChange ? _this.props.onChange(element, index, selectedElements, id) : null;
        });
    };
    Dropdown.prototype.removeSelectedItem = function (item) {
        function remove(array, element) {
            return array.filter(function (e) { return e !== element; });
        }
        this.setState({
            selectedElements: remove(this.state.selectedElements, item)
        });
    };
    Dropdown.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var id = props.id, title = props.title, icon = props.icon, size = props.size, iconPointer = props.iconPointer, iconLocation = props.iconLocation, simple = props.simple, outline = props.outline, checked = props.checked, advanced = props.advanced, loading = props.loading, theme = props.theme, pointer = props.pointer, required = props.required, checkedTheme = props.checkedTheme, disabled = props.disabled, parentId = props.parentId, shortcut = props.shortcut, children = props.children, disableSelectedElements = props.disableSelectedElements, dataSource = props.dataSource, focusOnMount = props.focusOnMount, hideHeader = props.hideHeader, rowIsSelectable = props.rowIsSelectable, selectedKey = props.selectedKey, pageSizerOptions = props.pageSizerOptions, columns = props.columns, onSort = props.onSort, sortable = props.sortable, hidePageSize = props.hidePageSize, pageSize = props.pageSize, rowCount = props.rowCount, page = props.page, onPageChange = props.onPageChange, searchableKeys = props.searchableKeys, searchTitle = props.searchTitle, contentMaxHeight = props.contentMaxHeight, filterOpenDetailTemplate = props.filterOpenDetailTemplate, mobile = props.mobile, sortKey = props.sortKey, hideFooter = props.hideFooter, hideDropdownHeader = props.hideDropdownHeader, hideRoot = props.hideRoot, tagSelected = props.tagSelected;
        var buttonProps = {
            block: true,
            shortcut: shortcut,
            icon: icon,
            size: size,
            iconPointer: iconPointer,
            iconLocation: iconLocation,
            simple: simple,
            outline: outline,
            checked: checked,
            advanced: advanced,
            theme: theme,
            pointer: pointer,
            required: required,
            loading: loading,
            disabled: disabled,
            checkedTheme: checkedTheme,
            onClick: props.onClick || this.openDropdown.bind(this)
        };
        var dropdownPortalProps = {
            id: id,
            title: title,
            icon: icon,
            children: children,
            portalId: guidGenerator(),
            onClose: this.closeDropdown.bind(this),
            open: state.dropdownIsOpen,
            position: state.position,
            type: state.type,
            disableSelectedElements: disableSelectedElements,
            dataSource: dataSource,
            focusOnMount: focusOnMount,
            hideHeader: hideHeader,
            rowIsSelectable: rowIsSelectable,
            selectedElements: this.state.selectedElements,
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
            onRowSelect: this.onRowSelect.bind(this),
            filterOpenDetailTemplate: filterOpenDetailTemplate,
            mobile: mobile,
            sortKey: sortKey,
            hideFooter: hideFooter,
            hideDropdownHeader: hideDropdownHeader,
            scrollToId: this.state.scrollToId,
            scrollIf: this.state.dropdownIsOpen,
            parentId: parentId,
            hideRoot: hideRoot
        };
        var dropdownClass = classNames('r-Dropdown', { 'e-open': (state.dropdownIsOpen) }, { 'block': (props.block) }, { 'pull-right': (props.right) }, { 'pull-left': (props.left) }, { 'material': (props.material) }, this.props.dropDirection, props.className);
        var selectedTitle = rowIsSelectable === 'single' && this.state.selectedElements && this.state.selectedElements.length > 0 && !this.props.title ? this.state.selectedElements[0] : props.title;
        if (tagSelected) {
            return (React.createElement("div", { className: "dinblock", id: id, ref: 'dropdown' },
                React.createElement(Tags_1.default, { onRemove: this.removeSelectedItem.bind(this), dataSource: this.state.selectedElements }),
                React.createElement("div", { className: dropdownClass },
                    React.createElement(Button_1.default, __assign({}, buttonProps), selectedTitle),
                    React.createElement(DropdownContent_1.default, __assign({}, dropdownPortalProps)))));
        }
        else {
            return (React.createElement("div", { id: id, ref: 'dropdown', className: dropdownClass },
                React.createElement(Button_1.default, __assign({}, buttonProps), selectedTitle),
                React.createElement(DropdownContent_1.default, __assign({}, dropdownPortalProps))));
        }
    };
    Dropdown.defaultProps = {
        type: 'children',
        contentMaxHeight: 200,
        material: true,
        hideFooter: true
    };
    return Dropdown;
}(React.Component));
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map