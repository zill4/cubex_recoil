import * as React from 'react';
import { IColumn } from './IColumn';
export interface ITableHeadProps {
    toggleSorting?: (dataSource: any, key: string, sortType: any) => void;
    detailTemplateToggleAll?: (dataSource: any) => void;
    selectAll?: (dataSource: any) => void;
    dataSource: Array<any> | Object;
    columns?: Array<IColumn>;
    hideHeader?: boolean;
    hideColumns?: any;
    checkable?: boolean;
    onSort?: Function;
    selectedElements?: Array<any>;
    sortable?: boolean;
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;
    sortKey?: any;
    hideCheckAll?: boolean;
    sortType?: string;
}
export default class TableHead extends React.Component<ITableHeadProps, any> {
    constructor(props: ITableHeadProps);
    toggleSorting(dataSource: Array<any>, columnName: string): void;
    render(): JSX.Element;
}
