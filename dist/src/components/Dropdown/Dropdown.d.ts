import * as React from 'react';
import { IButtonProps } from '../Button/Button';
import { ITableProps } from '../Table/Table';
export interface IDropdownProps extends IButtonProps, ITableProps {
    title?: string;
    type?: string;
    material?: boolean;
    dropDirection?: string;
    onChange?: (element?: Array<Object>, key?: string | number, selectedElements?: Array<Object>, id?: string) => void;
    fixedClose?: boolean;
    mobile?: boolean;
    open?: boolean;
    onOpen?: (boolean: boolean) => void;
    onClose?: (boolean: boolean) => void;
    hideDropdownHeader?: boolean;
    titleKey?: string;
    disabled?: boolean;
    parentId?: any;
    hideRoot?: boolean;
    tagSelected?: boolean;
}
export interface State {
    open?: boolean;
}
export default class Dropdown extends React.Component<IDropdownProps, any> {
    refs: {
        [key: string]: (Element);
        dropdown: (HTMLInputElement);
    };
    static defaultProps: {
        type: string;
        contentMaxHeight: number;
        material: boolean;
        hideFooter: boolean;
    };
    constructor(props: IDropdownProps);
    componentWillReceiveProps(nextProps: IDropdownProps): void;
    closeDropdown(): void;
    openDropdown(): void;
    onRowSelect(element: Array<any>, index: string | number, selectedElements: Array<any>, id: string): void;
    removeSelectedItem(item: any): void;
    render(): JSX.Element;
}
