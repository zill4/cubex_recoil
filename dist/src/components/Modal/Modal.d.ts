import * as React from 'react';
export interface IModalProps {
    ghost?: boolean;
    open?: boolean;
    float?: boolean;
    effect?: string;
    className?: string;
    icon?: string;
    fullScreen?: boolean;
    style?: Object;
    title?: string;
    onClose?: () => void;
    children?: any;
    beforeOpen?: () => void;
    afterOpen?: () => void;
    mobile?: boolean;
    hideFullScreenButton?: boolean;
    hideCloseButton?: boolean;
    hideHeader?: boolean;
    overflow?: boolean;
    fill?: boolean;
    closeId?: string;
}
export interface IModalState {
    fullScreen?: boolean;
    open?: boolean;
    showChildren?: boolean;
}
export default class Modal extends React.Component<IModalProps, IModalState> {
    refs: {
        [key: string]: (Element);
        Modal: (HTMLInputElement);
    };
    constructor(props: IModalProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IModalProps): void;
    open(): void;
    beforeOpen(): void;
    openModal(): void;
    afterOpen(): void;
    close(): void;
    toggleFullScreen(): void;
    closeModal(): void;
    render(): JSX.Element;
}
