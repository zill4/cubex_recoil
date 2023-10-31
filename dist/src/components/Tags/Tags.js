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
var Open_1 = require("../Open/Open");
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var Utils_1 = require("../Utils");
var Tags = (function (_super) {
    __extends(Tags, _super);
    function Tags(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dataSource: props.dataSource || [],
            open: false
        };
        return _this;
    }
    Tags.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                dataSource: nextProps.dataSource,
                open: true
            });
        }
        if (nextProps.dataSource && nextProps.dataSource.length === 0) {
            this.setState({
                dataSource: [],
                open: false
            });
        }
    };
    Tags.prototype.onRemove = function (item) {
        this.props.onRemove(item);
    };
    Tags.prototype.render = function () {
        var _this = this;
        var _array = [];
        var createList = function (item, index) {
            _array.push(React.createElement(Toolbar_1.default, { flush: true, key: index, className: "mr10" },
                React.createElement(Button_1.default, { size: "small" }, _this.props.branchIn ? (0, Utils_1.branchIn)(item, _this.props.branchIn) : item),
                React.createElement(Button_1.default, { size: "small", icon: "times", onClick: _this.onRemove.bind(_this, item) })));
        };
        if (!!this.state.dataSource) {
            this.state.dataSource.map(createList);
        }
        return (React.createElement(Open_1.default, { openToHeight: '32px', if: this.state.open && !!this.state.dataSource }, _array));
    };
    return Tags;
}(React.Component));
exports.default = Tags;
//# sourceMappingURL=Tags.js.map