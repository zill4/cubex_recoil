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
var Pager_1 = require("../Pager/Pager");
var WizardSlide = function (props) {
    return (React.createElement("div", { className: props.className }, props.visible ? props.children : null));
};
var Wizard = (function (_super) {
    __extends(Wizard, _super);
    function Wizard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            slideIndex: props.slideIndex || 0
        };
        return _this;
    }
    Wizard.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.slideIndex !== this.state.slideIndex) {
            this.gotoSlideIndex(nextProps.slideIndex);
        }
    };
    Wizard.prototype.gotoSlideIndex = function (slideIndex) {
        this.setState({
            slideIndex: slideIndex
        });
    };
    Wizard.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var wizardClass = classNames('r-Wizard', { 'e-fill': (props.fill) }, { 'e-flex': (props.flex || props.paginate) }, { 'e-overflow': (props.overflow) });
        var createSlidesPartial = function (item, index) {
            var selected = state.slideIndex === index;
            var wizardSlideClass = classNames('r-WizardSlide', { 'e-selected': (state.slideIndex === index) }, { 'e-backward': (state.slideIndex > index) }, { 'e-forward': (state.slideIndex < index) }, { 'e-vertical': (props.vertical) }, { 'e-dont-animate': (props.animate === false) }, props.className);
            return (React.createElement(WizardSlide, { visible: selected, className: wizardSlideClass, key: index }, item));
        };
        if (props.children.length > 1) {
            return (React.createElement("div", { ref: "r-Wizard", className: wizardClass, style: props.style },
                React.createElement("div", { ref: 'r-Wizard__track', className: "r-Wizard__track" }, props.children.map(createSlidesPartial)),
                props.paginate ?
                    React.createElement(Pager_1.default, { numberOfPages: props.children.length, currentPage: state.slideIndex, gotoPage: this.gotoSlideIndex.bind(this), firstPage: this.gotoSlideIndex.bind(this, 0), lastPage: this.gotoSlideIndex.bind(this, props.children.length - 1), nextPage: this.gotoSlideIndex.bind(this, this.state.slideIndex + 1), previousPage: this.gotoSlideIndex.bind(this, this.state.slideIndex - 1), hidePageSize: true }) : null));
        }
        else {
            return props.children;
        }
    };
    Wizard.defaultProps = {
        slideIndex: 0
    };
    return Wizard;
}(React.Component));
exports.default = Wizard;
//# sourceMappingURL=Wizard.js.map