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
var ChecboxProperties = [
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is checked.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the checkbox has a disabled state.'
    }
];
var TutorialCheckbox = (function (_super) {
    __extends(TutorialCheckbox, _super);
    function TutorialCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialCheckbox.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialCheckbox.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialCheckbox.prototype.render = function () {
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
                    React.createElement(index_1.Checkbox, { icon: "check", title: 'Select All' })),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox1.png" }),
                React.createElement("h3", null, "Checked"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Checkbox, { checked: true })),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox2.png" }),
                React.createElement("h3", null, "Sizes"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Checkbox, { size: "small" }),
                        React.createElement(index_1.Checkbox, { icon: 'star' }),
                        React.createElement(index_1.Checkbox, { size: "large" }),
                        React.createElement(index_1.Checkbox, { icon: 'users', size: "xlarge" }))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox3.png" }),
                React.createElement("h3", null, "Disabled"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Checkbox, { disabled: true, icon: 'star' }))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox4.png" }),
                React.createElement("h3", null, "Loading"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Checkbox, { size: "large", loading: true, disabled: true, icon: 'star' }))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox5.png" }),
                React.createElement("h3", null, "Themes"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, { spacing: true },
                        React.createElement(index_1.Checkbox, { theme: "primary" }),
                        React.createElement(index_1.Checkbox, { theme: "error" }),
                        React.createElement(index_1.Checkbox, { icon: 'star', theme: "success" }))),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/checkbox6.png" })));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Checkbox component is an advanced version of the standard input type='checkbox' control.", Id: "Checkbox", columnData: ChecboxProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialCheckbox;
}(React.Component));
exports.default = TutorialCheckbox;
//# sourceMappingURL=TutorialCheckbox.js.map