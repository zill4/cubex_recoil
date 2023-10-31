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
var CardProperties = [
    {
        name: 'resize',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element can be resized.'
    },
    {
        name: 'hover',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets if the element has an hover action.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will float on screen.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the element to have a block display.'
    },
    {
        name: 'fill',
        type: 'number',
        options: '',
        description: 'Sets the element to have a height and width of 100% relative to its parent.'
    },
    {
        name: 'onClick',
        type: 'number',
        options: '',
        description: 'Defines a onClick function for the element.'
    },
    {
        name: 'style',
        type: 'number',
        options: '',
        description: 'Defines the styles for the element.'
    },
    {
        name: 'className',
        type: 'number',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'onMouseEnter',
        type: 'number',
        options: '',
        description: 'Defines a onMouseEnter function for the element.'
    },
    {
        name: 'onMouseLeave',
        type: 'number',
        options: '',
        description: 'Defines a onMouseLeave function for the element.'
    },
];
var TutorialCard = (function (_super) {
    __extends(TutorialCard, _super);
    function TutorialCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialCard.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialCard.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialCard.prototype.render = function () {
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
                React.createElement("h3", null, "Default"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toggle, null)),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null, "With theme error."),
                    React.createElement(index_1.Toggle, { theme: "error", className: "mt10", checked: true })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null,
                        "With props checked passed as ",
                        React.createElement("strong", null, "true"),
                        "."),
                    React.createElement(index_1.Toggle, { className: "mt10", checked: true })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null,
                        "With props array passed with an array value of ",
                        React.createElement("strong", null, "['No', 'Yes']"),
                        "."),
                    React.createElement(index_1.Toggle, { array: ['No', 'Yes'], className: "mt10" })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null,
                        "With props array passed with an array value of ",
                        React.createElement("strong", null, "['No', 'Yes']"),
                        "."),
                    React.createElement(index_1.Toggle, { array: ['Tuesday', 'Wednesday'], className: "mt10" })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null,
                        "With props iconArray passed with an array value of ",
                        React.createElement("strong", null, "['times', 'check']"),
                        "."),
                    React.createElement(index_1.Toggle, { iconArray: ['times', 'check'], className: "mt10" })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null, "Disabled."),
                    React.createElement(index_1.Toggle, { disabled: true, iconArray: ['times', 'check'], className: "mt10" })),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement("p", null, "Loading."),
                    React.createElement(index_1.Toggle, { loading: true, iconArray: ['times', 'check'], className: "mt10" })),
                React.createElement("h3", null, "Toggle Numbers"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Toggle, { type: "numbers", array: [15, 20, 25] }))),
                React.createElement("h3", null, "Toggle Strings"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Toggle, { type: "strings", array: ["S", "M", "L"] }))),
                React.createElement("h3", null, "Toggle Colors"),
                React.createElement("p", null,
                    "To toggle a string of CSS based background colors or images just pass in the ",
                    React.createElement("strong", null, "colors"),
                    " prop."),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Toggle, { type: "colors", array: ['#FF5757', '#00A0DC', '#8D6CAB'] })))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The material component is a google material enspired div, it has advanced feautures.", Id: "Toggle", columnData: CardProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialCard;
}(React.Component));
exports.default = TutorialCard;
//# sourceMappingURL=TutorialToggle.js.map