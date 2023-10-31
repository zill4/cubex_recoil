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
var InputProperties = [
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the input border should be hidden.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'text, password, textarea',
        description: 'Defines the type of input the element is.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit the fa fa-',
        description: 'Add a font-awesome icon to the input.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines the title for the input.'
    },
    {
        name: 'placeholder',
        type: '',
        options: '',
        description: 'Defines the placeholder for the input.'
    },
    {
        name: 'value',
        type: '',
        options: '',
        description: 'Defines the value for the input.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Defines the inline styles for the element.'
    },
    {
        name: 'errorInline',
        type: 'boolean',
        options: '',
        description: 'Defines if the error appears within the input.'
    },
    {
        name: 'error',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines whether the error message should show.'
    },
    {
        name: 'block',
        type: 'string',
        options: '',
        description: 'Sets the element as a block element with 100% width.'
    },
    {
        name: 'onChange',
        type: '',
        options: '',
        description: 'Define a function, returns the current value of the input.'
    },
    {
        name: 'focusOnMount',
        type: 'boolean',
        options: 'true, false',
        description: 'When the component mounts should the input be set to focus.'
    },
    {
        name: 'focusDelay',
        type: '',
        options: '',
        description: 'Sets the delay for the focus.'
    }
];
var TutorialInput = (function (_super) {
    __extends(TutorialInput, _super);
    function TutorialInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialInput.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialInput.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialInput.prototype.setonChange = function () {
    };
    TutorialInput.prototype.render = function () {
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
                React.createElement(index_1.Layer, { className: "ptb10" },
                    React.createElement(index_1.Toolbar, { vertical: true, spacing: true },
                        React.createElement(index_1.Input, { size: "small", advanced: true, type: "text", title: "First Name", onChange: _this.setonChange.bind(_this), block: true }),
                        React.createElement(index_1.Input, { advanced: true, type: "text", title: "Last Name", onChange: _this.setonChange.bind(_this), block: true }),
                        React.createElement(index_1.Input, { size: "large", advanced: true, type: "text", icon: "user", title: "Search Users", onChange: _this.setonChange.bind(_this), block: true }),
                        React.createElement(index_1.Input, { size: "xlarge", advanced: true, type: "text", title: "Email", onChange: _this.setonChange.bind(_this), block: true }))),
                React.createElement(index_1.Layer, { className: "ptb10" },
                    React.createElement(index_1.Input, { advanced: true, type: "text", placeholder: "Search Places", onChange: _this.setonChange.bind(_this), block: true })),
                React.createElement(index_1.Layer, { className: "ptb10" },
                    React.createElement(index_1.Input, { error: true, simple: true, errorMessage: "Error Message", advanced: true, type: "text", placeholder: "Search Places", onChange: _this.setonChange.bind(_this), block: true }))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Input component is an advanced version of the standard input type='text' control.", Id: "Input", columnData: InputProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialInput;
}(React.Component));
exports.default = TutorialInput;
//# sourceMappingURL=TutorialInput.js.map