import * as React from 'react';
export interface IDatePickerProps {
    mask?: string;
    time?: Date | string;
    onSelect?: (date: Date) => void;
    mobile?: boolean;
}
export default class TimePicker extends React.Component<IDatePickerProps, any> {
    constructor(props: IDatePickerProps);
    onSelect: (time: any) => void;
    onChange: (value: any) => void;
    render(): JSX.Element;
}
