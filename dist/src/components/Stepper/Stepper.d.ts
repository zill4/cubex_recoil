import * as React from 'react';
export interface IStepperProps {
    title?: string;
    className?: string;
    stepIndex: number;
    children?: any;
    vertical?: boolean;
}
declare class Stepper extends React.Component<IStepperProps, any> {
    refOpen: any;
    render(): JSX.Element;
}
export default Stepper;
