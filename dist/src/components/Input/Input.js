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
var classNames = require("classnames");
var Selectable_1 = require("../Selectable/Selectable");
var SlideIn_1 = require("../SlideIn/SlideIn");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false,
            value: _this.setCurrentValue(),
            mouseOut: false
        };
        return _this;
    }
    Input.prototype.setCurrentValue = function (props) {
        if (props === void 0) { props = this.props; }
        return props.value || props.defaultValue || '';
    };
    Input.prototype.componentWillReceiveProps = function (nextProps) {
        var props = this.props;
        var valueIsChanging = nextProps.value !== props.value;
        if (valueIsChanging || nextProps.defaultValue !== props.defaultValue) {
            var value = this.setCurrentValue(nextProps);
            valueIsChanging ? this.setState({ value: value, checked: true }) : null;
        }
        if (nextProps.value && nextProps.value.length) {
            this.setState({ checked: true });
        }
        if (nextProps.focusOnMount !== this.props.focusOnMount) {
            this.focusOnMount();
        }
    };
    Input.prototype.componentDidMount = function () {
        var props = this.props;
        if (props.focusOnMount) {
            this.focusOnMount();
        }
    };
    Input.prototype.componentWillUnmount = function () {
        var inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
        inputDOM.blur();
    };
    Input.prototype.focusOnMount = function () {
        var self = this;
        var inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
        var focusDelay = self.props.focusDelay || 400;
        if (inputDOM) {
            setTimeout(function () {
                inputDOM.focus();
            }, focusDelay);
        }
    };
    Input.prototype.focus = function (e) {
        this.setState({
            checked: true
        });
    };
    Input.prototype.blur = function (event) {
        var _this = this;
        var inputDOM = this.refs['refInput'];
        if (inputDOM) {
            var value_1 = inputDOM.value;
            this.setState({
                checked: value_1 !== '' ? true : false,
                value: value_1
            }, function () {
                _this.props.onBlur ? _this.props.onBlur(value_1, event) : null;
            });
        }
    };
    Input.prototype.mouseOut = function () {
        var inputDOM = this.refs['refInput'];
        if (inputDOM) {
            this.setState({
                mouseOut: inputDOM.onmouseout ? false : true
            });
        }
    };
    Input.prototype.onChange = function (event) {
        this.inputValue(event.target.value, event);
    };
    Input.prototype.limit = function (max) {
        var inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
        var maxLength = max - 1;
        if (inputDOM.value.length > maxLength) {
            inputDOM.value = inputDOM.value.substr(0, maxLength);
        }
    };
    Input.prototype.inputValue = function (value, event) {
        this.setValue(value, event);
    };
    Input.prototype.setValue = function (value, event) {
        var _this = this;
        this.setState({
            value: value
        }, function () {
            _this.props.onChange ? _this.props.onChange(value, event) : null;
        });
    };
    Input.prototype.disableKeys = function (key, event) {
        if (this.props.disableKeys.includes(key)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    };
    Input.prototype.onKeyDown = function (a) {
        this.props.disableKeys ? this.disableKeys(a.key, a) : null;
    };
    Input.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var inputPartial, iconPartial, pencilPartial, textAreaScrollHeight, errorInlinePartialTop, errorInlinePartialBottom;
        var errorInlinePartial = function () {
            if (props.errorInline && (props.errorDirection === 'top' || 'bottom') && props.errorMessage) {
                return (React.createElement(SlideIn_1.default, { from: props.errorDirection, if: !state.mouseOut && props.error, className: "p5 h90 r-Layer light w100 error-pane h30px " },
                    React.createElement("div", { className: "error-message" }, props.errorMessage)));
            }
            else {
                return null;
            }
        };
        if (props.icon) {
            iconPartial = React.createElement("small", null,
                React.createElement("i", { className: 'fa fa-' + props.icon }));
        }
        else {
            iconPartial = null;
        }
        var inputDOM = this.refs['refInput'];
        if (inputDOM) {
            if (props.autoExpand) {
                textAreaScrollHeight = Math.min(self.props.scrollHeight, 300) + 'px';
            }
            else {
                textAreaScrollHeight = null;
            }
            if (!props.placeholder && !state.value) {
                pencilPartial = null;
            }
            else {
                pencilPartial = null;
            }
        }
        if (!props.errorInline && props.error) {
            if (props.errorDirection === 'top') {
                errorInlinePartialTop = React.createElement("small", { className: "error-message" }, props.errorMessage);
                errorInlinePartialBottom = null;
            }
            else {
                errorInlinePartialBottom = React.createElement("small", { className: "error-message" }, props.errorMessage);
                errorInlinePartialTop = null;
            }
        }
        else {
            errorInlinePartialTop = null;
            errorInlinePartialBottom = null;
        }
        var valueProps;
        if (props.defaultValue) {
            valueProps = {
                defaultValue: state.value
            };
        }
        else {
            valueProps = {
                value: state.value
            };
        }
        var inputProps = {
            onKeyPress: this.onKeyDown.bind(this),
            autoComplete: props.autoComplete,
            name: props.name,
            ref: 'refInput',
            onChange: this.focus.bind(this),
            onInput: this.onChange.bind(this),
            onBlur: this.blur.bind(this),
            onFocus: this.focus.bind(this),
            placeholder: !props.advanced ? props.title ? props.title : props.placeholder : props.placeholder
        };
        switch (props.type) {
            case 'number':
                inputPartial =
                    React.createElement("input", __assign({}, valueProps, inputProps, { max: props.max, min: props.min, type: "number", id: props.inputId }));
                break;
            case 'textarea':
                inputPartial = React.createElement("textarea", { id: props.inputId, name: props.name, rows: props.rows, cols: props.cols, ref: "refInput", style: { height: textAreaScrollHeight }, onFocus: this.focus.bind(this), onBlur: this.blur.bind(this), onChange: this.focus.bind(this) });
                break;
            default:
                inputPartial =
                    React.createElement("input", __assign({ id: props.inputId }, valueProps, inputProps, { type: props.type, size: props.inputSize }));
        }
        var inputWrapperClass = classNames('r-Input', { 'w100': (props.block) }, { 'simple': (props.simple) }, { 'checked': (this.state.checked) }, { 'flex': (props.flex) }, props.size, props.className);
        var inputClassadvanced = classNames('r-Input', props.size, props.advanced ? 'w100' : props.className, { 'w100': (props.block) }, { 'checked': (this.state.checked) }, { 'e-disabled': (props.disabled) }, { 'e-required': (!props.disabled && props.required && !props.value) }, 'r-Input__container', 'flohide', { 'no-title': (!props.title) }, { 'simple': (props.simple) }, 'e-advanced');
        if (!props.advanced) {
            return (React.createElement("div", { className: inputClassadvanced }, inputPartial));
        }
        else {
            return (React.createElement("div", { id: props.id, className: inputWrapperClass, style: props.style },
                props.errorMessage ? errorInlinePartialTop : null,
                React.createElement("div", { "tab-index": -1, className: inputClassadvanced },
                    iconPartial,
                    React.createElement("small", null, props.title),
                    inputPartial,
                    pencilPartial,
                    React.createElement(Selectable_1.default, { type: props.error ? 'error' : 'primary', ghost: props.simple, checked: self.state.checked }),
                    errorInlinePartial()),
                props.errorMessage ? errorInlinePartialBottom : null));
        }
    };
    Input.defaultProps = {
        advanced: false,
        type: 'text'
    };
    return Input;
}(React.Component));
exports.default = Input;
//# sourceMappingURL=Input.js.map