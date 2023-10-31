import * as React from 'react';
export interface IPortalProps {
    portalId?: string;
    portal?: JSX.Element;
    open?: boolean;
    onClose?: () => void;
    title?: string;
    icon?: string;
    portalType?: string;
    children?: React.ReactNode;
}
export default class Portal extends React.Component<IPortalProps, any> {
    static defaultProps: {
        portalType: string;
    };
    portalElement: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
