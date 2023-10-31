import * as React from 'react';
import { IColumn } from './IColumn';
export interface TableBodyProps {
    id?: string;
    portal?: boolean;
    activeRows: any;
    dataSource: Array<any> | Object;
    columns?: Array<IColumn>;
    detailTemplate?: (element: Array<any>) => JSX.Element;
    selectedElements?: Array<any>;
    detailTemplateOpenAll?: boolean;
    detailTemplateToggleSelectedElements?: boolean;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;
    toggleSelectedElements?: Array<any>;
    rowIsSelectable?: boolean | string;
    checkable?: boolean;
    hideColumns?: Array<any>;
    onRowSelect?: (element?: Array<any>, key?: string | number, selectedElements?: Array<any> | Object, id?: string | number) => void;
    isArray?: boolean;
    detailTemplateOpenOnRowSelect?: boolean | "single";
    selectedKey?: string;
    filterRow?: (item: Object) => void;
    filterOpenDetailTemplate?: (item: Object) => void;
    serverSide?: boolean;
    disableSelectedElements?: Array<any>;
}
export default class TableBody extends React.Component<TableBodyProps, any> {
    render(): JSX.Element;
}
