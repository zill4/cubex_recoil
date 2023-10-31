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
var index_1 = require("../../src/index");
var TutorialButton_1 = require("./tutorial/TutorialButton");
var TutorialAlign_1 = require("./tutorial/TutorialAlign");
var TutorialCheckbox_1 = require("./tutorial/TutorialCheckbox");
var TutorialOpen_1 = require("./tutorial/TutorialOpen");
var TutorialDropdown_1 = require("./tutorial/TutorialDropdown");
var TutorialEmerge_1 = require("./tutorial/TutorialEmerge");
var TutorialTable_1 = require("./tutorial/TutorialTable");
var TutorialInput_1 = require("./tutorial/TutorialInput");
var TutorialLayer_1 = require("./tutorial/TutorialLayer");
var TutorialLoading_1 = require("./tutorial/TutorialLoading");
var TutorialModal_1 = require("./tutorial/TutorialModal");
var TutorialSlideIn_1 = require("./tutorial/TutorialSlideIn");
var TutorialSelectable_1 = require("./tutorial/TutorialSelectable");
var TutorialShrink_1 = require("./tutorial/TutorialShrink");
var TutorialToggle_1 = require("./tutorial/TutorialToggle");
var TutorialToolbar_1 = require("./tutorial/TutorialToolbar");
var TutorialTransform_1 = require("./tutorial/TutorialTransform");
var TutorialWizard_1 = require("./tutorial/TutorialWizard");
var TutorialCalendar_1 = require("./tutorial/TutorialCalendar");
var TutorialDatePicker_1 = require("./tutorial/TutorialDatePicker");
var TutorialRecoil_1 = require("./tutorial/TutorialRecoil");
var TutorialStepper_1 = require("./tutorial/TutorialStepper");
var TutorialGrid_1 = require("./tutorial/TutorialGrid");
var SampleData_1 = require("./tutorial/SampleData");
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            slideIndex: 0,
            showMenu: true,
            showModal: false,
            nightmode: false,
            showDocs: false,
            showInstructions: false
        };
        return _this;
    }
    App.prototype.toggleMenu = function () {
        this.setState({
            showMenu: !this.state.showMenu
        });
    };
    App.prototype.toggleInstructions = function () {
        this.setState({
            showInstructions: !this.state.showInstructions
        });
    };
    App.prototype.toggleDocs = function () {
        this.setState({
            showDocs: !this.state.showDocs
        });
    };
    App.prototype.toggleNightMode = function () {
        this.setState({
            nightmode: !this.state.nightmode,
        });
    };
    App.prototype.toggleModal = function () {
        this.setState({
            showModal: !this.state.showModal,
            showMenu: this.state.mobile ? false : !this.state.showMenu
        });
    };
    App.prototype.toggleMobile = function (isMobile) {
        this.setState({
            mobile: isMobile,
            showMenu: false
        });
    };
    App.prototype.gotoSlideIndex = function (item) {
        this.setState({
            slideIndex: item.index,
            showMenu: this.state.mobile ? false : true,
            showModal: false
        });
    };
    App.prototype.render = function () {
        var _a = this.state, showModal = _a.showModal, showMenu = _a.showMenu, nightmode = _a.nightmode, slideIndex = _a.slideIndex, mobile = _a.mobile;
        return (React.createElement(index_1.Recoil, { overflow: true, nightmode: nightmode, onMobile: this.toggleMobile.bind(this) },
            React.createElement(index_1.Layer, { fill: true, overflow: true },
                React.createElement(index_1.Shrink, { fill: true, if: showModal },
                    React.createElement(index_1.Transform, { type: mobile ? "translate" : null, push: !mobile ? 'left' : null, axis: 'X', flex: true, fill: true, if: showMenu, amount: "300px" },
                        React.createElement(index_1.SlideIn, { className: 'z5', if: !showModal, from: 'top' },
                            React.createElement(index_1.Layer, { fill: true, theme: "light" },
                                React.createElement(index_1.Toolbar, { size: "small", block: true, className: "p10 border-bottom" },
                                    mobile ? React.createElement(index_1.Button, { simple: true, icon: showMenu ? "times" : "bars", onClick: this.toggleMenu.bind(this) }) : null,
                                    React.createElement("h1", { className: "dinblock" },
                                        React.createElement("strong", null, "Recoil"),
                                        " ",
                                        React.createElement("small", null, "0.5.3")),
                                    React.createElement(index_1.Button, { href: "https://www.github.com/jisaac89/recoil", theme: "error", right: true, icon: "github" }, "github"),
                                    React.createElement(index_1.Button, { simple: true, onClick: this.toggleDocs.bind(this), right: true, icon: "download", className: "mr5" }),
                                    React.createElement(index_1.Button, { simple: true, onClick: this.toggleNightMode.bind(this), right: true, icon: "moon-o" })),
                                React.createElement("hr", { className: "hr" }))),
                        React.createElement(index_1.Layer, { fill: true, overflow: true, className: "ps5 pt50 z4" },
                            React.createElement(index_1.Wizard, { fill: true, flex: true, slideIndex: slideIndex },
                                React.createElement(TutorialAlign_1.default, null),
                                React.createElement(TutorialButton_1.default, { mobile: mobile }),
                                React.createElement(TutorialCalendar_1.default, { mobile: mobile }),
                                React.createElement(TutorialCheckbox_1.default, null),
                                React.createElement(TutorialDatePicker_1.default, { mobile: mobile }),
                                React.createElement(TutorialDropdown_1.default, { mobile: mobile }),
                                React.createElement(TutorialEmerge_1.default, null),
                                React.createElement(TutorialInput_1.default, null),
                                React.createElement(TutorialLayer_1.default, null),
                                React.createElement(TutorialLoading_1.default, null),
                                React.createElement(TutorialModal_1.default, { toggleModal: this.toggleModal.bind(this) }),
                                React.createElement(TutorialOpen_1.default, null),
                                React.createElement(TutorialRecoil_1.default, { mobile: mobile }),
                                React.createElement(TutorialSelectable_1.default, null),
                                React.createElement(TutorialShrink_1.default, null),
                                React.createElement(TutorialSlideIn_1.default, null),
                                React.createElement(TutorialStepper_1.default, null),
                                React.createElement(TutorialTable_1.default, null),
                                React.createElement(TutorialToggle_1.default, null),
                                React.createElement(TutorialToolbar_1.default, null),
                                React.createElement(TutorialTransform_1.default, null),
                                React.createElement(TutorialWizard_1.default, null),
                                React.createElement(TutorialGrid_1.default, null))),
                        React.createElement(index_1.SlideIn, { className: 'z5', if: !showModal && showMenu === false && showModal === false, from: 'bottom' },
                            React.createElement(index_1.Layer, { fill: true, nightmode: true },
                                React.createElement(index_1.Toolbar, { textCenter: true, flex: true, spacing: true, block: true, className: "p10 border-top" },
                                    SampleData_1.default[slideIndex - 1] ? React.createElement(index_1.Button, { iconLocation: "left", icon: "caret-left", tabIndex: -1, block: true, onClick: this.gotoSlideIndex.bind(this, SampleData_1.default[slideIndex - 1]) }, SampleData_1.default[slideIndex - 1].name) : null,
                                    SampleData_1.default[slideIndex + 1] ? React.createElement(index_1.Button, { iconLocation: "right", icon: "caret-right", tabIndex: -1, block: true, right: true, onClick: this.gotoSlideIndex.bind(this, SampleData_1.default[slideIndex + 1]) }, SampleData_1.default[slideIndex + 1].name) : null))))),
                React.createElement(index_1.SlideIn, { if: this.state.showMenu && !showModal, from: "left", className: mobile ? "w300px h100" : "w300px h100 pt50" },
                    React.createElement(index_1.Layer, { fill: true, nightmode: true, scrollY: true, className: "p10" },
                        React.createElement(index_1.Button, { block: true, className: "text-center mb10" }, "Component List"),
                        React.createElement(index_1.Table, { dataSource: SampleData_1.default, pageSize: SampleData_1.default.length, columns: [{ name: 'name' }], hideHeader: true, onRowSelect: this.gotoSlideIndex.bind(this), selectedElements: [this.state.slideIndex], selectedKey: 'index', searchableKeys: ['name'], searchTitle: "Find a Component, e.g Table..." })))),
            React.createElement(index_1.SlideIn, { className: "z5", if: !this.state.showDocs, from: "bottom", fill: true },
                React.createElement(index_1.Layer, { tabIndex: -1, flexCenter: true, theme: "light", className: "p10", fill: true },
                    React.createElement("h2", null,
                        React.createElement("a", { tabIndex: -1, href: "https://www.github.com/jisaac89/recoil" }, "Recoil"),
                        " ",
                        React.createElement("small", null, "0.5.3")),
                    React.createElement("p", { className: "ptb20" },
                        "A ",
                        React.createElement("a", { tabIndex: -1, href: "https://reactjs.org/" }, "React"),
                        " powered front-end framework written in ",
                        React.createElement("a", { tabIndex: -1, href: "https://www.typescriptlang.org/" }, "Typescript"),
                        "."),
                    React.createElement(index_1.Toolbar, { spacing: true, className: "pb20 dinblock" },
                        React.createElement(index_1.Button, { tabIndex: -1, onClick: this.toggleNightMode.bind(this), icon: "moon-o" }),
                        React.createElement(index_1.Button, { tabIndex: -1, onClick: this.toggleDocs.bind(this), className: "ps40", theme: "primary", icon: "star", iconPointer: "down" }, "Components"),
                        React.createElement(index_1.Button, { tabIndex: -1, href: "https://www.github.com/jisaac89/recoil", icon: "github" })),
                    React.createElement(index_1.Layer, { tabIndex: -1, className: "p10 text-center center-width" },
                        React.createElement(index_1.Emerge, { delay: 1000, if: !this.state.showDocs },
                            React.createElement("div", null,
                                React.createElement("small", null, "clone recoil from github"),
                                React.createElement("br", null),
                                React.createElement("small", null,
                                    React.createElement("strong", null, "git clone https://github.com/jisaac89/recoil.git"),
                                    " "),
                                React.createElement("br", null),
                                React.createElement("br", null)),
                            React.createElement("div", null,
                                React.createElement("small", null, "cd into project "),
                                React.createElement("br", null),
                                React.createElement("small", null,
                                    React.createElement("strong", null, " cd recoil")),
                                React.createElement("br", null),
                                React.createElement("br", null)),
                            React.createElement("div", null,
                                React.createElement("small", null, "install the npm dependencies "),
                                React.createElement("br", null),
                                React.createElement("small", null,
                                    React.createElement("strong", null, " npm install")),
                                React.createElement("br", null),
                                React.createElement("br", null)),
                            React.createElement("div", null,
                                React.createElement("small", null, "run the project"),
                                React.createElement("br", null),
                                React.createElement("small", null,
                                    React.createElement("strong", null, "npm run watch")),
                                React.createElement("br", null),
                                React.createElement("br", null)),
                            React.createElement("div", null,
                                React.createElement("small", null,
                                    "documentation located at ",
                                    React.createElement("br", null),
                                    React.createElement("strong", null, "recoil/docs/index.html")))))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=Entry.js.map