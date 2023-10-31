import * as React from 'react';
export interface P {
    children: React.ReactChild;
}
export interface S {
}
export default class Dashboard extends React.Component<P, S> {
    render(): JSX.Element;
}
