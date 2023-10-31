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
var SlideInProperties = [
    {
        name: 'wrapper',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane has a wrapper element surrounding it.'
    },
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane is open.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Give the pane element a height and width of 100%.'
    },
    {
        name: 'direction',
        type: 'string',
        options: '',
        description: 'Defines the direction the pane slides in from.'
    },
    {
        name: 'offset',
        type: 'string, number',
        options: '',
        description: 'Defines the starting offset of the pane.'
    },
    {
        name: 'wrapperClick',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a function the runs when the user clicks the pane wrapper.'
    }
];
var TutorialSlideIn = (function (_super) {
    __extends(TutorialSlideIn, _super);
    function TutorialSlideIn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            paneOpen: false
        };
        return _this;
    }
    TutorialSlideIn.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialSlideIn.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialSlideIn.prototype.toggleSlideIn = function () {
        this.setState({
            paneOpen: this.state.paneOpen ? false : true
        });
    };
    TutorialSlideIn.prototype.render = function () {
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
                    React.createElement(index_1.Layer, { overflow: true, className: "p10 dark text-center w100 h200px" },
                        React.createElement(index_1.Button, { shortcut: "s", onClick: _this.toggleSlideIn.bind(_this) }, "Toggle SlideIn"),
                        React.createElement(index_1.SlideIn, { from: 'bottom', if: _this.state.paneOpen },
                            React.createElement(index_1.Layer, { className: "light text-center p10" },
                                React.createElement(index_1.Toolbar, { flush: true, spacing: true },
                                    React.createElement(index_1.Button, { onClick: _this.toggleSlideIn.bind(_this), icon: "user" }),
                                    React.createElement(index_1.Button, { onClick: _this.toggleSlideIn.bind(_this), icon: "search" }),
                                    React.createElement(index_1.Button, { onClick: _this.toggleSlideIn.bind(_this), icon: "plus" }))))))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The SlideIn slides in an element if a certain event happens, user must state the direction as well.", Id: "SlideIn", columnData: SlideInProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialSlideIn;
}(React.Component));
exports.default = TutorialSlideIn;
//# sourceMappingURL=TutorialSlideIn.js.map