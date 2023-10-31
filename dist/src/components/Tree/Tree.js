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
var Table_1 = require("../Table/Table");
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            treeItems: [],
            roots: [],
            treeItemHash: {},
            openedKeys: []
        };
        return _this;
    }
    Tree.prototype.componentDidMount = function () {
        this.initArray(this.props.dataSource, true);
        if (this.props.selectedElements && this.props.selectedElements.length > 0) {
            this.openSelectedElements(this.props.selectedElements);
        }
    };
    Tree.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.dataSource.length !== this.props.dataSource.length) {
            this.initArray(nextProps.dataSource, false);
        }
        if (nextProps.selectedElements && nextProps.selectedElements.length > 0) {
            this.openSelectedElements(nextProps.selectedElements);
        }
    };
    Tree.prototype.initArray = function (dataSource, bool) {
        var _this = this;
        var _a = this.props, parentKey = _a.parentKey, uniqueKey = _a.uniqueKey;
        var treeItems = [];
        var treeItemHash = {};
        if (dataSource.length) {
            dataSource.forEach(function (item) {
                var treeItem = {
                    item: item,
                    Id: item[uniqueKey],
                    parentId: item[parentKey],
                    children: []
                };
                treeItems.push(treeItem);
                treeItemHash[item[uniqueKey]] = treeItem;
            });
        }
        this.setState({
            treeItems: treeItems,
            treeItemHash: treeItemHash
        }, function () {
            _this.updateRoots();
        });
        if (bool) {
            this.props.onMount ? this.props.onMount(treeItems) : null;
        }
    };
    Tree.prototype.updateRoots = function () {
        var _this = this;
        var treeItems = this.state.treeItems;
        var treeItemHash = this.state.treeItemHash;
        var roots = [];
        if (treeItems.length === this.props.dataSource.length) {
            for (var i = 0; i < treeItems.length; i += 1) {
                var node = treeItems[i];
                var parent_1 = treeItemHash[node.parentId];
                parent_1 ? parent_1.children.push(node) : roots.push(node);
            }
        }
        this.setState({ roots: roots }, function () {
            _this.props.selectedElements && _this.props.selectedElements.length > 0 ? _this.openSelectedElements(_this.props.selectedElements) : null;
            _this.props.openedElements && _this.props.openedElements.length > 0 ? _this.openedElements(_this.props.openedElements) : null;
        });
    };
    Tree.prototype.openSelectedElements = function (selectedElements) {
        var _this = this;
        var treeItems = this.state.treeItems;
        var openedKeys = [];
        var gotoParentAndPushKey = function (selectedKeyIndex, node) {
            var currentSelectedKeyIndex = selectedKeyIndex || 0;
            var currentNode = node || treeItems.filter(function (node) {
                return node.Id === selectedElements[selectedKeyIndex];
            });
            var theNode = currentNode[0];
            if (theNode && (theNode.parentId !== 0 || theNode.parentId !== _this.props.parentId)) {
                openedKeys.push(theNode.parentId);
                var parentNode = treeItems.filter(function (node) {
                    return node.Id === theNode.parentId;
                });
                if (theNode.parentId === 0 || theNode.parentId === _this.props.parentId) {
                    return null;
                }
                else {
                    return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
                }
            }
        };
        gotoParentAndPushKey(0);
        this.setState({
            openedKeys: openedKeys
        });
    };
    Tree.prototype.openedElements = function (selectedElements) {
        var _this = this;
        var treeItems = this.state.treeItems;
        var openedKeys = [];
        var gotoParentAndPushKey = function (selectedKeyIndex, node) {
            var currentSelectedKeyIndex = selectedKeyIndex || 0;
            var currentNode = node || treeItems.filter(function (node) {
                return node.Id === selectedElements[selectedKeyIndex];
            });
            var theNode = currentNode[0];
            if (theNode && (theNode.parentId !== 0 || theNode.parentId !== _this.props.parentId)) {
                openedKeys.push(theNode.parentId);
                var parentNode = treeItems.filter(function (node) {
                    return node.Id === theNode.parentId;
                });
                if (theNode.parentId === 0 || theNode.parentId === _this.props.parentId) {
                    return null;
                }
                else {
                    return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
                }
            }
        };
        gotoParentAndPushKey(0);
        this.setState({
            openedKeys: openedKeys
        });
    };
    Tree.prototype.renderChildren = function (childNode) {
        var _a = this.props, columns = _a.columns, uniqueKey = _a.uniqueKey, filterOpenDetailTemplate = _a.filterOpenDetailTemplate, openedElements = _a.openedElements;
        return (React.createElement(Table_1.default, { hideHeader: true, key: childNode.Id, className: "pl20", columns: columns, dataSource: childNode.children, detailTemplate: this.renderChildren.bind(this), filterOpenDetailTemplate: filterOpenDetailTemplate, hidePageSize: true, selectedKey: uniqueKey, selectedElements: this.props.selectedElements, detailTemplateSelectedElements: this.state.openedKeys.concat(openedElements), pageSize: childNode.children.length }));
    };
    Tree.prototype.renderChildrenWithoutParent = function (childNode) {
        var _a = this.props, columns = _a.columns, uniqueKey = _a.uniqueKey, filterOpenDetailTemplate = _a.filterOpenDetailTemplate, openedElements = _a.openedElements, hideChildren = _a.hideChildren;
        if (!hideChildren) {
            return (React.createElement(Table_1.default, { hideHeader: true, key: childNode.Id, columns: columns, dataSource: childNode.children, detailTemplate: this.renderChildren.bind(this), filterOpenDetailTemplate: filterOpenDetailTemplate, hidePageSize: true, selectedKey: uniqueKey, selectedElements: this.props.selectedElements, detailTemplateSelectedElements: this.state.openedKeys.concat(openedElements), pageSize: childNode.children.length }));
        }
        else {
            return null;
        }
    };
    Tree.prototype.render = function () {
        var _a = this.props, columns = _a.columns, openedElements = _a.openedElements, uniqueKey = _a.uniqueKey, filterOpenDetailTemplate = _a.filterOpenDetailTemplate, hideRoot = _a.hideRoot, hideChildren = _a.hideChildren;
        var roots = this.state.roots;
        if (roots.length) {
            if (hideRoot) {
                return this.renderChildrenWithoutParent(roots[0]);
            }
            else {
                return (React.createElement("div", { className: "r-Tree e-scroll-y" },
                    React.createElement(Table_1.default, { hideHeader: true, columns: columns, dataSource: roots, detailTemplate: !hideChildren ? this.renderChildren.bind(this) : null, filterOpenDetailTemplate: filterOpenDetailTemplate, hidePageSize: true, selectedKey: uniqueKey, selectedElements: this.props.selectedElements, detailTemplateSelectedElements: this.state.openedKeys.concat(openedElements), pageSize: roots.length })));
            }
        }
        else
            return null;
    };
    Tree.defaultProps = {
        parentKey: 'ParentId',
        uniqueKey: 'Id'
    };
    return Tree;
}(React.Component));
exports.default = Tree;
//# sourceMappingURL=Tree.js.map