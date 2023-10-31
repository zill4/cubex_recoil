import * as React from 'react';
import { IRecoil } from '../../index';
export interface IToolbarProps extends IRecoil {
    border?: boolean;
    vertical?: boolean;
    textCenter?: boolean;
    noRadius?: boolean;
    spacing?: boolean;
    block?: boolean;
    left?: boolean;
    right?: boolean;
    style?: Object;
    flush?: boolean;
    noBorder?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    tabs?: boolean;
    breadcrumbs?: boolean;
    id?: string;
    form?: boolean;
}
export default class Toolbar extends React.Component<IToolbarProps, {}> {
    render(): JSX.Element;
}
