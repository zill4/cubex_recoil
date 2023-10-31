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
var Layer_1 = require("../Layer/Layer");
var SlideIn_1 = require("../SlideIn/SlideIn");
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.portalElement = null;
        return _this;
    }
    Portal.prototype.componentDidMount = function () {
        var p = this.props.portalId && document.getElementById(this.props.portalId);
        if (!p) {
            var docfrag = document.createDocumentFragment();
            p = document.createElement('div');
            p.id = this.props.portalId;
            docfrag.appendChild(p);
            document.getElementById('Recoil').appendChild(docfrag);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    };
    Portal.prototype.componentWillUnmount = function () {
        document.getElementById('Recoil').removeChild(this.portalElement);
    };
    Portal.prototype.componentDidUpdate = function () {
        if (this.props.portalType !== 'SlideIn') {
            ReactDOM.render(React.createElement(Layer_1.default, { flex: true, fill: true }, this.props.children), this.portalElement);
        }
        else {
            ReactDOM.render(React.createElement(SlideIn_1.default, { flex: true, onClose: this.props.onClose, title: this.props.title, icon: this.props.icon, className: "r-Portal z5", fixed: true, from: "bottom", fill: true, if: this.props.open },
                React.createElement(Layer_1.default, { flex: true, fill: true }, this.props.children)), this.portalElement);
        }
    };
    Portal.prototype.render = function () { return null; };
    Portal.defaultProps = {
        portalType: 'SlideIn'
    };
    return Portal;
}(React.Component));
exports.default = Portal;
;
//# sourceMappingURL=Portal.js.map