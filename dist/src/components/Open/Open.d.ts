import * as React from 'react';
export interface IOpenProps {
    if: boolean;
    className?: string;
    children?: any;
    overflow?: boolean;
    fill?: boolean;
    openToHeight?: string;
}
declare class Open extends React.Component<IOpenProps, any> {
    refOpen: any;
    render(): JSX.Element;
}
export default Open;
