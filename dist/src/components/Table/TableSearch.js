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
var Input_1 = require("../Input/Input");
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var TableSearch = (function (_super) {
    __extends(TableSearch, _super);
    function TableSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            searchTerm: props.value || ''
        };
        return _this;
    }
    TableSearch.prototype.componentDidMount = function () {
        if (this.props.value) {
            this.updateSearch(this.props.value);
        }
    };
    TableSearch.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value) {
            this.updateSearch(nextProps.value);
        }
    };
    TableSearch.prototype.updateSearch = function (term) {
        var _this = this;
        var searchTerm;
        if (/\s+$/.test(term)) {
            searchTerm = term.substring(0, term.length - 1);
        }
        else {
            searchTerm = term;
        }
        this.setState({
            searchTerm: searchTerm
        }, function () {
            if (_this._throttleTimeout) {
                clearTimeout(_this._throttleTimeout);
            }
            _this._throttleTimeout = setTimeout(function () {
                _this.props.filterItems(searchTerm, _this.props.searchableKeys);
                _this.props.onSearchChange ? _this.props.onSearchChange(searchTerm) : null;
            }, _this.props.throttle);
        });
    };
    TableSearch.prototype.render = function () {
        var _this = this;
        var self = this;
        var props = self.props;
        var focusOnMount = this.props.focusOnMount;
        var searchPartial = function () {
            return (React.createElement(Toolbar_1.default, { tabIndex: -1, theme: "light", flex: true, flush: true, block: true, noRadius: true, className: "p5 table-search" },
                React.createElement(Input_1.default, { placeholder: props.searchTitle, onChange: _this.updateSearch.bind(_this), block: true, type: "text", size: "small", flex: true, value: _this.state.searchTerm, focusOnMount: focusOnMount, tabIndex: -1 }),
                React.createElement(Button_1.default, { tabIndex: -1, size: "small", icon: "times", onClick: _this.updateSearch.bind(_this, "") })));
        };
        return props.searchableKeys ? searchPartial() : null;
    };
    TableSearch.defaultProps = {
        active: true,
        className: '',
        disabled: false,
        block: false,
        simple: true,
        throttle: 200,
        iconLocation: 'left',
        onChange: function () { }
    };
    return TableSearch;
}(React.Component));
exports.default = TableSearch;
//# sourceMappingURL=TableSearch.js.map