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
var Wizard_1 = require("../Wizard/Wizard");
var Shrink_1 = require("../Shrink/Shrink");
var Toggle = (function (_super) {
    __extends(Toggle, _super);
    function Toggle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked || false,
            selected: props.selected || []
        };
        return _this;
    }
    Toggle.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    };
    Toggle.prototype.onChange = function (event) {
        this.setState({
            checked: !this.state.checked
        });
        if (this.props.onChange) {
            this.props.onChange(this.state.checked, event);
        }
    };
    Toggle.prototype.changeSelected = function (item) {
        this.setState({ selected: item });
    };
    Toggle.prototype.render = function () {
        var _this = this;
        var self = this;
        var props = self.props;
        var state = self.state;
        var disabled = props.disabled, loading = props.loading;
        var toggleClass = classNames('r-Toggle', { 'e-text': (props.array && props.array.length === 2 || props.iconArray && props.iconArray.length === 2) }, { 'e-checked': (state.checked) }, { 'e-color': (props.array && props.array.length > 2 && props.type === 'colors') }, { 'e-numbers': (props.array && props.array.length > 2 && props.type !== 'colors') }, { 'pull-right': (props.right) }, props.size, props.className);
        var arrayFirstTemplate;
        var arraySecondTemplate;
        if (props.array && props.array.length === 2 || props.iconArray && props.iconArray.length === 2) {
            arrayFirstTemplate = props.array && props.array[0] || (props.iconArray[0] ? React.createElement("i", { className: "fa fa-" + props.iconArray[0] }) : null);
            arraySecondTemplate = props.array && props.array[1] || (props.iconArray[1] ? React.createElement("i", { className: "fa fa-" + props.iconArray[1] }) : null);
        }
        var loadingTemplate = React.createElement("i", { className: 'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr10' : '') });
        var createList = function (item, index) {
            var itemClass = classNames('r-Toggle__item', { 'e-selected': (state.selected === item) });
            var colorTemplate = React.createElement("div", { className: 'r-Toggle__item__color', style: { background: item, height: 26, width: 26 } });
            var stringTemplate = React.createElement("div", { className: 'r-Toggle__item__string', style: { minWidth: 26 } }, item);
            return (React.createElement("div", { className: itemClass, onClick: _this.changeSelected.bind(_this, item), key: index }, (function () {
                if (props.array && props.type === 'colors') {
                    return colorTemplate;
                }
                else {
                    return stringTemplate;
                }
            })()));
        };
        var slideIndex;
        var inputProps = {
            className: this.state.checked ? "r-Toggle__input checked" : "r-Toggle__input",
            onClick: !loading ? this.onChange.bind(this) : null
        };
        if (state.checked) {
            slideIndex = 1;
        }
        else {
            slideIndex = 0;
        }
        if (props.type === 'colors' || props.type === 'strings' || props.type === 'numbers' && props.array && props.array.length > 2) {
            return (React.createElement(Shrink_1.default, { opacity: 50, if: props.disabled, className: toggleClass }, this.props.array.map(createList)));
        }
        else {
            return (React.createElement(Shrink_1.default, { opacity: 50, if: props.disabled, className: toggleClass },
                React.createElement("input", __assign({ type: "checkbox" }, inputProps)),
                this.props.label,
                props.array && props.array.length === 2 || props.iconArray && props.iconArray.length === 2 ?
                    React.createElement("label", { className: "r-Toggle__button " + props.theme },
                        React.createElement(Wizard_1.default, { slideIndex: slideIndex },
                            React.createElement("div", { className: "text-right" }, loading ? loadingTemplate : arrayFirstTemplate),
                            React.createElement("div", { className: "text-white" }, loading ? loadingTemplate : arraySecondTemplate))) :
                    React.createElement("label", { className: "r-Toggle__button " + props.theme })));
        }
    };
    Toggle.defaultProps = {
        checked: false
    };
    return Toggle;
}(React.Component));
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map