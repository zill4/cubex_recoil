import * as React from 'react';
export interface IAlignProps {
    vertical?: boolean;
    className?: string;
    columns?: Array<number>;
    margin?: string;
    children?: any;
    fill?: boolean;
    style?: any;
}
export interface IAlignChildProps {
    columns?: Array<number>;
    vertical?: boolean;
    width?: number;
    element?: JSX.Element;
    margin?: string;
}
export interface IAlignState {
    widthArray?: Array<number>;
    maxColumnsLength?: number;
}
export default class Align extends React.Component<IAlignProps, IAlignState> {
    constructor(props: IAlignProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IAlignProps): void;
    alignUpdate(widthArray: Array<number>, singleColumnLength: number, maxColumnsLength: number): void;
    alignColumns(columns: Array<number>): void;
    alignChildren(element: JSX.Element, key: string): JSX.Element;
    render(): JSX.Element;
}
