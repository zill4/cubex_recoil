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
var ModalProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the Modal should show.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit to fa fa-',
        description: 'Defines a font awesome icon for the modal.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines a title for the modal element.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal element is floating.'
    },
    {
        name: 'ghost',
        type: 'string',
        options: '',
        description: 'Defines if the modal is in ghost mode.'
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the modal to full-screen mode.'
    },
    {
        name: 'onClose',
        type: 'string',
        options: '',
        description: 'Defines an onClose event for the modal.'
    },
    {
        name: 'min',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal is minified.'
    }
];
var TutorialModal = (function (_super) {
    __extends(TutorialModal, _super);
    function TutorialModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showProps: true,
            showVideo: false,
            showModal: false,
            showModalFullScreen: false
        };
        return _this;
    }
    TutorialModal.prototype.toggleShowProps = function () {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    };
    TutorialModal.prototype.toggleShowVideo = function () {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    };
    TutorialModal.prototype.openModal = function () {
        var _this = this;
        this.setState({
            showModal: true
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialModal.prototype.openModalFullScreen = function () {
        var _this = this;
        this.setState({
            showModalFullScreen: true
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialModal.prototype.closeModalFullScreen = function () {
        var _this = this;
        this.setState({
            showModalFullScreen: false
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialModal.prototype.closeModal = function () {
        var _this = this;
        this.setState({
            showModal: false
        }, function () {
            _this.props.toggleModal(_this.state.showModal);
        });
    };
    TutorialModal.prototype.render = function () {
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
                React.createElement("h3", { className: "pb20" }, "Default"),
                React.createElement(index_1.Layer, { className: "pb20" },
                    React.createElement(index_1.Button, { theme: "primary", onClick: _this.openModal.bind(_this) }, "Show Modal")),
                React.createElement(index_1.Modal, { open: _this.state.showModal, onClose: _this.closeModal.bind(_this) },
                    React.createElement(index_1.Layer, { className: "p10" },
                        React.createElement("p", { className: "mb10" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                        React.createElement(index_1.Button, { onClick: _this.closeModal.bind(_this) }, "Close Modal"))),
                React.createElement("h3", { className: "pb20" }, "Fullscreen Modal"),
                React.createElement(index_1.Layer, null,
                    React.createElement(index_1.Button, { theme: "primary", onClick: _this.openModalFullScreen.bind(_this) }, "Open Fullscreen Modal")),
                React.createElement(index_1.Modal, { fullScreen: true, hideFullScreenButton: true, open: _this.state.showModalFullScreen, onClose: _this.closeModalFullScreen.bind(_this) },
                    React.createElement(index_1.Layer, { className: "p10" },
                        React.createElement("p", { className: "mb10" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                        React.createElement(index_1.Button, { onClick: _this.closeModalFullScreen.bind(_this) }, "Close Modal")))));
        };
        return (React.createElement(TutorialView_1.default, { description: "The Modal component shows a simple modal if a certain event happens.", Id: "Modal", columnData: ModalProperties, examples: example, scrollIf: props.scrollIf, scrollToId: props.scrollToId }));
    };
    return TutorialModal;
}(React.Component));
exports.default = TutorialModal;
//# sourceMappingURL=TutorialModal.js.map