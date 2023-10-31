import * as React from 'react';
import { IColumn } from './IColumn';
export interface ITableDataProps {
    value?: Array<any>;
    column?: IColumn;
    element?: any;
    hideColumns?: Array<string>;
    isArray?: boolean;
}
export interface ITableDataState {
    type?: string;
}
export default class TableColumn extends React.Component<ITableDataProps, ITableDataState> {
    constructor(props: ITableDataProps);
    componentDidMount(): void;
    renderType(): void;
    render(): JSX.Element;
}
