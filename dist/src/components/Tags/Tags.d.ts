import * as React from 'react';
export interface ITagsProps {
    dataSource?: any;
    branchIn?: any;
    onRemove?: any;
}
export default class Tags extends React.Component<ITagsProps, any> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onRemove(item: any): void;
    render(): JSX.Element;
}
