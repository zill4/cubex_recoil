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
var dropData = ['from', 'block', 'contentClass', 'onSelected', 'type', 'data'];
var DropdownProperties = [
    {
        name: 'from',
        type: 'string',
        options: 'X X, use top bottom left right',
        description: 'Defines the direction of the drop.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the dropdown is a block element with a width of 100%.'
    },
    {
        name: 'contentClass',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the dropdown content container.'
    },
    {
        name: 'onSelected',
        type: 'function',
        options: 'true, false',
        description: 'Return the selected value of the array, if the dropdown is of type selection.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'selection, button, search.',
        description: 'Defines what type of dropdown it is, omit for default option and pass children.'
    }
];
var days = [
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
    { name: 'Saturday' },
    { name: 'Sunday' }
];
var months = [
    { name: 'January' },
    { name: 'February' },
    { name: 'March' },
    { name: 'April' },
    { name: 'May' },
    { name: 'June' },
    { name: 'July' },
    { name: 'August' },
    { name: 'October' },
    { name: 'September' },
    { name: 'November' },
    { name: 'December' }
];
var users = [
    { name: 'Joe' },
    { name: 'John' },
    { name: 'Mat' },
    { name: 'Tom' },
    { name: 'Sean' },
    { name: 'Rob' },
    { name: 'Anne' }
];
var TutorialDropdown = (function (_super) {
    __extends(TutorialDropdown, _super);
    function TutorialDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialDropdown.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialDropdown.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialDropdown.prototype.render = function () {
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
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { id: "SelectDay", className: 'w200px', rowIsSelectable: "single", title: "Select Day", hideHeader: true, dataSource: days, hidePageSize: true, dropDirection: "top", icon: "calendar", iconPointer: "down", selectedKey: 'name', shortcut: 'a' })),
                React.createElement("h3", null, "Multiselect with tags"),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { className: 'w200px', rowIsSelectable: true, title: "Select Months", hideHeader: true, dataSource: months, hidePageSize: true, selectedKey: 'name', shortcut: 'g', tagSelected: true, theme: "primary", icon: "star" })),
                React.createElement("h3", null, "Disabled"),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { className: 'w200px', rowIsSelectable: "single", title: "Disabled", hideHeader: true, dataSource: months, hidePageSize: true, selectedKey: 'name', shortcut: 'g', disabled: true })),
                React.createElement("h3", null, "Loading"),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { className: 'w200px', rowIsSelectable: "single", title: "Loading", hideHeader: true, dataSource: months, hidePageSize: true, selectedKey: 'name', shortcut: 'g', loading: true })),
                React.createElement("h3", null, "Multi Select Mobile Dropdown"),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { tagSelected: true, selectedKey: "name", shortcut: "u", focusOnMount: true, mobile: true, className: 'w200px', icon: "users", iconPointer: "down", rowIsSelectable: true, title: "Select Users", dataSource: users, columns: [{ name: 'name' }], searchableKeys: ["name"], searchTitle: "Find Users" })),
                React.createElement("h3", null, "Custom Content"),
                React.createElement("p", null, "To add custom content to a dropdown, just include it as a child of the component."),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { className: 'w200px', title: "Custom Content" },
                        React.createElement("div", { className: "w100 p10" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),
                React.createElement("h3", null, "Advanced Dropdown"),
                React.createElement("p", null,
                    "The example below shows a drop down with the block prop and a ",
                    React.createElement("strong", null, "from"),
                    " prop with the value ",
                    React.createElement("strong", null, "top left"),
                    " and a ",
                    React.createElement("strong", null, "contentClass"),
                    " props of ",
                    React.createElement("strong", null, "w300px"),
                    "."),
                React.createElement("div", { className: "ptb20" },
                    React.createElement(index_1.Dropdown, { block: true, icon: "eye", title: "Advanced Dropdown" },
                        React.createElement("div", { className: "w100 p10" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Dropdown component is an advanced version of the standard selection options control.", Id: "Dropdown", columnData: DropdownProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialDropdown;
}(React.Component));
exports.default = TutorialDropdown;
//# sourceMappingURL=TutorialDropdown.js.map