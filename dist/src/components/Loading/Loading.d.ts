import * as React from 'react';
import { IRecoil } from '../../index';
export interface ILoadingProps extends IRecoil {
    children?: any;
    if?: boolean;
    src?: string;
    title?: string;
    width?: number;
    height?: number;
    icon?: string;
}
export interface ILoadingState {
}
export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
    state: ILoadingState;
    constructor(props: ILoadingProps);
    render(): JSX.Element;
}
