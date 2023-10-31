import * as React from 'react';
import { IDropdownProps } from '../Dropdown/Dropdown';
import Calendar, { ICalendarProps, ICalendarState } from './Calendar';
export { Calendar, ICalendarProps, ICalendarState };
export interface IDatePickerProps extends IDropdownProps {
    mask?: string;
    date?: Date | string;
    onSelect?: (date: Date) => void;
    selectTime?: boolean;
    open?: boolean;
    title?: string;
    className?: string;
    outline?: boolean;
    onClick?: () => void;
}
export default class DatePicker extends React.Component<IDatePickerProps, any> {
    constructor(props?: IDatePickerProps);
    componentWillReceiveProps(nextProps: any): void;
    onSelect: (date: Date) => void;
    toggleOpen(): void;
    toggleClose(): void;
    onOpen(boolean: any): any;
    render(): JSX.Element;
}
