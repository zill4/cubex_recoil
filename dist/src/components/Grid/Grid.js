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
var Layer_1 = require("../Layer/Layer");
var Selectable_1 = require("../Selectable/Selectable");
var DataSource_1 = require("../DataSource/DataSource");
var Align_1 = require("../Align/Align");
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rows: props.rows || null,
            gridRows: [],
            update: false,
            selectedElements: props.selectedElements || []
        };
        return _this;
    }
    Grid.prototype.componentDidMount = function () {
        this.convertDataSourceToGridRows(this.props.rows);
    };
    Grid.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.selectedElements !== this.state.selectedElements) {
            this.setState({
                selectedElements: nextProps.selectedElements
            });
        }
        if (nextProps.rows !== this.props.rows) {
            this.setState({
                update: false,
                rows: nextProps.rows
            }, function () {
                _this.convertDataSourceToGridRows(_this.state.rows);
            });
        }
    };
    Grid.prototype.convertDataSourceToGridRows = function (r, index, indexRow, indexColumn, currentArray, arrayIndex) {
        var _a = this.props, activeRows = _a.activeRows, rows = _a.rows;
        var array = currentArray || [];
        var arrayRowIndex = arrayIndex || 0;
        var currentElementIndex = index || 0;
        var currentRowIndex = indexRow || 0;
        var currentColumnIndex = indexColumn || 0;
        var elements = activeRows;
        var totalElementCount = elements.length;
        var currentElement = elements[currentElementIndex];
        var totalRowsCount = rows.length;
        var currentRow = rows[currentRowIndex];
        var columns = currentRow.columns;
        var totalColumnsCount = currentRow.columns.length;
        var currentColumn = columns[currentColumnIndex];
        if (currentElementIndex < totalElementCount) {
            if (currentColumnIndex === 0 && currentColumnIndex < totalColumnsCount) {
                array.push({
                    data: [],
                    height: currentRow.height,
                    columns: columns,
                    rowIndex: [currentRowIndex]
                });
                array[arrayRowIndex].data.push(currentElement);
                this.convertDataSourceToGridRows(rows, currentElementIndex + 1, currentRowIndex, currentColumnIndex + 1, array, arrayRowIndex);
            }
            else if (currentColumnIndex < totalColumnsCount) {
                array[arrayRowIndex].data.push(currentElement);
                this.convertDataSourceToGridRows(rows, currentElementIndex + 1, currentRowIndex, currentColumnIndex + 1, array, arrayRowIndex);
            }
            else {
                if (currentRowIndex < totalRowsCount - 1) {
                    this.convertDataSourceToGridRows(rows, currentElementIndex, currentRowIndex + 1, 0, array, arrayRowIndex + 1);
                }
                else {
                    this.convertDataSourceToGridRows(rows, currentElementIndex, 0, 0, array, arrayRowIndex + 1);
                }
            }
        }
        else {
            this.setState({
                gridRows: array,
                update: false
            });
        }
    };
    Grid.prototype.toggleSelectedElements = function (element, i) {
        this.props.onChange ? this.props.onChange(element) : null;
        this.onChange(element, i, this.state.selectedElements);
    };
    Grid.prototype.onChange = function (element, index, selectedElements) {
        this.setState({
            selectedElements: selectedElements
        });
    };
    Grid.prototype.render = function () {
        var _this = this;
        var selectedKey = this.props.selectedKey;
        var selectedElements = this.state.selectedElements;
        if (!this.state.update) {
            return (React.createElement(Layer_1.default, { flex: true, fill: true, className: this.props.className }, this.state.gridRows.map(function (element, index) {
                return (React.createElement(Align_1.default, { margin: _this.props.margin, style: { height: element.height, marginBottom: _this.props.margin }, columns: element.columns, key: index }, element.data.map(function (item, i) {
                    var checked = selectedElements.includes(selectedKey ? item[selectedKey] : item);
                    return (React.createElement(Layer_1.default, { className: _this.props.onChange ? 'cursor-pointer' : null, onClick: _this.toggleSelectedElements.bind(_this, item, i), fill: true, key: i },
                        _this.state.rows[element.rowIndex].template(item),
                        React.createElement(Selectable_1.default, { checked: checked })));
                })));
            })));
        }
        else
            return null;
    };
    return Grid;
}(React.Component));
exports.default = (0, DataSource_1.default)(React.createElement(Grid, null));
//# sourceMappingURL=Grid.js.map