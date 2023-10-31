"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appState = exports.AppState = void 0;
var mobx_1 = require("mobx");
var history_1 = require("history");
function checkForMobile() {
    return window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480;
}
var AppState = (function () {
    function AppState() {
        this.nightmode = false;
        this.mobile = false;
        this.menuEnabled = false;
        this.history = (0, history_1.createBrowserHistory)();
        var self = this;
        self.mobile = checkForMobile();
    }
    AppState.prototype.initializeApp = function () {
    };
    AppState.prototype.gotoPage = function (page) {
        this.history.push(page);
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], AppState.prototype, "nightmode", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], AppState.prototype, "mobile", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], AppState.prototype, "menuEnabled", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], AppState.prototype, "history", void 0);
    return AppState;
}());
exports.AppState = AppState;
exports.appState = new AppState();
//# sourceMappingURL=AppState.js.map