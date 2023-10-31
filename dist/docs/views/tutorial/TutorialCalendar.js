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
var CalendarProperties = [
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
var TutorialCalendar = (function (_super) {
    __extends(TutorialCalendar, _super);
    function TutorialCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialCalendar.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialCalendar.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialCalendar.prototype.render = function () {
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
                    React.createElement(index_1.Calendar, { calendarHeight: "300px" })),
                React.createElement("img", { className: "w100 mtb20", src: "http://reactrecoil.io/imgs/calendar1.png" })));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Calendar component displays a yearly Calendar.", Id: "Calendar", columnData: CalendarProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialCalendar;
}(React.Component));
exports.default = TutorialCalendar;
//# sourceMappingURL=TutorialCalendar.js.map