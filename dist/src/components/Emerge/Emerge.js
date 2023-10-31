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
var react_intersection_observer_1 = require("react-intersection-observer");
var Emerge = (function (_super) {
    __extends(Emerge, _super);
    function Emerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Emerge.prototype.render = function () {
        var self = this;
        var props = self.props;
        var index = 0;
        var emergeClass = classNames('r-Emerge', props.className, { 'e-enter': (props.if) }, { 'floshow': (props.overflow) });
        var newChildren = React.Children.map(this.props.children, function (child) {
            var exit, enter;
            if (props.if === true) {
                enter = props.enter;
            }
            else {
                enter = null;
            }
            if (props.if === false) {
                exit = props.exit;
            }
            else {
                exit = null;
            }
            var newClass = classNames('r-Emerge', 'animated', enter, exit, child.props.className);
            var newStyle = {
                animationDelay: ((index++) * props.delay) + 'ms'
            };
            function merge_options(obj1, obj2) {
                var obj3 = {};
                for (var attrname in obj1) {
                    obj3[attrname] = obj1[attrname];
                }
                for (var attrname in obj2) {
                    obj3[attrname] = obj2[attrname];
                }
                return obj3;
            }
            return React.cloneElement(child, { className: newClass, style: merge_options(newStyle, props.style) });
        });
        return (React.createElement(react_intersection_observer_1.InView, null, function (_a) {
            var inView = _a.inView, ref = _a.ref;
            return inView ? React.createElement("span", { className: emergeClass, ref: ref }, newChildren) : null;
        }));
    };
    Emerge.defaultProps = {
        if: true,
        enter: 'fadeInUp',
        exit: 'fadeOutDown',
        delay: 300,
        overflow: false
    };
    return Emerge;
}(React.Component));
exports.default = Emerge;
//# sourceMappingURL=Emerge.js.map