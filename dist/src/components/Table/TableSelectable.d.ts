import * as React from 'react';
export interface ITableColumnSelectableProps {
    columns?: any;
    detailTemplate?: (element: any) => JSX.Element;
    selectedElements?: any;
    element?: any;
    checkable?: boolean;
    selectedKey?: string;
}
export default class TableSelectable extends React.Component<ITableColumnSelectableProps, any> {
    render(): JSX.Element;
}
