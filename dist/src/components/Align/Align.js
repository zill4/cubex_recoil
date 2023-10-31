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
var AlignChild = function (props) {
    var columns = props.columns, vertical = props.vertical, width = props.width, element = props.element, margin = props.margin;
    var alignChildStyle = {
        flex: columns || vertical ? 'none' : '1 !important',
        padding: margin,
        width: !vertical ? width + '%' : null,
        height: vertical ? width + '%' : null
    };
    return (React.createElement("div", { className: "r-Align__Child", style: alignChildStyle }, element));
};
var Align = (function (_super) {
    __extends(Align, _super);
    function Align(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            widthArray: [],
            maxColumnsLength: 0
        };
        return _this;
    }
    Align.prototype.componentDidMount = function () {
        this.props.columns ? this.alignColumns(this.props.columns) : null;
    };
    Align.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.columns !== this.props.columns) {
            this.alignColumns(nextProps.columns);
        }
    };
    Align.prototype.alignUpdate = function (widthArray, singleColumnLength, maxColumnsLength) {
        var _this = this;
        this.setState({
            maxColumnsLength: maxColumnsLength
        }, function () {
            widthArray.push((singleColumnLength / _this.state.maxColumnsLength) * 100);
            _this.setState({ widthArray: widthArray });
        });
    };
    Align.prototype.alignColumns = function (columns) {
        var _this = this;
        var widthArray = [];
        var maxColumnsLength = 0;
        if (columns) {
            columns.map(function (singleColumnLength) {
                maxColumnsLength += singleColumnLength;
                _this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
            });
        }
    };
    Align.prototype.alignChildren = function (element, key) {
        var _a = this.props, columns = _a.columns, margin = _a.margin, vertical = _a.vertical;
        return (React.createElement(AlignChild, { key: key, element: element, width: this.state.widthArray[key], columns: columns, margin: margin, vertical: vertical }));
    };
    Align.prototype.render = function () {
        var self = this;
        var props = self.props;
        var vertical = props.vertical, children = props.children, className = props.className, fill = props.fill;
        var alignChildren = self.alignChildren.bind(self);
        var alignClass = classNames('r-Align', { 'e-vertical': (vertical) }, { 'e-horizontal': (!vertical) }, { 'e-fill': (fill) }, className);
        return (React.createElement("div", { style: this.props.style, className: alignClass }, children.length > 1 ? children.map(alignChildren) : this.props.children));
    };
    return Align;
}(React.Component));
exports.default = Align;
//# sourceMappingURL=Align.js.map