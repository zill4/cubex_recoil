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
var TutorialStepper = (function (_super) {
    __extends(TutorialStepper, _super);
    function TutorialStepper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialStepper.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialStepper.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialStepper.prototype.render = function () {
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
                    React.createElement(index_1.Layer, { className: "p10 light" },
                        React.createElement(index_1.Stepper, { title: 'User Setup', stepIndex: 1 },
                            React.createElement(index_1.Toolbar, { flush: true },
                                React.createElement(index_1.Button, null, "1"),
                                React.createElement(index_1.Button, null, "Basic Info")),
                            React.createElement(index_1.Toolbar, { flush: true },
                                React.createElement(index_1.Button, { theme: "primary" }, "2"),
                                React.createElement(index_1.Button, { theme: "primary" }, "Contact Details")),
                            React.createElement(index_1.Toolbar, { flush: true },
                                React.createElement(index_1.Button, null, "3"),
                                React.createElement(index_1.Button, null, "Success!"))))),
                React.createElement("h3", null, "Vertical"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Layer, { className: "p10 light" },
                        React.createElement(index_1.Stepper, { vertical: true, stepIndex: 0 },
                            React.createElement(index_1.Button, { simple: true, className: "p0" }, "Basic Info"),
                            React.createElement(index_1.Button, { simple: true, className: "p0" }, "Contact Details"),
                            React.createElement(index_1.Button, { simple: true, className: "p0" }, "Success!"))))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Stepper component .", Id: "Stepper", columnData: ChecboxProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialStepper;
}(React.Component));
exports.default = TutorialStepper;
//# sourceMappingURL=TutorialStepper.js.map