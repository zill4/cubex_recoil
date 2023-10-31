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
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var self = this;
        var props = self.props;
        var toolbarClass = classNames('r-Toolbar', { 'border': (props.border) }, { 'vertical': (props.vertical) }, { 'horizontal': (!props.vertical) }, { 'text-center': (props.textCenter) }, { 'no-radius': (props.noRadius) }, { 'spacing': (props.spacing) }, { 'w100': (props.block) }, { 'dblock': (props.vertical && props.block) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'w100': (props.fill) }, { 'wh100': (props.fill) }, { 'flush': (props.flush) }, { 'no-border': (props.noBorder) }, props.className, { 'tabs': (props.tabs) }, { 'e-flex-row': (props.flex) }, { 'breadcrumbs': (props.breadcrumbs) }, { 'disabled': (props.disabled) }, props.size, props.theme);
        if (props.form) {
            return (React.createElement("form", { "tab-index": -1, id: this.props.id, ref: "toolbar", style: Object.assign({}, props.style), className: toolbarClass, onClick: this.props.onClick }, props.children));
        }
        else {
            return (React.createElement("div", { "tab-index": -1, id: this.props.id, ref: "toolbar", style: Object.assign({}, props.style), className: toolbarClass, onClick: this.props.onClick }, props.children));
        }
    };
    return Toolbar;
}(React.Component));
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.js.map