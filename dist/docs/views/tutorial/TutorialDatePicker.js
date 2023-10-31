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
var TutorialDatePicker = (function (_super) {
    __extends(TutorialDatePicker, _super);
    function TutorialDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            from: null,
            to: null
        };
        return _this;
    }
    TutorialDatePicker.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialDatePicker.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialDatePicker.prototype.selectFrom = function (day) {
        this.setState({
            from: day
        });
    };
    TutorialDatePicker.prototype.selectTo = function (day) {
        this.setState({
            to: day
        });
    };
    TutorialDatePicker.prototype.render = function () {
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
                React.createElement("h3", null, "Select"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, null,
                        React.createElement(index_1.Button, { simple: true }, "Select Exp date:"),
                        React.createElement(index_1.DatePicker, { onSelect: _this.selectFrom.bind(_this), date: _this.state.from, mobile: props.mobile }))),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, null,
                        React.createElement(index_1.Button, { simple: true }, "Select Exp date and time:"),
                        React.createElement(index_1.DatePicker, { theme: "primary", selectTime: true, onSelect: _this.selectFrom.bind(_this), date: _this.state.from, mobile: props.mobile }))),
                React.createElement("h3", null, "Mobile"),
                React.createElement(index_1.Layer, { className: "ptb20" },
                    React.createElement(index_1.Toolbar, null,
                        React.createElement(index_1.Button, { simple: true }, "From:"),
                        React.createElement(index_1.DatePicker, { mobile: true, onSelect: _this.selectFrom.bind(_this), date: _this.state.from }))),
                React.createElement("h3", null, "Default"),
                React.createElement(index_1.Layer, { className: "pt20" },
                    React.createElement(index_1.Toolbar, null,
                        React.createElement(index_1.Button, { simple: true }, "From:"),
                        React.createElement(index_1.DatePicker, { onSelect: _this.selectFrom.bind(_this), date: _this.state.from, mobile: props.mobile }),
                        React.createElement(index_1.Button, { simple: true }, "To:"),
                        React.createElement(index_1.DatePicker, { onSelect: _this.selectTo.bind(_this), date: _this.state.to, mobile: props.mobile })))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The DatePicker.", Id: "DatePicker", columnData: ChecboxProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialDatePicker;
}(React.Component));
exports.default = TutorialDatePicker;
//# sourceMappingURL=TutorialDatePicker.js.map