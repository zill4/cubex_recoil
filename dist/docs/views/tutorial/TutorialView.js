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
var TutorialView = (function (_super) {
    __extends(TutorialView, _super);
    function TutorialView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            showModal: false
        };
        return _this;
    }
    TutorialView.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialView.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialView.prototype.openModal = function () {
        var _this = this;
        this.setState({
            showModal: true
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialView.prototype.closeModal = function () {
        var _this = this;
        this.setState({
            showModal: false
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialView.prototype.detailTemplate = function (item) {
        var self = this;
        var props = self.props;
        var state = self.state;
        var columns = [
            { name: 'name', width: 120 },
            { name: 'type', width: 140 },
            { name: 'description' }
        ];
        var mobileColumns = [
            { name: 'name' }
        ];
        return (React.createElement(index_1.Layer, { className: "pl20 p10" },
            React.createElement("p", null,
                React.createElement("small", null,
                    "Value: ",
                    item.type)),
            React.createElement("p", null, item.description)));
    };
    TutorialView.prototype.render = function () {
        var self = this;
        var props = self.props;
        var state = self.state;
        var columns = [
            { name: 'name', template: function (data) { return React.createElement("h3", { className: "ptb20" }, data.name); } }
        ];
        return (React.createElement(index_1.Layer, { fill: true, offset: -100, flex: true, scrollY: true, scrollIf: props.scrollIf, scrollToId: props.scrollToId },
            React.createElement("div", { className: "mobile-version w1000px center-width p50" },
                React.createElement(index_1.Layer, null,
                    React.createElement("h2", { id: props.Id, className: "pb20" }, "Description"),
                    React.createElement("p", null, props.description)),
                React.createElement(index_1.Layer, { className: "pt20" },
                    React.createElement("h2", { className: "pb20" }, "Examples"),
                    props.examples ? props.examples() : null),
                React.createElement("h2", { className: "ptb20" }, "Props"),
                React.createElement(index_1.Table, { sortable: true, columns: columns, dataSource: props.columnData, detailTemplate: this.detailTemplate.bind(this), pageSize: props.columnData.length, detailTemplateSelectedElements: props.columnData, detailTemplateHideToggle: true, searchableKeys: ['name'], searchTitle: 'Filter by property name.' }))));
    };
    return TutorialView;
}(React.Component));
exports.default = TutorialView;
//# sourceMappingURL=TutorialView.js.map