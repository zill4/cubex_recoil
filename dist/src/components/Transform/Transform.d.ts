import * as React from 'react';
export interface ITransformProps {
    type?: string;
    className?: string;
    if: boolean;
    push?: string;
    amount: string;
    delay?: number;
    fill?: boolean;
    axis?: string;
    children?: any;
    flex?: boolean;
}
export default class Transform extends React.Component<ITransformProps, {}> {
    render(): JSX.Element;
}
