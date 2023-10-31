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
var SelectableProperties = [
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is checked.'
    },
    {
        name: 'classNames',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element ghost temppate is checked.'
    },
    {
        name: 'type',
        type: 'string',
        options: '',
        description: 'Defines a class theme for the selectable element.'
    }
];
var TutorialSelectable = (function (_super) {
    __extends(TutorialSelectable, _super);
    function TutorialSelectable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialSelectable.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialSelectable.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialSelectable.prototype.render = function () {
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
        return (React.createElement(TutorialView_1.default, { description: "The Selectable component is a simple way to attach a checked state to any element.", Id: "Selectable", columnData: SelectableProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialSelectable;
}(React.Component));
exports.default = TutorialSelectable;
//# sourceMappingURL=TutorialSelectable.js.map