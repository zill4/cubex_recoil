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
var index_1 = require("../../../src/index");
var TutorialView_1 = require("./TutorialView");
var AlignProperties = [
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names.'
    },
    {
        name: 'columns',
        type: 'Array<numbers>',
        options: 'Array<numbers>',
        description: 'Set an array of numbers to define each column width. e.g. 3 columns with the left most expanded would be [1,1,2]'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: '',
        description: 'Give the Align component a height and width of 100%.'
    },
    {
        name: 'margin',
        type: 'number, px, %',
        options: '',
        description: 'Defines the spacing between columns in px or % etc.'
    },
    {
        name: 'vertical',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the children are aligned vertically.'
    }
];
var TutorialAlign = (function (_super) {
    __extends(TutorialAlign, _super);
    function TutorialAlign(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            columns: [1, 1, 1]
        };
        return _this;
    }
    TutorialAlign.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialAlign.prototype.setColumns = function (columns) {
        this.setState({
            columns: columns
        });
    };
    TutorialAlign.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialAlign.prototype.render = function () {
        var _this = this;
        var self = this;
        var props = self.props;
        var state = self.state;
        var columns = [
            { name: 'name', width: 120 },
            { name: 'type', width: 140 },
            { name: 'description' }
        ];
        var example = function () {
            return (React.createElement("div", null,
                React.createElement("h3", { className: "pb20" }, "Default"),
                React.createElement("p", null, "By default, children are aligned horizontally."),
                React.createElement("p", null,
                    "By passing an ",
                    React.createElement("strong", null, "array of numbers"),
                    " to the ",
                    React.createElement("strong", null, "columns"),
                    " prop, we can easily adjust the width ratio."),
                React.createElement(index_1.Toolbar, { flush: true, className: "mt20" },
                    React.createElement(index_1.Button, { onClick: _this.setColumns.bind(_this, [2, 1, 1]) }, "[2,1,1]"),
                    React.createElement(index_1.Button, { onClick: _this.setColumns.bind(_this, [1, 1, 4]) }, "[1,1,4]"),
                    React.createElement(index_1.Button, { onClick: _this.setColumns.bind(_this, [1, 3, 4]) }, "[3,2,1]"),
                    React.createElement(index_1.Button, { onClick: _this.setColumns.bind(_this, [1, 1, 1]) }, "[1,1,1]")),
                React.createElement("div", { className: "ptb20" },
                    React.createElement("div", { className: "dark p10" },
                        React.createElement(index_1.Align, { columns: _this.state.columns, margin: '10px' },
                            React.createElement(index_1.Layer, { theme: "light", className: "p20" }, "A"),
                            React.createElement(index_1.Layer, { theme: "light", className: "p20" }, "B"),
                            React.createElement(index_1.Layer, { theme: "light", className: "p20" }, "C"))),
                    React.createElement("img", { className: "w100 mt20", src: "http://reactrecoil.io/imgs/align1.png" })),
                React.createElement("h3", { className: "pb10" }, "Vertical"),
                React.createElement("p", null,
                    "To align elements vertically, pass the ",
                    React.createElement("strong", null, "vertical"),
                    " prop."),
                React.createElement("div", { className: "pt20" },
                    React.createElement("div", { className: "dark h300px p10" },
                        React.createElement(index_1.Align, { vertical: true, margin: '10px', columns: _this.state.columns },
                            React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p10" }, "A"),
                            React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p10" }, "B"),
                            React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p10" }, "C"))),
                    React.createElement("img", { className: "w100 mt20", src: "http://reactrecoil.io/imgs/align2.png" }))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Align component arranges children either horizontally or vertically.", Id: "Align", columnData: AlignProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialAlign;
}(React.Component));
exports.default = TutorialAlign;
//# sourceMappingURL=TutorialAlign.js.map