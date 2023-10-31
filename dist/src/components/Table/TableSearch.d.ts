import * as React from 'react';
export default class TableSearch extends React.Component<any, any> {
    _throttleTimeout: any;
    static defaultProps: {
        active: boolean;
        className: string;
        disabled: boolean;
        block: boolean;
        simple: boolean;
        throttle: number;
        iconLocation: string;
        onChange(): void;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    updateSearch(term: string): void;
    render(): JSX.Element;
}
