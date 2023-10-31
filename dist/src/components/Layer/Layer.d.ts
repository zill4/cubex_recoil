import * as React from 'react';
import { IRecoil } from '../../index';
export interface ILayerProps extends IRecoil {
    border?: boolean;
    overflow?: boolean;
    left?: boolean;
    right?: boolean;
    scrollY?: boolean;
    scrollX?: boolean;
    style?: Object;
    onClick?: () => void;
    key?: string | number;
    parent?: boolean;
    child?: boolean;
    dimensions?: [string, string, number];
    scrollToId?: string;
    beforeAnimate?: () => void;
    afterAnimate?: () => void;
    nightmode?: boolean;
    scrollIf?: boolean;
    scroll?: boolean;
    offset?: number;
    shadow?: boolean;
    flex?: boolean;
    flexCenter?: boolean;
    onScroll?: any;
    id?: string;
    children?: React.ReactNode;
}
export declare class Layer extends React.Component<ILayerProps, any> {
    _animate: any;
    _beforeAnimate: () => void;
    _afterAnimate: () => void;
    _scrollToId: string;
    refs: {
        [key: string]: (Element);
        Layer: (HTMLElement);
    };
    static defaultProps: {
        overflow: boolean;
        type: string;
        left: boolean;
        right: boolean;
        border: string;
        scrollIf: boolean;
        flexCenter: boolean;
    };
    constructor(props: ILayerProps);
    componentWillReceiveProps(nextProps: ILayerProps): void;
    componentDidMount(): void;
    canLayerAnimateScroll(props: ILayerProps): void;
    handleScroll: (to: string, top: number) => void;
    animateScroll(animate: {
        duration: number;
    }, top: number): void;
    scrollTo(duration: number, top: number): void;
    animateScrolling(duration: number, top: number): void;
    setScrolling(x: number, y: number): void;
    easeOutQuad(t: number, b: number, c: number, d: number): number;
    getScrollTop(): number;
    setScrollTop(position: number): void;
    getOffsetTop(element: HTMLElement): number;
    getScrollLeft(): number;
    setScrollLeft(position: number): void;
    getOffsetLeft(element: HTMLElement): number;
    render(): JSX.Element;
}
declare const _default: {
    new (props: any): {
        styleObject: any[];
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: any): void;
        convertClassToStyle(classNames: any, currentClassIndex?: number): any;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<any>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
