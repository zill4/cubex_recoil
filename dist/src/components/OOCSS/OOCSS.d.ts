import * as React from 'react';
export interface ExternalProps {
    oocss?: string;
}
export interface InjectedProps {
    style?: Object;
    oocss?: any;
}
export interface Options {
    key?: string;
}
export declare const OOCSS: () => (Component: any) => {
    new (props: any): {
        styleObject: Array<any>;
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
