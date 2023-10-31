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
var Button_1 = require("../Button/Button");
var Toolbar_1 = require("../Toolbar/Toolbar");
var classNames = require("classnames");
var Notification = (function (_super) {
    __extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            view: 'visible'
        };
        return _this;
    }
    Notification.prototype.componentDidMount = function () {
        var self = this;
        setTimeout(function () {
            self.setState({
                view: 'hiding'
            });
        }, 5000);
        setTimeout(function () {
            self.setState({
                view: 'removed'
            });
        }, 20000);
    };
    Notification.prototype.render = function () {
        var self = this;
        var props = self.props;
        var animationClass;
        if (this.state.view === 'visible') {
            animationClass = 'animated fadeInUp';
        }
        else if (this.state.view === 'hiding') {
            animationClass = 'animated';
        }
        else {
        }
        return this.state.view === 'visible' ? React.createElement(Toolbar_1.default, { block: true, textCenter: true, className: "p10 w100" },
            React.createElement(Button_1.default, { block: true, theme: props.item.type ? props.item.type : 'default', className: animationClass }, props.item.title)) : null;
    };
    return Notification;
}(React.Component));
var Notifications = (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notifications.prototype.render = function () {
        var _a = this.props, className = _a.className, dataSource = _a.dataSource;
        var notificationClass = classNames('r-Notifications', 'dblock', className);
        return (React.createElement("div", { className: notificationClass }, dataSource.map(function (item, index) {
            return React.createElement(Notification, { item: item, key: item.id || index });
        })));
    };
    return Notifications;
}(React.Component));
exports.default = Notifications;
//# sourceMappingURL=Notifications.js.map