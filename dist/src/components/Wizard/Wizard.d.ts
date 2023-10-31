import * as React from 'react';
export interface IWizardProps {
    slideIndex: number;
    children?: any;
    vertical?: boolean;
    className?: string;
    style?: Object;
    mobile?: boolean;
    animate?: boolean;
    fill?: boolean;
    overflow?: boolean;
    flex?: boolean;
    paginate?: boolean;
}
export default class Wizard extends React.Component<IWizardProps, any> {
    static defaultProps: {
        slideIndex: number;
    };
    constructor(props: IWizardProps);
    componentWillReceiveProps(nextProps: IWizardProps): void;
    gotoSlideIndex(slideIndex: number): void;
    render(): any;
}
