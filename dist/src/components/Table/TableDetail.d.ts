import * as React from 'react';
import { IColumn } from './IColumn';
export interface ITableColumnDetailProps {
    element?: JSX.Element;
    columns?: Array<IColumn>;
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateOpenAll?: boolean;
    detailTemplateSelectedElements?: any;
    checkable?: boolean;
    selectedKey?: string;
}
export default class TableDetail extends React.Component<ITableColumnDetailProps, any> {
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
