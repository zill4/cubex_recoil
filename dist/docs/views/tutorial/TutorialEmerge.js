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
var EmergeProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false. True by default.',
        description: 'Defines if the element should emerge and stagger its children.'
    },
    {
        name: 'enter',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on enter.'
    },
    {
        name: 'exit',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on exit.'
    },
    {
        name: 'delay',
        type: 'number',
        options: '',
        description: 'Set the delay in milliseconds for each staggered child to appears.'
    },
    {
        name: 'overflow',
        type: 'string',
        options: 'true, false',
        description: 'Defines if the elements overflow is visible.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Add inline styles to the element.'
    }
];
var TutorialEmerge = (function (_super) {
    __extends(TutorialEmerge, _super);
    function TutorialEmerge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialEmerge.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialEmerge.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialEmerge.prototype.render = function () {
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
                React.createElement(index_1.Emerge, { delay: 300, if: props.if },
                    React.createElement(index_1.Button, { className: "mr10" }, "Appear"),
                    React.createElement(index_1.Button, { className: "mr10" }, "When"),
                    React.createElement(index_1.Button, { className: "mr10" }, "In"),
                    React.createElement(index_1.Button, { className: "" }, "View")),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(index_1.Button, { simple: true, icon: "chevron-down" }, "Scroll Down"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(index_1.Layer, { oocss: "h300px w400px" },
                    React.createElement(index_1.Emerge, { enter: "slideInLeft" },
                        React.createElement(index_1.Layer, { theme: "light", oocss: "w500px h200px", border: true, flexCenter: true }, "Appear"),
                        React.createElement(index_1.Layer, { theme: "light", oocss: "w500px h200px", border: true, flexCenter: true }, "When"),
                        React.createElement(index_1.Layer, { theme: "light", oocss: "w500px h200px", border: true, flexCenter: true }, "In"),
                        React.createElement(index_1.Layer, { theme: "light", oocss: "w500px h200px", border: true, flexCenter: true }, "View"))),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(index_1.Layer, { oocss: "h408px w100%" },
                    React.createElement(index_1.Emerge, { enter: "fadeInUpBig" },
                        React.createElement(index_1.Align, null,
                            React.createElement(index_1.Layer, { theme: "light", className: "pull-left", oocss: "w200px h200px", border: true, flexCenter: true }, "Appear"),
                            React.createElement(index_1.Layer, { theme: "light", className: "pull-left", oocss: "w200px h200px", border: true, flexCenter: true }, "When"),
                            React.createElement(index_1.Layer, { theme: "light", className: "pull-left", oocss: "w200px h200px", border: true, flexCenter: true }, "In"),
                            React.createElement(index_1.Layer, { theme: "light", className: "pull-left", oocss: "w200px h200px", border: true, flexCenter: true }, "View"))))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Emerge component staggers children into view if a certain event happens.", Id: "Emerge", columnData: EmergeProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialEmerge;
}(React.Component));
exports.default = TutorialEmerge;
//# sourceMappingURL=TutorialEmerge.js.map