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
var classNames = require("classnames");
function delegate(el, evt, sel, handler) {
    el.addEventListener(evt, function (event) {
        var t = event.target;
        while (t && t !== this) {
            if (t.matches(sel)) {
                handler.call(t, event);
            }
            t = t.parentNode;
        }
    });
}
var Recoil = (function (_super) {
    __extends(Recoil, _super);
    function Recoil(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputIsFocused: false,
            mobile: props.mobile || false
        };
        return _this;
    }
    Recoil.prototype.componentDidMount = function () {
        this.detectMobile();
    };
    Recoil.prototype.detectMobile = function () {
        var _this = this;
        this.setState({
            mobile: window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480
        }, function () {
            _this.isMobile(_this.state.mobile);
            _this.state.mobile ? _this.props.onMobile ? _this.props.onMobile(_this.state.mobile) : null : null;
        });
    };
    Recoil.prototype.componentWillReceiveProps = function (nextProps) {
        this.isMobile(nextProps.mobile);
    };
    Recoil.prototype.isMobile = function (mobile) {
        var self = this;
        if (mobile) {
            delegate(self.refs.Recoil, "focusin", "input", function () {
                self.setState({
                    inputIsFocused: true
                });
            });
            delegate(self.refs.Recoil, "focusout", "input", function () {
                self.setState({
                    inputIsFocused: false
                });
            });
        }
    };
    Recoil.prototype.render = function () {
        var self = this;
        var props = self.props;
        var RecoilClass = classNames('r-Recoil', { 'e-NightMode': (props.nightmode) }, { 'flohide': (props.overflow) }, { 'e-scroll': (props.scroll) }, { 'e-scroll-y': (props.scrollY) }, { 'e-scroll-x': (props.scrollX) }, { 'e-inputIsFocused': (this.state.inputIsFocused) }, props.className);
        return (React.createElement("div", { ref: 'Recoil', id: 'Recoil', className: RecoilClass }, this.props.children));
    };
    return Recoil;
}(React.Component));
exports.default = Recoil;
//# sourceMappingURL=Recoil.js.map