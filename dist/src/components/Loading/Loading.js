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
var Button_1 = require("../Button/Button");
var Emerge_1 = require("../Emerge/Emerge");
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading(props) {
        return _super.call(this, props) || this;
    }
    Loading.prototype.render = function () {
        var self = this;
        var props = self.props;
        var src = props.src, size = props.size, theme = props.theme, title = props.title;
        var loadingClass = classNames('r-Loading', 'loader', "dinblock", props.className, props.size);
        if (props.if) {
            if (src)
                return React.createElement("div", { className: loadingClass },
                    React.createElement("img", { height: props.height, width: props.width, src: src }));
            else {
                return (React.createElement("div", { className: loadingClass },
                    React.createElement("i", { className: "fa fa-circle-o-notch fa-spin" }),
                    this.props.icon ? React.createElement(Emerge_1.default, { enter: "fadeIn" },
                        React.createElement(Button_1.default, { size: props.size, simple: true, className: "center-icon", icon: this.props.icon })) : null));
            }
        }
        else
            return null;
    };
    return Loading;
}(React.Component));
exports.default = Loading;
//# sourceMappingURL=Loading.js.map