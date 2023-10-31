import * as React from 'react';
export interface IAvatarProps {
    src?: 'string';
}
export default class Avatar extends React.Component<IAvatarProps, {}> {
    render(): JSX.Element;
}
