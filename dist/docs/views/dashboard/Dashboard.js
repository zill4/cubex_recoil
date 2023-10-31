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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var index_1 = require("../../../src/index");
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        var self = this;
        var gridProps = [
            {
                "description": 'Provide a dataSource object to render',
                "type": 'Array<{}>',
                "prop": "dataSource",
            },
            {
                "description": "Define a columns object {name, title, hideHeader, template, headerTemplate}",
                'type': 'Array<{}>',
                "prop": "columns",
            },
            {
                "description": "Columns are sortable",
                "type": 'boolean',
                "prop": "sortable",
            }
        ];
        return (React.createElement(index_1.Emerge, { className: "text-center" },
            React.createElement("h1", { className: "super mtb30" },
                React.createElement("strong", null, "React"),
                " Recoil"),
            React.createElement("div", { className: "w50 center-width" },
                React.createElement(index_1.Table, { dataSource: gridProps }))));
    };
    Dashboard = __decorate([
        mobx_react_1.observer
    ], Dashboard);
    return Dashboard;
}(React.Component));
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map