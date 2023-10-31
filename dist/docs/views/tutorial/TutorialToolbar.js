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
var ToolbarProperties = [
    { name: 'border', type: '', options: '', description: '' },
    { name: 'vertical', type: '', options: '', description: '' },
    { name: 'textCenter', type: '', options: '', description: '' },
    { name: 'noRadius', type: '', options: '', description: '' },
    { name: 'spacing', type: '', options: '', description: '' },
    { name: 'block', type: '', options: '', description: '' },
    { name: 'left', type: '', options: '', description: '' },
    { name: 'right', type: '', options: '', description: '' },
    { name: 'fill', type: '', options: '', description: '' },
    { name: 'className', type: '', options: '', description: '' },
    { name: 'style', type: '', options: '', description: '' },
    { name: 'children', type: '', options: '', description: '' },
    { name: 'flex', type: '', options: '', description: '' },
    { name: 'flow', type: '', options: '', description: '' },
    { name: 'justify', type: '', options: '', description: '' },
    { name: 'align', type: '', options: '', description: '' }
];
var TutorialToolbar = (function (_super) {
    __extends(TutorialToolbar, _super);
    function TutorialToolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialToolbar.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialToolbar.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialToolbar.prototype.render = function () {
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
                React.createElement(index_1.Layer, { className: "ptb10" },
                    React.createElement(index_1.Layer, { className: "p10 light" },
                        React.createElement(index_1.Toolbar, { disabled: true, flush: true, block: true },
                            React.createElement(index_1.Button, { icon: "user" }),
                            React.createElement(index_1.Input, { placeholder: "Find Users" }),
                            React.createElement(index_1.Button, { icon: "times" })),
                        React.createElement(index_1.Toolbar, { spacing: true, block: true, className: "mt10" },
                            React.createElement(index_1.Button, { icon: "user" }),
                            React.createElement(index_1.Input, { placeholder: "Find Users" }),
                            React.createElement(index_1.Button, { icon: "times" })),
                        React.createElement(index_1.Toolbar, { spacing: true, block: true, className: "mt10" },
                            React.createElement(index_1.Button, { simple: true, icon: "user" }),
                            React.createElement(index_1.Input, { simple: true, placeholder: "Find Users" }),
                            React.createElement(index_1.Button, { simple: true, icon: "times" })),
                        React.createElement(index_1.Toolbar, { flush: true, block: true, className: "mt10" },
                            React.createElement(index_1.Button, { size: "large", icon: "user" }),
                            React.createElement(index_1.Input, { size: "large", placeholder: "Find Users" }),
                            React.createElement(index_1.Button, { size: "large", icon: "times" })),
                        React.createElement(index_1.Toolbar, { vertical: true, block: true, spacing: true, className: "mt10 w300px" },
                            React.createElement(index_1.Button, { block: true }, "Menu Item 1"),
                            React.createElement(index_1.Button, { block: true }, "Menu Item 2"),
                            React.createElement(index_1.Button, { block: true }, "Menu Item 3")),
                        React.createElement(index_1.Toolbar, { block: true, size: "small", vertical: true, flush: true, className: "mt10 w200px" },
                            React.createElement(index_1.Button, { block: true }, "Menu Item 1"),
                            React.createElement(index_1.Button, { block: true }, "Menu Item 2"),
                            React.createElement(index_1.Button, { block: true }, "Menu Item 3"))))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The toolbar component allows you to pass and style a group of buttons, inputs and dropdowns.", Id: "Toolbar", columnData: ToolbarProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialToolbar;
}(React.Component));
exports.default = TutorialToolbar;
//# sourceMappingURL=TutorialToolbar.js.map