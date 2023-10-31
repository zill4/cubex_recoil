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
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var classNames = require("classnames");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked || false
        };
        return _this;
    }
    Checkbox.prototype.toggleChecked = function () {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onChange ? this.props.onChange(this.state.checked) : null;
    };
    Checkbox.prototype.notchecked = function () {
        this.setState({
            checked: false
        });
    };
    Checkbox.prototype.checked = function () {
        this.setState({
            checked: true
        });
    };
    Checkbox.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            checked: nextProps.checked !== this.state.checked ? nextProps.checked : this.state.checked
        });
    };
    Checkbox.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var checked = state.checked;
        var checkboxClass = classNames('r-Checkbox', { 'disabled': (props.disabled) }, { 'e-checked': (this.state.checked) });
        var checkboxProps = {
            disabled: props.disabled,
            loading: props.loading,
            size: props.size,
            onClick: this.toggleChecked.bind(this),
            theme: props.theme ? props.theme : checked ? 'primary' : 'default'
        };
        return (React.createElement(Toolbar_1.default, { flush: true },
            React.createElement(Button_1.default, __assign({ className: checkboxClass, icon: props.icon }, checkboxProps)),
            props.title ? React.createElement(Button_1.default, __assign({}, checkboxProps, { simple: true }), props.title) : null));
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map