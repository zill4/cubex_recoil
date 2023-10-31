import * as React from 'react';
export interface IRecoilProps {
    nightmode?: boolean;
    className?: string;
    overflow?: boolean;
    mobile?: boolean;
    scroll?: boolean;
    scrollX?: boolean;
    scrollY?: boolean;
    onMobile?: any;
    children?: React.ReactNode;
}
export default class Recoil extends React.Component<IRecoilProps, any> {
    refs: any;
    constructor(props: IRecoilProps);
    componentDidMount(): void;
    detectMobile(): void;
    componentWillReceiveProps(nextProps: IRecoilProps): void;
    isMobile(mobile: boolean): void;
    render(): JSX.Element;
}
