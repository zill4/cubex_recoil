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
var TransformProperties = [
    { name: 'fill', type: '', options: '', description: '' },
    { name: 'type', type: '', options: '', description: '' },
    { name: 'className', type: '', options: '', description: '' },
    { name: 'if', type: '', options: '', description: '' },
    { name: 'amount', type: '', options: '', description: '' },
    { name: 'push', type: '', options: '', description: '' },
    { name: 'axis', type: '', options: '', description: '' },
];
var TutorialTransform = (function (_super) {
    __extends(TutorialTransform, _super);
    function TutorialTransform(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialTransform.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialTransform.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialTransform.prototype.render = function () {
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
                React.createElement(index_1.Layer, { className: "p10 dark" },
                    React.createElement(index_1.Layer, { theme: "light", className: "p10" }, "This is a Layer"))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Transform component is an allows you to transform an element, add a type (translate, scale etc) and an amount (interger or string) to an element if a certain event happens.", Id: "Transform", columnData: TransformProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialTransform;
}(React.Component));
exports.default = TutorialTransform;
//# sourceMappingURL=TutorialTransform.js.map