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
var Selectable = (function (_super) {
    __extends(Selectable, _super);
    function Selectable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selectable.prototype.render = function () {
        var self = this;
        var props = self.props;
        var selectableClass = classNames('r-Selectable', 'r-Selectable__border', props.type, { 'checked': (props.checked) });
        return React.createElement("div", { tabIndex: -1, className: selectableClass });
    };
    Selectable.defaultProps = {
        type: 'primary'
    };
    return Selectable;
}(React.Component));
exports.default = Selectable;
//# sourceMappingURL=Selectable.js.map