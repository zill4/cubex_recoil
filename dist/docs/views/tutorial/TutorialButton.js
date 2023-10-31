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
var ButtonProperties = [
    {
        name: 'disabled',
        type: 'boolean',
        options: 'true, false',
        description: 'Toggle if the button is disabled or not.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Block converts the button element to a block element which gives it full width.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names.'
    },
    {
        name: 'theme',
        type: 'string',
        options: 'primary | success | error | default',
        description: 'Template type for the button.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit the fa fa-',
        description: 'Include a font-awesome icon.'
    },
    {
        name: 'href',
        type: 'string',
        options: '',
        description: 'Add a link to the button.'
    },
    {
        name: 'target',
        type: 'string',
        options: '',
        description: 'Add a target attribute to the button.'
    },
    {
        name: 'simple',
        type: 'boolean',
        options: 'true, false',
        description: 'Switch to the simple template mode.'
    },
    {
        name: 'strech',
        type: 'boolean',
        options: 'true, false',
        description: 'Add a width of 100% to the button.'
    },
    {
        name: 'pointer',
        type: 'any',
        options: 'true, false',
        description: 'Add a mouse pointer on hover.'
    },
    {
        name: 'right',
        type: 'boolean',
        options: 'true, false',
        description: 'Float the button right.'
    },
    {
        name: 'left',
        type: 'boolean',
        options: 'true, false',
        description: 'Float the button left.'
    },
    {
        name: 'size',
        type: 'string',
        options: 'small, large, xlarge',
        description: 'Set the size of the button by class name.'
    },
    {
        name: 'submit',
        type: 'boolean',
        options: 'true, false',
        description: 'Set whether the button is of submit type.'
    },
    {
        name: 'style',
        type: 'any',
        options: '',
        description: 'Add custom inline styles.'
    },
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets wether the button is checked.'
    },
    {
        name: 'onClick',
        type: '()',
        options: '',
        description: 'Set an onClick function to the element.'
    },
    {
        name: 'tabIndex',
        type: 'any',
        options: '',
        description: 'Set a tabIndex to the button.'
    },
    {
        name: 'progressiveClick',
        type: 'any',
        options: '',
        description: 'An array of functions that will repeat starting from the firts index.'
    },
    {
        name: 'shortcut',
        type: 'any',
        options: '',
        description: 'Set a shortcut key to the button that will trigger the click event.'
    }
];
var TutorialButton = (function (_super) {
    __extends(TutorialButton, _super);
    function TutorialButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialButton.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialButton.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialButton.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var ButtonColumns = [
            { name: 'name', width: 120 },
            { name: 'type', width: 140 },
            { name: 'description' }
        ];
        var example = function () {
            return (React.createElement("div", null,
                React.createElement("h3", null, "Default"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true, flex: props.mobile },
                        React.createElement(index_1.Button, null, "Default"),
                        React.createElement(index_1.Button, { theme: "primary" }, "Primary"),
                        React.createElement(index_1.Button, { theme: "error" }, "Error"))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/button1.png" }),
                React.createElement("h3", { className: "pb20" }, "Adding Icons"),
                React.createElement("p", { className: "pb20" }, "To add an icon to a button, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of \"star\""),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement(index_1.Toolbar, { spacing: true, className: 'mr10' },
                        React.createElement(index_1.Button, { icon: "star" }, "Button with an icon"),
                        React.createElement(index_1.Button, { icon: "home", theme: "primary" }))),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement(index_1.Toolbar, { flush: true },
                        React.createElement(index_1.Button, { theme: "success", icon: "fast-backward" }),
                        React.createElement(index_1.Button, { theme: "success", icon: "backward" }),
                        React.createElement(index_1.Button, { theme: "success", icon: "pause" }))),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement(index_1.Toolbar, { flush: true, noRadius: true, noBorder: true },
                        React.createElement(index_1.Button, { icon: "stop" }),
                        React.createElement(index_1.Button, { icon: "forward" }),
                        React.createElement(index_1.Button, { icon: "fast-forward" }))),
                React.createElement("h3", { className: "pb20" }, "Sizes"),
                React.createElement("p", null, "Buttons come in a few sizes, small, default, large and xlarge."),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true, vertical: props.mobile },
                        React.createElement(index_1.Button, { size: "small" }, "Small"),
                        React.createElement(index_1.Button, null, "Default"),
                        React.createElement(index_1.Button, { size: "large" }, "Large"),
                        React.createElement(index_1.Button, { size: "xlarge" }, "Extra Large"))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/button2.png" }),
                React.createElement("h3", { className: "pb20" }, "States"),
                React.createElement("p", null,
                    "Buttons can have different states. You can pass a ",
                    React.createElement("strong", null, "checked"),
                    ",",
                    React.createElement("strong", null, "disabled"),
                    " or ",
                    React.createElement("strong", null, "simple"),
                    " prop.."),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true, vertical: props.mobile },
                        React.createElement(index_1.Button, { checked: true, advanced: true }, "Checked"),
                        React.createElement(index_1.Button, { disabled: true }, "Disabled"),
                        React.createElement(index_1.Button, { simple: true }, "Simple"),
                        React.createElement(index_1.Button, { loading: true }, "Loading..."))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/button3.png" }),
                React.createElement("h3", { className: "mb20" }, "Pointer"),
                React.createElement("p", null,
                    "The ",
                    React.createElement("strong", null, "pointer"),
                    " prop accepts a direction either ",
                    React.createElement("strong", null, "left"),
                    " or ",
                    React.createElement("strong", null, "right"),
                    "."),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Button, { pointer: "right", className: "mr20" }, "Pointer Right"),
                        React.createElement(index_1.Button, { theme: "primary", pointer: "left" }, "Pointer Left"))),
                React.createElement("h3", { className: "mb20" }, "Links"),
                React.createElement("p", null,
                    "You can convert any Button component to a Link by adding the ",
                    React.createElement("strong", null, "href"),
                    " prop to it."),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Button, { icon: "github", href: 'https//www.github.com/jisaac89/recoil' }, "Recoil Github"))),
                React.createElement("h3", { className: "mb20" }, "Toolbar"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { flex: true, textCenter: true, flush: true, className: "w300px" },
                        React.createElement(index_1.Button, { icon: "users" }),
                        React.createElement(index_1.Button, { block: true, href: 'https//www.github.com/jisaac89/recoil' }, "John Doe"),
                        React.createElement(index_1.Button, { theme: "error", icon: "times" })))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Button component is an updated version of the standard default button control.", Id: "Button", columnData: ButtonProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialButton;
}(React.Component));
exports.default = TutorialButton;
//# sourceMappingURL=TutorialButton.js.map