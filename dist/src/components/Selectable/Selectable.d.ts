import * as React from 'react';
export interface ISelectableProps {
    checked?: boolean;
    classNames?: any;
    ghost?: boolean;
    children?: any;
    type?: string;
}
declare class Selectable extends React.Component<ISelectableProps, {}> {
    static defaultProps: {
        type: string;
    };
    render(): JSX.Element;
}
export default Selectable;
