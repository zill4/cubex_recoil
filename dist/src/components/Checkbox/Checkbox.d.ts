import * as React from 'react';
import { IRecoil } from '../../index';
export interface ICheckboxProps extends IRecoil {
    icon?: string;
    onChange?: (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
    title?: string;
    loading?: boolean;
}
export interface ICheckboxState {
    checked?: boolean;
}
export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps);
    toggleChecked(): void;
    notchecked(): void;
    checked(): void;
    componentWillReceiveProps(nextProps: ICheckboxProps): void;
    render(): JSX.Element;
}
