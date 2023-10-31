import * as React from 'react';
import { IColumn } from './IColumn';
export interface ITableColumnProps {
    element?: any;
    columns?: IColumn[];
    toggleSelectedElements?: any;
    rowIsSelectable?: any;
    selectedElements?: any;
    checkable?: boolean;
    hideColumns?: Array<string>;
    onRowSelect?: (element: any, index: number | string, event?: React.MouseEvent<any>) => void;
    selectedKey?: string;
    index?: number | string;
    isArray: boolean;
    detailTemplateOpenOnRowSelect?: boolean | "single";
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateOpenAll?: any;
    detailTemplateToggleSelectedElements?: any;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;
    filterOpenDetailTemplate?: any;
    id?: any;
    disableSelectedElements?: Array<any>;
}
export default class TableRow extends React.Component<ITableColumnProps, any> {
    toggleSelectedElements(element: Array<any>, index: string | number): void;
    onRowSelect(element: Array<any>, index: string | number): void;
    render(): JSX.Element;
}
