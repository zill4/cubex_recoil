import * as React from 'react';
export interface IEmergeProps {
    if?: boolean;
    enter?: string;
    exit?: string;
    delay?: number;
    overflow?: boolean;
    className?: string;
    style?: Array<string>;
    children?: React.ReactNode;
}
export default class Emerge extends React.Component<IEmergeProps, {}> {
    static defaultProps: {
        if: boolean;
        enter: string;
        exit: string;
        delay: number;
        overflow: boolean;
    };
    render(): JSX.Element;
}
