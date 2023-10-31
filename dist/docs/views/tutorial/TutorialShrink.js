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
var ShrinkProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will shrink and be disabled.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Set the element to have a 100% height and width.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names to the element.'
    }
];
var TutorialShrink = (function (_super) {
    __extends(TutorialShrink, _super);
    function TutorialShrink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            shrink: false
        };
        return _this;
    }
    TutorialShrink.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialShrink.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialShrink.prototype.toggleShrink = function () {
        this.setState({
            shrink: this.state.shrink ? false : true
        });
    };
    TutorialShrink.prototype.render = function () {
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
                    React.createElement(index_1.Button, { onClick: _this.toggleShrink.bind(_this) }, "Toggle Shrink"),
                    React.createElement(index_1.Shrink, { if: _this.state.shrink },
                        React.createElement(index_1.Layer, { className: "p10 light mt10" }, "Shrink and disable this element.")))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Shrink component is shrinks and disbales its children depending on an if statement.", Id: "Shrink", columnData: ShrinkProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialShrink;
}(React.Component));
exports.default = TutorialShrink;
//# sourceMappingURL=TutorialShrink.js.map