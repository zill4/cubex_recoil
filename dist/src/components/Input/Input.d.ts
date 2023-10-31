import * as React from 'react';
import { IRecoil } from '../../index';
export interface IInputProps extends IRecoil {
    id?: string;
    ref?: string;
    type?: string;
    icon?: string;
    title?: string;
    placeholder?: string;
    value?: string | string[];
    defaultValue?: string | string[];
    style?: Object;
    errorInline?: boolean;
    errorDirection?: "left" | "top" | "right" | "bottom";
    error?: boolean;
    errorMessage?: string | JSX.Element;
    rows?: number;
    cols?: number;
    block?: boolean;
    autoExpand?: boolean;
    onBlur?: (value: any, event: React.FormEvent<any>) => void;
    onChange?: (value: any, event: React.FormEvent<any>) => void;
    scrollHeight?: number;
    focusOnMount?: boolean;
    focusDelay?: number;
    advanced?: boolean;
    maxLength?: number;
    max?: number;
    min?: number;
    name?: string;
    required?: boolean;
    autoComplete?: string;
    disableKeys?: Array<string>;
    inputSize?: number;
    inputId?: any;
}
export interface IInputState {
    checked?: boolean;
    value?: string | string[];
    mouseOut?: boolean;
}
export default class Input extends React.Component<IInputProps, IInputState> {
    state: IInputState;
    static defaultProps: {
        advanced: boolean;
        type: string;
    };
    constructor(props: IInputProps);
    setCurrentValue(props?: Readonly<React.PropsWithChildren<IInputProps>>): string | string[];
    componentWillReceiveProps(nextProps: IInputProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    focusOnMount(): void;
    focus(e: any): void;
    blur(event: React.MouseEvent<HTMLInputElement>): void;
    mouseOut(): void;
    onChange(event: React.KeyboardEvent<HTMLInputElement>): void;
    limit(max: number): void;
    inputValue(value: string, event: React.FormEvent<any>): void;
    setValue(value: string, event: React.FormEvent<any>): void;
    disableKeys(key: string, event: any): boolean;
    onKeyDown(a: any): void;
    render(): JSX.Element;
}
