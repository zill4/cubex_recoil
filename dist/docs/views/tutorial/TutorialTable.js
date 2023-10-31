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
var TableProperties = [
    {
        name: 'columns',
        type: '',
        options: '',
        description: 'Defines the columns object.'
    },
    {
        name: 'sortable',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the Table is sortable.'
    },
    {
        name: 'hideHeader',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the Table header is visible.'
    },
    {
        name: 'selected',
        type: '',
        options: '',
        description: 'Return item, so user can filter it.'
    },
    {
        name: 'onSelect',
        type: '',
        options: '',
        description: 'Define a function of what happens when a user selected a row.'
    },
    {
        name: 'dataSource',
        type: '',
        options: '',
        description: 'Define the Tables actual data object.'
    },
    {
        name: 'detailTemplate',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selectedKey',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selected',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'onRowSelect',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    }
];
var TutorialTable = (function (_super) {
    __extends(TutorialTable, _super);
    function TutorialTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialTable.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialTable.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialTable.prototype.detailTemplate = function (element) {
        return (React.createElement(index_1.Layer, { theme: "light", className: "p10 pl50" },
            React.createElement("small", null, element.description)));
    };
    TutorialTable.prototype.render = function () {
        var _this = this;
        var self = this;
        var props = self.props;
        var state = self.state;
        var columns = [
            { name: 'name' }
        ];
        var example = function () {
            return (React.createElement("div", null,
                React.createElement(index_1.Table, { showDataSourceLength: true, pageSize: 5, checkable: true, detailTemplate: _this.detailTemplate.bind(_this), searchableKeys: ['name'], sortable: true, columns: columns, dataSource: TableProperties })));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Table component is a simple data-Table that currently takes in a object.", Id: "Table", columnData: TableProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialTable;
}(React.Component));
exports.default = TutorialTable;
//# sourceMappingURL=TutorialTable.js.map