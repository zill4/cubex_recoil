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
var Utils_1 = require("../Utils");
var Emerge_1 = require("../Emerge/Emerge");
var Toolbar_1 = require("../Toolbar/Toolbar");
var Button_1 = require("../Button/Button");
var DataSource = function (Component) { var _a; return _a = (function (_super) {
        __extends(Enhance, _super);
        function Enhance(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                dataSource: [],
                isArray: false,
                columns: [],
                activeRows: [],
                pageSize: props.pageSize || 10,
                page: props.page || 0,
                numberOfPages: 0,
                numberPerPage: 0,
                detailTemplateSelectedElements: props.detailTemplateSelectedElements || [],
                selectedElements: props.selectedElements || [],
                searchTerm: '',
                searchedItems: [],
                sortType: props.sortType || "asc",
                sortKey: props.sortKey || null
            };
            return _this;
        }
        Enhance.prototype.componentWillReceiveProps = function (nextProps) {
            var dataSource = nextProps.dataSource, sortKey = nextProps.sortKey;
            this.setState({
                page: nextProps.page !== this.props.page ? nextProps.page : this.state.page,
                pageSize: nextProps.pageSize !== this.props.pageSize ? nextProps.pageSize : this.state.pageSize,
                rowCount: nextProps.rowCount !== this.props.rowCount ? nextProps.rowCount : this.state.rowCount,
            });
            if (nextProps.selectedElements) {
                this.setState({
                    selectedElements: nextProps.selectedElements
                });
            }
            if (nextProps.detailTemplateSelectedElements) {
                this.setState({
                    detailTemplateSelectedElements: nextProps.detailTemplateSelectedElements
                });
            }
            if (sortKey) {
                this.sortDataSource(dataSource, this.state.sortType, sortKey);
            }
            else {
                if (nextProps.dataSource && !nextProps.page) {
                    dataSource.length ? this.loadDataSource(dataSource) : this.loadDataSource([]);
                }
                else {
                    dataSource.length ? this.loadDataSource(dataSource) : this.loadDataSource([]);
                }
            }
            if (nextProps.searchValue !== this.props.searchValue) {
                this.filterItems(nextProps.searchValue, nextProps.searchableKeys);
            }
        };
        Enhance.prototype.componentDidMount = function () {
            var self = this;
            var props = self.props;
            var dataSource = props.dataSource;
            dataSource && Object.keys(dataSource).length || dataSource && dataSource.length ? self.loadDataSource(dataSource) : self.loadDataSource([]);
        };
        Enhance.prototype.loadDataSource = function (dataSource) {
            var _this = this;
            var self = this;
            var dataSourceIsObject = typeof dataSource === 'object';
            var dataSourceIsArray = dataSource instanceof Array;
            var dataSourceIsArrayOfStingsOrNumbers = typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number';
            var updatedDataSource = [];
            var sortKey = this.props.sortKey;
            var sortType = this.state.sortType;
            var setDataSourceState = function (dataSource, isArray) {
                updatedDataSource = dataSource;
                self.setState({
                    dataSource: dataSource,
                    isArray: isArray
                }, function () {
                    _this.defineColumns(dataSource);
                    if (sortKey && sortType) {
                        self.sortDataSource(dataSource, sortType, sortKey);
                    }
                    else {
                        self.renderActiveRows(dataSource);
                    }
                });
            };
            if (dataSourceIsArray) {
                if (dataSourceIsArrayOfStingsOrNumbers) {
                    var newDataSource_1 = [];
                    dataSource.forEach(function (element) {
                        newDataSource_1.push(element);
                    });
                    setDataSourceState(newDataSource_1, true);
                }
                else {
                    setDataSourceState(dataSource, false);
                }
            }
            else if (dataSourceIsObject) {
                setDataSourceState([dataSource], false);
            }
            else {
                setDataSourceState(dataSource, false);
            }
        };
        Enhance.prototype.sortDataSource = function (dataSource, sortType, sortKey) {
            var self = this;
            var _b = self.state, searchedItems = _b.searchedItems, searchTerm = _b.searchTerm;
            var sortOrderSearchedItems;
            var sortOrderDataSource;
            var sort = function (dataSource) {
                return dataSource.sort(function (a, b) {
                    var aKey = (0, Utils_1.branchIn)(a, sortKey);
                    var bKey = (0, Utils_1.branchIn)(b, sortKey);
                    switch (typeof aKey) {
                        case ('string'):
                            var itemPrev = aKey && aKey.toLowerCase();
                            var itemNext = bKey && bKey.toLowerCase();
                            if (itemPrev < itemNext)
                                return -1;
                            if (itemPrev > itemNext)
                                return 1;
                            break;
                        case ('number'):
                            return aKey - bKey;
                        default:
                            return null;
                    }
                    return null;
                });
            };
            if (sortType === 'asc') {
                sortOrderDataSource = sort(dataSource);
                sortOrderSearchedItems = sort(searchedItems);
            }
            else {
                sortOrderDataSource = sort(dataSource).reverse();
                sortOrderSearchedItems = sort(searchedItems).reverse();
            }
            if (searchTerm !== '') {
                self.setState({
                    dataSource: sortOrderDataSource,
                    searchedItems: sortOrderSearchedItems
                }, function () {
                    self.renderActiveRows(sortOrderSearchedItems);
                });
            }
            else {
                self.setState({
                    dataSource: sortOrderDataSource,
                }, function () {
                    self.renderActiveRows(sortOrderDataSource);
                });
            }
        };
        Enhance.prototype.defineColumns = function (dataSource) {
            var self = this;
            var props = self.props;
            var state = self.state;
            var columns = props.columns;
            var isArray = state.isArray;
            var columnsArray;
            if (dataSource.length > 0) {
                if (columns) {
                    columnsArray = columns;
                }
                else {
                    columnsArray = [];
                    if (isArray) {
                        columnsArray.push({ name: '_Array' });
                    }
                    else {
                        Object.keys(dataSource[0]).map(function (key) {
                            columnsArray.push({ name: key });
                        });
                    }
                }
            }
            this.setState({
                columns: columnsArray
            });
        };
        Enhance.prototype.renderActiveRows = function (dataSource) {
            var self = this;
            var props = self.props;
            var rowCount = props.rowCount;
            var activeRows = [];
            var numberPerPage, numberOfPages, renderedPage;
            var _b = self.state, page = _b.page, pageSize = _b.pageSize;
            if (this.state.searchTerm !== '') {
                renderedPage = this.state.searchedItems;
            }
            else {
                renderedPage = dataSource;
            }
            if (rowCount) {
                numberPerPage = pageSize;
                numberOfPages = Math.ceil(rowCount / pageSize);
            }
            else {
                numberPerPage = pageSize;
                numberOfPages = Math.ceil(renderedPage.length / (pageSize));
            }
            this.setState({
                numberPerPage: numberPerPage,
                numberOfPages: numberOfPages
            });
            var begin = ((page) * parseInt(numberPerPage));
            var end = begin + parseInt(numberPerPage);
            var pageList = renderedPage.slice(begin, end);
            pageList.map(function (item) {
                activeRows.push(item);
            });
            this.setState({
                activeRows: activeRows
            });
        };
        Enhance.prototype.detailTemplateToggleAll = function (dataSource) {
            var detailTemplateSelectedElements = this.state.detailTemplateSelectedElements;
            this.setState({
                detailTemplateSelectedElements: (0, Utils_1.arraysEqual)(dataSource, detailTemplateSelectedElements) ? [] : dataSource
            });
        };
        Enhance.prototype.detailTemplateToggleSelectedElements = function (element) {
            var self = this;
            var _b = this.props, detailTemplateOpenOnRowSelect = _b.detailTemplateOpenOnRowSelect, selectedKey = _b.selectedKey;
            var detailTemplateSelectedElements = self.state.detailTemplateSelectedElements;
            var selectedElementsArray;
            var setSelectedElementsState = function (data) {
                self.setState({
                    detailTemplateSelectedElements: data
                });
            };
            if (detailTemplateOpenOnRowSelect === 'single') {
                selectedElementsArray = detailTemplateSelectedElements.length ? [detailTemplateSelectedElements[0]] : [];
                self.props.detailTemplateOnOpen ? self.props.detailTemplateOnOpen(element) : null;
            }
            else {
                selectedElementsArray = detailTemplateSelectedElements.slice();
            }
            if (selectedElementsArray.includes(selectedKey ? element[selectedKey] : element)) {
                selectedElementsArray.map(function (data, key) {
                    if (data === selectedKey ? element[selectedKey] : element) {
                        selectedElementsArray.splice(key, 1);
                        setSelectedElementsState(selectedElementsArray);
                    }
                });
            }
            else {
                if (detailTemplateOpenOnRowSelect === 'single') {
                    selectedElementsArray = [];
                    selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
                    setSelectedElementsState(selectedElementsArray);
                }
                else {
                    selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
                    setSelectedElementsState(selectedElementsArray);
                }
            }
        };
        Enhance.prototype.selectAll = function (dataSource) {
            var selectedElements = this.state.selectedElements;
            this.setState({
                selectedElements: (0, Utils_1.arraysEqual)(dataSource, selectedElements) ? [] : dataSource
            });
        };
        Enhance.prototype.toggleSelectedElements = function (element, index) {
            var _this = this;
            var self = this;
            var selectedElements = self.state.selectedElements;
            var _b = self.props, rowIsSelectable = _b.rowIsSelectable, onCheck = _b.onCheck, selectedKey = _b.selectedKey;
            var selectedElement = selectedKey ? element[selectedKey] : element;
            var selectedElementsArray;
            if (rowIsSelectable === 'single') {
                selectedElementsArray = [];
            }
            else {
                selectedElementsArray = selectedElements.slice();
            }
            if (selectedElementsArray.includes(selectedElement)) {
                for (var i = 0; i < selectedElementsArray.length; i++) {
                    if (selectedElementsArray[i] === (selectedElement)) {
                        selectedElementsArray.splice(i, 1);
                        self.setState({
                            selectedElements: selectedElementsArray
                        }, function () {
                            _this.props.onRowSelect ? _this.props.onRowSelect(element, index, selectedElementsArray) : null;
                        });
                    }
                }
            }
            else {
                selectedElementsArray.push(selectedElement);
                self.setState({
                    selectedElements: selectedElementsArray
                }, function () {
                    _this.props.onRowSelect ? _this.props.onRowSelect(element, index, selectedElementsArray) : null;
                });
                onCheck ? onCheck(selectedElement) : null;
            }
        };
        Enhance.prototype.firstPage = function () {
            var _this = this;
            this.setState({
                page: 0
            }, function () {
                _this.renderActiveRows(_this.state.dataSource);
            });
            this.props.onPageChange ? this.props.onPageChange(0) : null;
        };
        Enhance.prototype.previousPage = function () {
            var _this = this;
            var pageNumber = this.state.page;
            this.props.onPageChange ? this.props.onPageChange(this.state.page - 1) : null;
            if (!this.props.serverSide) {
                this.setState({
                    page: pageNumber -= 1
                }, function () {
                    _this.renderActiveRows(_this.state.dataSource);
                });
            }
        };
        Enhance.prototype.nextPage = function () {
            var _this = this;
            var pageNumber = this.state.page;
            this.setState({
                page: pageNumber += 1
            }, function () {
                _this.renderActiveRows(_this.state.dataSource);
                _this.props.onPageChange ? _this.props.onPageChange(_this.state.page) : null;
            });
        };
        Enhance.prototype.lastPage = function (numberOfPages) {
            var _this = this;
            this.setState({
                page: numberOfPages - 1
            }, function () {
                _this.renderActiveRows(_this.state.dataSource);
            });
            this.props.onPageChange ? this.props.onPageChange(numberOfPages - 1) : null;
        };
        Enhance.prototype.gotoPage = function (i) {
            var _this = this;
            this.setState({
                page: i,
                pageSize: this.state.pageSize,
            }, function () {
                _this.renderActiveRows(_this.state.dataSource);
            });
        };
        Enhance.prototype.changePageSize = function (pageSize) {
            var _this = this;
            this.setState({
                pageSize: pageSize,
                page: 0
            }, function () {
                _this.renderActiveRows(_this.state.dataSource);
            });
            this.props.onPageSizeChange ? this.props.onPageSizeChange(pageSize) : null;
        };
        Enhance.prototype.sortCollection = function (dataSource, key, sortType) {
            var self = this;
            var sortKey = this.props.sortKey ? this.props.sortKey : key;
            self.setState({
                sortKey: sortKey,
                sortType: sortType
            }, function () {
                self.sortDataSource(dataSource, sortType, sortKey);
            });
        };
        Enhance.prototype.toggleSorting = function (dataSource, key, sortType) {
            var self = this;
            self.sortCollection(dataSource, key, sortType);
        };
        Enhance.prototype.filterItems = function (term, keys) {
            var self = this;
            var state = self.state;
            self.setState({
                searchedItems: (0, Utils_1.search)(state.dataSource, term, keys, self.props.searchFilter),
                searchTerm: term,
                page: 0
            }, function () {
                self.renderActiveRows(state.dataSource);
            });
        };
        Enhance.prototype.render = function () {
            var self = this;
            var props = self.props;
            var _b = self.state, columns = _b.columns, dataSource = _b.dataSource, activeRows = _b.activeRows;
            var renderedObject = {
                gotoPage: this.gotoPage.bind(this),
                previousPage: this.previousPage.bind(this),
                nextPage: this.nextPage.bind(this),
                lastPage: this.lastPage.bind(this),
                firstPage: this.firstPage.bind(this),
                changePageSize: this.changePageSize.bind(this),
                detailTemplateToggleSelectedElements: this.detailTemplateToggleSelectedElements.bind(this),
                detailTemplateToggleAll: this.detailTemplateToggleAll.bind(this),
                selectAll: this.selectAll.bind(this),
                toggleSelectedElements: this.toggleSelectedElements.bind(this),
                sortCollection: this.sortCollection.bind(this),
                toggleSorting: this.toggleSorting.bind(this),
                filterItems: this.filterItems.bind(this),
            };
            if (props.loading) {
                return (React.createElement(Emerge_1.default, { className: "e-fill" },
                    React.createElement(Toolbar_1.default, { block: true, textCenter: true },
                        React.createElement(Button_1.default, { loading: true, block: true, size: "large", simple: true }, props.loadingText))));
            }
            else if ((activeRows.length || dataSource.length) && columns && columns.length) {
                var newProps = Object.assign({}, props, self.state, renderedObject);
                var updatedComponent = React.cloneElement(Component, newProps, Component.props);
                return dataSource.length ? updatedComponent : Component;
            }
            else {
                return (React.createElement(Emerge_1.default, { className: "e-fill" },
                    React.createElement(Toolbar_1.default, { block: true, textCenter: true },
                        React.createElement(Button_1.default, { block: true, size: "large", simple: true }, props.emptyText))));
            }
        };
        return Enhance;
    }(React.Component)),
    _a.defaultProps = {
        emptyText: 'dataSource is empty'
    },
    _a; };
exports.default = DataSource;
//# sourceMappingURL=DataSource.js.map