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
var ReactDOM = require("react-dom");
var classNames = require("classnames");
var Selectable_1 = require("../Selectable/Selectable");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false,
            progressiveClickIndex: 0,
            clickCounter: 0,
            showShortcut: false
        };
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        var self = this;
        var props = self.props;
        if (props.progressiveClick) {
            this.setState({
                progressiveClickLength: props.progressiveClick.length
            });
        }
    };
    Button.prototype.onClick = function (event) {
        this.props.onClick ? this.props.onClick(event) : null;
    };
    Button.prototype.progressiveClick = function () {
        var self = this;
        var array = this.props.progressiveClick;
        var state = self.state;
        var clickIndex = state.progressiveClickIndex;
        var arrayLength = state.progressiveClickLength;
        if (clickIndex < arrayLength) {
            array[clickIndex]();
            self.setState({
                progressiveClickIndex: clickIndex + 1
            });
        }
        else {
            array[0]();
            self.setState({
                progressiveClickIndex: 1
            });
        }
    };
    Button.prototype.startShortcutListener = function (e) {
        var context = this;
        var props = context.props;
        var state = context.state;
        var refButton = ReactDOM.findDOMNode(context.refs["button"]);
        context.setState({
            showShortcut: e.shiftKey ? true : false
        });
        if (e.shiftKey && e.code === "Key" + props.shortcut.toUpperCase()) {
            refButton.focus();
        }
    };
    Button.prototype.render = function () {
        var _this = this;
        var self = this;
        var props = self.props;
        var buttonType;
        ;
        var buttonClass = classNames('r-Button', { 'simple': (props.simple) }, { 'e-required': (props.required) }, { 'outline': (props.outline) }, { 'block': (props.block) }, { 'column': (props.strech) }, { 'icon': (!props.children) }, { 'button-pointer-right': (props.pointer === 'right') }, { 'button-pointer-left': (props.pointer === 'left') }, { 'icon-right': (props.iconLocation === 'right') }, { 'icon-left': (props.iconLocation === 'left') }, { 'pull-right': (props.right) }, { 'pull-left': (props.left) }, props.size, props.theme, props.className, { 'checked': (props.checked) }, { 'fill': (props.fill) });
        if (props.submit) {
            buttonType = 'submit';
        }
        else {
            buttonType = 'button';
        }
        var showTooltip = function () {
            if (_this.state.showShortcut) {
                return React.createElement("div", { className: "animated text-center fadeIn w100" }, _this.props.shortcut);
            }
        };
        var selectablePartial = React.createElement(Selectable_1.default, { type: props.checkedTheme, checked: props.checked ? true : false });
        var iconPartial = (props.icon && !props.loading ? props.materialIcon ? React.createElement("i", { className: 'material-icons' }, props.icon) : React.createElement("i", { className: 'fa fa-' + props.icon }) : null);
        var loadingPartial = (props.loading ? React.createElement("i", { className: 'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr10' : '') }) : null);
        var animatedIcon = (props.iconPointer && !props.loading ? React.createElement("i", { className: "icon-pointer fa fa-caret-" + props.iconPointer }) : null);
        var iconWrapperRight = (props.icon && props.iconLocation === 'right' && !this.state.showShortcut ? React.createElement("div", { className: 'icon-pointer-' + props.iconPointer + " ml10 icon-wrapper " + (props.children ? "mr10" : "") },
            iconPartial,
            props.iconPointer ? animatedIcon : null) : null);
        var iconWrapperLeft = (props.icon && props.iconLocation === 'left' && !this.state.showShortcut ? React.createElement("div", { className: 'icon-pointer-' + props.iconPointer + " icon-wrapper " + (props.children ? "mr10" : "") },
            iconPartial,
            props.iconPointer ? animatedIcon : null) : null);
        var linkButton = function () {
            return (React.createElement("a", { href: props.href, id: props.id, target: props.target, ref: "button", tabIndex: props.tabIndex, onClick: props.progressiveClick ? _this.progressiveClick.bind(_this) : _this.onClick.bind(_this), className: buttonClass, style: props.style },
                iconWrapperLeft,
                loadingPartial,
                !_this.state.showShortcut ? props.children : showTooltip(),
                selectablePartial,
                iconWrapperRight));
        };
        var simpleButton = function () {
            return (React.createElement("button", { id: props.id, ref: "button", tabIndex: props.tabIndex, onClick: _this.onClick.bind(_this), type: buttonType, disabled: props.disabled || props.loading === true, className: buttonClass, style: props.style },
                iconWrapperLeft,
                loadingPartial,
                !_this.state.showShortcut ? props.children : showTooltip(),
                iconWrapperRight));
        };
        var defaultButton = function () {
            return (React.createElement("button", { id: props.id, ref: "button", tabIndex: props.tabIndex, onClick: props.progressiveClick ? _this.progressiveClick.bind(_this) : _this.onClick.bind(_this), type: buttonType, disabled: props.disabled || props.loading === true, className: buttonClass, style: props.style },
                iconWrapperLeft,
                loadingPartial,
                !_this.state.showShortcut ? props.children : showTooltip(),
                selectablePartial,
                iconWrapperRight));
        };
        if (props.href) {
            return linkButton();
        }
        else {
            return props.advanced ? defaultButton() : simpleButton();
        }
    };
    Button.defaultProps = {
        disabled: false,
        block: false,
        advanced: false,
        iconLocation: 'left',
        scrollDuration: 300,
        scrollOffset: 0
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map