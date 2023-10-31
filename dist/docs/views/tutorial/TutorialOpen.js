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
var OpenProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false, false by default',
        description: 'Defines if the element is open or closed.'
    },
    {
        name: 'overflow',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is overflow is visible.'
    },
    {
        name: 'className',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the element.'
    }
];
var TutorialOpen = (function (_super) {
    __extends(TutorialOpen, _super);
    function TutorialOpen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            doorIsOpen: false
        };
        return _this;
    }
    TutorialOpen.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            doorIsOpen: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialOpen.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            doorIsOpen: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialOpen.prototype.toggleOpenIsOpen = function () {
        this.setState({
            showProps: false,
            showVideo: false,
            doorIsOpen: this.state.doorIsOpen ? false : true
        });
    };
    TutorialOpen.prototype.render = function () {
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
                React.createElement("h3", null, "Default"),
                React.createElement(index_1.Layer, { className: "pt20" },
                    React.createElement(index_1.Toggle, { className: "mb20", checked: _this.state.doorIsOpen, onChange: _this.toggleOpenIsOpen.bind(_this), array: ['Closed', 'Open'] }),
                    React.createElement(index_1.Open, { if: _this.state.doorIsOpen, openToHeight: '201px' },
                        React.createElement(index_1.Layer, { flexCenter: true, dimensions: ['200px', '200px', 1], theme: "dark", className: "p10" }, "Opened!")))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Open component opens or closes its children depending on an if statement. By default Open are always closed.", Id: "Open", columnData: OpenProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialOpen;
}(React.Component));
exports.default = TutorialOpen;
//# sourceMappingURL=TutorialOpen.js.map