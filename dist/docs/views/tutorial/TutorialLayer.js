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
var LayerProperties = [
    {
        name: 'border',
        type: 'boolean',
        options: '',
        description: 'Adds a border to the layer'
    },
    {
        name: 'overflow',
        type: 'boolean',
        options: '',
        description: 'Toggle if the elements on this layer should overflow.'
    },
    {
        name: 'left',
        type: 'boolean',
        options: '',
        description: 'Float the element left'
    },
    {
        name: 'right',
        type: 'boolean',
        options: '',
        description: 'Float the element right'
    },
    {
        name: 'scrollY',
        type: 'boolean',
        options: '',
        description: 'Set a scrollbar on the y axis'
    },
    {
        name: 'scrollX',
        type: 'boolean',
        options: '',
        description: 'Set a scrollbar on the x axis'
    },
    {
        name: 'style',
        type: 'Object',
        options: '',
        description: 'Add a style object'
    },
    {
        name: 'onClick',
        type: 'function',
        options: '',
        description: 'Trigger an even once the layer is clicked.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: '',
        description: 'Float the element left'
    },
    {
        name: 'dimensions',
        type: '[width, height, zIndex]',
        options: '',
        description: 'Easily set a width, height and z-index'
    },
    {
        name: 'scrollIf',
        type: 'boolean',
        options: '',
        description: 'Layer will start scroll if returns true'
    },
    {
        name: 'scrollToId',
        type: 'string',
        options: '',
        description: 'ID to scroll to once "scrollIf" is set to true.'
    },
    {
        name: 'flex',
        type: 'boolean',
        options: '',
        description: 'Layer and its direct descandedts will be set to flex.'
    },
    {
        name: 'flexCenter',
        type: 'boolean',
        options: '',
        description: 'Will perfect center (horizontally and vertically) the child contents.'
    }
];
var TutorialLayer = (function (_super) {
    __extends(TutorialLayer, _super);
    function TutorialLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            isFlexed: false,
            contentClosed: false,
            showSidebar: false,
            showNotify: false
        };
        return _this;
    }
    TutorialLayer.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialLayer.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialLayer.prototype.toggleFlex = function () {
        this.setState({
            isFlexed: !this.state.isFlexed
        });
    };
    TutorialLayer.prototype.toggleContentClosed = function () {
        this.setState({
            contentClosed: !this.state.contentClosed
        });
    };
    TutorialLayer.prototype.toggleSidebar = function () {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    };
    TutorialLayer.prototype.toggleNotify = function () {
        this.setState({
            showNotify: !this.state.showNotify
        });
    };
    TutorialLayer.prototype.render = function () {
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
                React.createElement("h3", { className: "pb20" }, "Layer"),
                React.createElement(index_1.Toolbar, { spacing: true },
                    React.createElement(index_1.Checkbox, { size: "small", checked: state.isFlexed, title: 'Fill Children', onChange: _this.toggleFlex.bind(_this) }),
                    React.createElement(index_1.Checkbox, { size: "small", checked: state.contentClosed, title: 'Hide Content', onChange: _this.toggleContentClosed.bind(_this) }),
                    React.createElement(index_1.Checkbox, { size: "small", checked: state.showSidebar, title: 'Show Sidebar', onChange: _this.toggleSidebar.bind(_this) }),
                    React.createElement(index_1.Checkbox, { size: "small", checked: state.showNotify, title: 'Show Notifcations', onChange: _this.toggleNotify.bind(_this) })),
                React.createElement(index_1.Align, { className: "mt20" },
                    React.createElement(index_1.Layer, { overflow: true, className: "p10 dark dinblock", dimensions: ['100%', '300px', 1] },
                        React.createElement(index_1.Transform, { fill: true, flex: state.isFlexed, if: state.showNotify, push: 'bottom', amount: '50px' },
                            React.createElement(index_1.Layer, { overflow: true, theme: "light", fill: true, flex: state.isFlexed, className: "p10" },
                                React.createElement(index_1.Transform, { fill: true, flex: state.isFlexed, if: state.showSidebar, push: 'left', amount: '100px' },
                                    React.createElement(index_1.Layer, { border: true, flexCenter: true, theme: "dark", fill: state.isFlexed, className: "p10 mb5" }, "Header"),
                                    React.createElement(index_1.Open, { openToHeight: !_this.state.isFlexed ? '42px' : '83.33px', if: !_this.state.contentClosed },
                                        React.createElement(index_1.Layer, { border: true, flexCenter: true, theme: "dark", fill: state.isFlexed, className: "p10 mb5" }, "Content")),
                                    React.createElement(index_1.Layer, { border: true, flexCenter: true, theme: "dark", fill: state.isFlexed, className: "p10" }, "Footer")),
                                React.createElement(index_1.SlideIn, { from: 'left', className: "h100 w100px", if: _this.state.showSidebar },
                                    React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "dark", className: "pr10" },
                                        React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "light" })))),
                            React.createElement(index_1.SlideIn, { from: 'bottom', className: "h50px w100", if: _this.state.showNotify },
                                React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "dark", className: "pb10 ps10" },
                                    React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "light" }, "Notifcations"))))),
                    React.createElement(index_1.Layer, { overflow: true, className: "ml10 dinblock p10 dark", dimensions: ['100%', '300px', 1] },
                        React.createElement(index_1.Transform, { fill: true, flex: state.isFlexed, if: state.showNotify, push: 'top', amount: '50px' },
                            React.createElement(index_1.SlideIn, { from: 'top', className: "h50px w100", if: _this.state.showNotify },
                                React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "dark", className: "pt10 ps10" },
                                    React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "light" }, "Notifcations"))),
                            React.createElement(index_1.Layer, { overflow: true, theme: "light", fill: true, flex: state.isFlexed, className: "p10" },
                                React.createElement(index_1.Transform, { fill: true, flex: state.isFlexed, if: state.showSidebar, push: 'right', amount: '100px' },
                                    React.createElement(index_1.Open, { openToHeight: !_this.state.isFlexed ? '38px' : state.showNotify ? '172px' : '210px', if: !_this.state.contentClosed },
                                        React.createElement(index_1.Layer, { flex: true, border: true, flexCenter: true, theme: "dark", fill: state.isFlexed, className: "p10 mb5" }, "Content")),
                                    React.createElement(index_1.Layer, { border: true, dimensions: ['100%', state.contentClosed && state.isFlexed ? '100%' : '38px', 1], flexCenter: true, theme: "dark", className: "p10" }, "Footer")),
                                React.createElement(index_1.SlideIn, { from: 'right', className: "h100 w100px", if: _this.state.showSidebar },
                                    React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "dark", className: "pl10" },
                                        React.createElement(index_1.Layer, { flex: true, fill: true, flexCenter: true, theme: "light" }))))))),
                React.createElement("h3", { className: "ptb20" }, "Default"),
                React.createElement(index_1.Layer, { className: "p10 dark" },
                    React.createElement(index_1.Layer, { theme: "light", className: "p10" })),
                React.createElement("h3", { className: "ptb20" }, "Filled Layer"),
                React.createElement(index_1.Layer, { className: "p10 dark", dimensions: ['300px', '300px', 1] },
                    React.createElement(index_1.Layer, { theme: "light", fill: true, className: "p10" }))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Layer component is an advanced version of the standard div control.", Id: "Layer", columnData: LayerProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialLayer;
}(React.Component));
exports.default = TutorialLayer;
//# sourceMappingURL=TutorialLayer.js.map