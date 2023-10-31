import * as React from 'react';
export interface ITreeItem<T, U> {
    item: T;
    Id: U;
    parentId: U;
    children: T[];
}
export interface ITreeItemHash<T> {
    [index: string]: ITreeItem<T, any>;
}
export interface ITreeProps {
    dataSource?: any;
    columns?: any;
    parentKey?: string;
    uniqueKey?: string;
    selectedElements?: Array<any>;
    openedElements?: Array<any>;
    selectedKey?: string;
    onRowSelect?: any;
    filterOpenDetailTemplate?: any;
    onMount?: any;
    parentId?: any;
    hideRoot?: boolean;
    hideChildren?: boolean;
}
export interface ITreeState {
    treeItems?: ITreeItem<any, any>[];
    treeItemHash?: ITreeItemHash<any>;
    roots?: ITreeItem<any, any>[];
    openedKeys?: string[];
}
export default class Tree extends React.Component<ITreeProps, ITreeState> {
    static defaultProps: {
        parentKey: string;
        uniqueKey: string;
    };
    constructor(props: ITreeProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ITreeProps): void;
    initArray<T>(dataSource: Array<T>, bool: boolean): void;
    updateRoots(): void;
    openSelectedElements(selectedElements: Array<any>): void;
    openedElements(selectedElements: Array<any>): void;
    renderChildren(childNode: any): JSX.Element;
    renderChildrenWithoutParent(childNode: any): JSX.Element;
    render(): JSX.Element;
}
