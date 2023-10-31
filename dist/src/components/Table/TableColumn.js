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
var Dropdown_1 = require("../Dropdown/Dropdown");
var Button_1 = require("../Button/Button");
var TableColumn = (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            type: ''
        };
        return _this;
    }
    TableColumn.prototype.componentDidMount = function () {
        this.renderType();
    };
    TableColumn.prototype.renderType = function () {
        var self = this;
        var props = self.props;
        var value = props.value;
        if (value instanceof Array) {
            this.setState({
                type: 'Array'
            });
        }
        else if (typeof value === 'object' && value !== null) {
            this.setState({
                type: 'Object'
            });
        }
        else {
            this.setState({
                type: 'Value'
            });
        }
    };
    TableColumn.prototype.render = function () {
        var self = this;
        var state = self.state;
        var type = state.type;
        var _a = self.props, value = _a.value, column = _a.column, element = _a.element, hideColumns = _a.hideColumns, isArray = _a.isArray;
        var hideColumnsArrayIncludesEitherNameOrTitle = hideColumns && hideColumns.includes(column.title ? column.title : column.name);
        if (isArray) {
            return (React.createElement("td", { tabIndex: -1, id: element, style: { width: column.width } }, column.template ? column.template(element) : React.createElement(Button_1.default, { size: 'small', simple: true }, element)));
        }
        else if (type !== '' && !hideColumnsArrayIncludesEitherNameOrTitle) {
            return (React.createElement("td", { tabIndex: -1, id: value ? value.toString() : null, style: { width: column.width } }, column.template ?
                column.template(element) :
                type === 'Value' ?
                    value ?
                        React.createElement(Button_1.default, { size: 'small', simple: true }, value.toString()) :
                        null :
                    React.createElement(Dropdown_1.default, { className: "r-Table-Dropdown", material: true, dataSource: value, title: type })));
        }
        return null;
    };
    return TableColumn;
}(React.Component));
exports.default = TableColumn;
//# sourceMappingURL=TableColumn.js.map