import * as React from 'react';
export interface ICalendarProps {
    date?: Date;
    onSelect?: (date: Date) => any;
    calendarHeight?: string;
    inDropdown?: boolean;
    selectedDay?: Date;
    selectTime?: boolean;
    mobile?: boolean;
}
export interface ICalendarState {
    month?: number;
    year?: number;
    date?: Date;
    selectedDay?: Date;
    hour?: any;
    minute?: any;
    period?: string;
}
export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    static defaultProps: {
        calendarHeight: string;
        inDropdown: boolean;
        date: Date;
        selectTime: boolean;
    };
    constructor(props?: ICalendarProps);
    componentWillReceiveProps(nextProps: ICalendarProps): void;
    increaseMonth: () => void;
    selectMonth: (...Args: Array<any>) => void;
    decreaseMonth: () => void;
    increaseYear: () => void;
    selectYear: (year: number) => void;
    decreaseYear: () => void;
    selectDay(day: any): void;
    getDays(year: number, month: number): Date[];
    getWeeks(year: number, month: number): Date[][];
    selectHour(hour: any): void;
    selectMinute(min: any): void;
    SelectPeriod(period: any): void;
    render(): JSX.Element;
}
