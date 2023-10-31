import * as React from 'react';
export interface ISlideInProps {
    if: boolean;
    fill?: boolean;
    from: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
    offset?: number;
    onClick?: () => void;
    children?: any;
    fixed?: boolean;
    beforeOpen?: () => void;
    afterOpen?: () => void;
    title?: string;
    icon?: string;
    onClose?: () => void;
    mobile?: boolean;
    flex?: boolean;
}
export default class SlideIn extends React.Component<ISlideInProps, any> {
    constructor(props: ISlideInProps);
    componentWillReceiveProps(nextProps: ISlideInProps): void;
    open(): void;
    beforeOpen(): void;
    slideIn(): void;
    afterOpen(): void;
    close(): void;
    render(): JSX.Element;
}
