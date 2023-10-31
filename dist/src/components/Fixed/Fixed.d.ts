import * as React from 'react';
export interface IFixedProps {
    children?: any;
}
export default class Fixed extends React.Component<IFixedProps, any> {
    refs: {
        [key: string]: (Element);
        fixedNode: (HTMLElement);
    };
    constructor(props: IFixedProps);
    componentDidMount(): void;
    handleShortcuts(): void;
    render(): JSX.Element;
}
