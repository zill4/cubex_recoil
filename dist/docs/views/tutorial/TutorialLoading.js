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
var LoadingProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the loading element should show.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    }
];
var TutorialLoading = (function (_super) {
    __extends(TutorialLoading, _super);
    function TutorialLoading(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false
        };
        return _this;
    }
    TutorialLoading.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialLoading.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialLoading.prototype.render = function () {
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
                React.createElement(index_1.Loading, { if: true, icon: "check" }),
                React.createElement(index_1.Loading, { size: 'large', icon: "users", if: true }),
                React.createElement(index_1.Loading, { size: "xlarge", icon: "star", if: true }),
                React.createElement(index_1.Loading, { size: "xxlarge", icon: "lock", if: true })));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Loading component shows a simple loader if a certain event happens.", Id: "Loading", columnData: LoadingProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialLoading;
}(React.Component));
exports.default = TutorialLoading;
//# sourceMappingURL=TutorialLoading.js.map