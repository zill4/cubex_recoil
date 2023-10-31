import * as React from 'react';
export interface IShrinkProps {
    if?: boolean;
    fill?: boolean;
    className?: string;
    children?: any;
    opacity?: number;
    scale?: number | string;
    position?: string;
    flex?: boolean;
}
export default class Shrink extends React.Component<IShrinkProps, {}> {
    static defaultProps: {
        opacity: number;
        scale: number;
        position: string;
    };
    render(): JSX.Element;
}
