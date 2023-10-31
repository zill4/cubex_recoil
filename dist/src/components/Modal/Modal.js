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
var Portal_1 = require("../Portal/Portal");
var ModalHeader_1 = require("./ModalHeader");
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fullScreen: props.fullScreen || false,
            open: props.open || false,
            showChildren: false
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        this.props.open ? this.open() : this.close();
    };
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        nextProps.open ? this.open() : this.close();
    };
    Modal.prototype.open = function () {
        this.beforeOpen();
        this.afterOpen();
    };
    Modal.prototype.beforeOpen = function () {
        this.props.beforeOpen ? this.props.beforeOpen() : null;
        this.openModal();
    };
    Modal.prototype.openModal = function () {
        var _this = this;
        this.setState({
            open: true
        }, function () {
            _this.afterOpen();
        });
    };
    Modal.prototype.afterOpen = function () {
        this.setState({
            showChildren: true
        });
    };
    Modal.prototype.close = function () {
        this.setState({
            open: false,
            showChildren: false
        });
    };
    Modal.prototype.toggleFullScreen = function () {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
    };
    Modal.prototype.closeModal = function () {
        this.setState({
            open: false,
            showChildren: false
        });
        this.props.onClose ? this.props.onClose() : null;
    };
    Modal.prototype.render = function () {
        var self = this;
        var props = self.props;
        var modalWrapperClass = classNames('r-Modal', { 'e-show': (this.state.open) }, { 'ghost': (props.ghost) }, { 'e-float': (props.float) }, { 'e-fade': (props.effect === 'fade') }, { 'e-fill': (props.fill) }, { 'e-fullscreen': (self.state.fullScreen) }, { 'mobile': props.mobile }, { 'flohide': (props.overflow) });
        var modalClass = classNames('r-ModalContent', props.className);
        return (React.createElement(Portal_1.default, { portalType: "SlideIn", open: this.state.open, portalId: guidGenerator() }, this.state.showChildren ? React.createElement("div", { className: modalWrapperClass },
            React.createElement("div", { ref: 'Modal', className: modalClass, style: props.style },
                !props.hideHeader ?
                    React.createElement(ModalHeader_1.default, { open: this.state.open, icon: this.props.icon, title: this.props.title, fullScreen: this.state.fullScreen, toggleFullScreen: this.toggleFullScreen.bind(this), onClose: this.closeModal.bind(this), hideFullScreenButton: props.hideFullScreenButton, hideCloseButton: props.hideCloseButton, closeId: props.closeId })
                    : null,
                props.children)) : null));
    };
    return Modal;
}(React.Component));
exports.default = Modal;
//# sourceMappingURL=Modal.js.map