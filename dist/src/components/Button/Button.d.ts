import * as React from 'react';
import { IRecoil } from '../../index';
export interface IButtonProps extends IRecoil {
    progressiveClick?: Array<Function>;
    style?: Object;
    onClick?: (event: React.MouseEvent<any>) => void;
    pointer?: 'left' | 'right' | boolean;
    iconPointer?: 'left' | 'right' | 'up' | 'down';
    iconLocation?: 'left' | 'right';
    checkedTheme?: 'primary' | 'success' | 'error' | 'default';
    icon?: string;
    href?: string;
    target?: string;
    block?: boolean;
    strech?: boolean;
    right?: boolean;
    left?: boolean;
    submit?: boolean;
    advanced?: boolean;
    ghost?: boolean;
    required?: boolean;
    id?: string;
    shortcut?: string;
    materialIcon?: boolean;
}
export interface IButtonState {
    checked?: boolean;
    progressiveClickIndex?: number;
    progressiveClickLength?: number;
    clickCounter?: number;
    showShortcut?: boolean;
}
export default class Button extends React.Component<IButtonProps, IButtonState> {
    refs: {
        [key: string]: (Element);
        button: (HTMLButtonElement);
    };
    static defaultProps: {
        disabled: boolean;
        block: boolean;
        advanced: boolean;
        iconLocation: string;
        scrollDuration: number;
        scrollOffset: number;
    };
    constructor(props: IButtonProps);
    componentDidMount(): void;
    onClick(event: React.MouseEvent<MouseEvent>): void;
    progressiveClick(): void;
    startShortcutListener(e: any): void;
    render(): JSX.Element;
}
