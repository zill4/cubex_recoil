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
exports.Layer = void 0;
var React = require("react");
var classNames = require("classnames");
var OOCSS_1 = require("../OOCSS/OOCSS");
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function (to, top) {
            var self = _this;
            self._beforeAnimate();
            self.setState({
                scrollToId: to
            }, function () {
                self.animateScroll(_this._animate, top);
            });
            self._afterAnimate();
        };
        _this._scrollToId = props.scrollToId && props.scrollToId !== '' && props.scrollToId.toString().replace(/^#/, '') || '';
        var offset = props.offset || 0, duration = 400, easing = _this.easeOutQuad;
        _this._animate = { offset: offset, duration: duration, easing: easing };
        _this._beforeAnimate = props.beforeAnimate || function () { };
        _this._afterAnimate = props.afterAnimate || function () { };
        _this.state = {
            scrollToId: '',
            lastScrollY: 0,
            ticking: false
        };
        return _this;
    }
    Layer.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.scrollIf && nextProps.scrollToId !== this.props.scrollToId) {
            this.canLayerAnimateScroll(nextProps);
        }
        ;
    };
    Layer.prototype.componentDidMount = function () {
        if (this.props.scrollIf && this.props.scrollToId !== '') {
            this.canLayerAnimateScroll(this.props);
        }
    };
    Layer.prototype.canLayerAnimateScroll = function (props) {
        var propss = props || this.props;
        var self = this;
        setTimeout(function () {
            var element = document.getElementById(propss.scrollToId);
            if (element && element.getBoundingClientRect()) {
                self.handleScroll(propss.scrollToId, element.offsetTop);
            }
            else
                return null;
        }, 0);
    };
    Layer.prototype.animateScroll = function (animate, top) {
        this.refs.Layer ? this.scrollTo(animate.duration, top) : null;
    };
    Layer.prototype.scrollTo = function (duration, top) {
        this.animateScrolling(duration, top);
    };
    Layer.prototype.animateScrolling = function (duration, top) {
        var self = this;
        var startY = this.getScrollTop();
        scrollTo(startY, this.refs.Layer, top, duration);
        self.setState({
            scrollToId: ''
        });
    };
    Layer.prototype.setScrolling = function (x, y) {
        this.refs.Layer.scrollTop = y;
        this.refs.Layer.scrollLeft = x;
    };
    Layer.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    Layer.prototype.getScrollTop = function () {
        return this.refs.Layer.scrollTop || this.refs.Layer.scrollTop;
    };
    Layer.prototype.setScrollTop = function (position) {
        this.refs.Layer.scrollTop = position;
    };
    Layer.prototype.getOffsetTop = function (element) {
        var top = element.getBoundingClientRect().top;
        return top + this.getScrollTop();
    };
    Layer.prototype.getScrollLeft = function () {
        return this.refs.Layer.scrollLeft || this.refs.Layer.scrollLeft;
    };
    Layer.prototype.setScrollLeft = function (position) {
        this.refs.Layer.scrollLeft = position;
    };
    Layer.prototype.getOffsetLeft = function (element) {
        var left = element.getBoundingClientRect().left;
        return left + this.getScrollLeft();
    };
    Layer.prototype.render = function () {
        var self = this;
        var props = self.props;
        var dimensionStyle;
        if (props.dimensions) {
            dimensionStyle = {
                width: props.dimensions[0],
                height: props.dimensions[1],
                zIndex: props.dimensions[2]
            };
        }
        var layerClass = classNames('r-Layer', { 'flohide': (props.overflow) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'e-NightMode': (props.nightmode) }, { 'e-scroll': (props.scroll) }, { 'e-scroll-y': (props.scrollY) }, { 'e-scroll-x': (props.scrollX) }, { 'disabled': (props.disabled) }, { 'e-flex': (props.flex) }, { 'e-fill': (props.fill) }, { 'parent': (props.parent) }, { 'child': (props.child) }, { 'e-shadow': (props.shadow) }, { 'e-flex-center': (props.flexCenter) }, { 'border-all': (props.border) }, props.theme, props.className);
        return (React.createElement("div", { id: props.id, onScroll: this.props.onScroll, tabIndex: props.tabIndex, ref: "Layer", onClick: props.onClick, className: layerClass, style: Object.assign({}, dimensionStyle, props.style) }, props.children));
    };
    Layer.defaultProps = {
        overflow: false,
        type: '',
        left: false,
        right: false,
        border: '',
        scrollIf: false,
        flexCenter: false
    };
    return Layer;
}(React.Component));
exports.Layer = Layer;
Math['easeInOutQuad'] = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
Math['easeInCubic'] = function (t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};
Math['inOutQuintic'] = function (t, b, c, d) {
    var ts = (t /= d) * t, tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};
var requestAnimFrame = (function () {
    return window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || function (callback) { window.setTimeout(callback, 2000 / 60); };
})();
function scrollTo(scrollTop, element, to, duration) {
    function move(amount) {
        element.scrollTop = amount;
    }
    function position() {
        return scrollTop;
    }
    var start = position(), change = to - start, currentTime = 0, increment = 10;
    duration = (typeof (duration) === 'undefined') ? 500 : duration;
    var animateScroll = function () {
        currentTime += increment;
        var val = Math['inOutQuintic'](currentTime, start, change, duration);
        move(val);
        if (currentTime < duration) {
            requestAnimFrame(animateScroll);
        }
    };
    animateScroll();
}
exports.default = (0, OOCSS_1.OOCSS)()(Layer);
//# sourceMappingURL=Layer.js.map