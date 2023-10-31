import * as React from 'react';
import { IRecoil } from '../../index';
export interface IToggleProps extends IRecoil {
    name?: string;
    array?: Array<string | number>;
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    iconArray?: Array<string>;
    type?: string;
    right?: boolean;
    selected?: Array<Object>;
    value?: string | string[];
    label?: string | number;
    disabled?: boolean;
    loading?: boolean;
}
export interface IToggleState {
    checked?: boolean;
    selected?: Array<Object>;
}
export default class Toggle extends React.Component<IToggleProps, IToggleState> {
    static defaultProps: {
        checked: boolean;
    };
    constructor(props: IToggleProps);
    componentWillReceiveProps(nextProps: IToggleProps): void;
    onChange(event: React.FormEvent<any>): void;
    changeSelected(item: Array<any>): void;
    render(): JSX.Element;
}
