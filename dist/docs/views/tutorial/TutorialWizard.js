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
var WizardProperties = [
    { name: 'slideIndex', type: '', options: '', description: 'The active index to show.' },
    { name: 'fill', type: '', options: '', description: 'Add a width and height of 100% to the Wizard.' },
    { name: 'className', type: '', options: '', description: '' }
];
var TutorialWizard = (function (_super) {
    __extends(TutorialWizard, _super);
    function TutorialWizard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            slideIndex: 0,
            slideIndex2: 0
        };
        return _this;
    }
    TutorialWizard.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialWizard.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialWizard.prototype.gotoSlideIndex = function (n) {
        this.setState({
            slideIndex: n
        });
    };
    TutorialWizard.prototype.gotoSlideIndex2 = function (n) {
        this.setState({
            slideIndex2: n
        });
    };
    TutorialWizard.prototype.render = function () {
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
                React.createElement(index_1.Layer, { className: "h300px p20 pb0 mt20", theme: "dark" },
                    React.createElement(index_1.Wizard, { paginate: true, fill: true, slideIndex: _this.state.slideIndex },
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "1"),
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "2"),
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "3"))),
                React.createElement("h3", { className: "pt20 pb20" }, "Vertical"),
                React.createElement(index_1.Layer, { className: "h300px p20 pb0 mb10", theme: "dark" },
                    React.createElement(index_1.Wizard, { paginate: true, vertical: true, fill: true, slideIndex: _this.state.slideIndex2 },
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "1"),
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "2"),
                        React.createElement(index_1.Layer, { fill: true, theme: "light", className: "p20" }, "3")))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Wizard component allows you to create multi-step processes where users will move through screens in a specified order.", Id: "Wizard", columnData: WizardProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialWizard;
}(React.Component));
exports.default = TutorialWizard;
//# sourceMappingURL=TutorialWizard.js.map