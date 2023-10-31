import * as React from 'react';
export interface ITutorialViewProps {
    description: string;
    Id: string;
    toggleModal?: any;
    examples?: any;
    columnData: any;
    video?: any;
    mobile?: boolean;
    scrollIf: boolean;
    scrollToId: string;
}
export default class TutorialView extends React.Component<ITutorialViewProps, any> {
    constructor(props: ITutorialViewProps);
    toggleShowProps(): void;
    toggleShowVideo(): void;
    openModal(): void;
    closeModal(): void;
    detailTemplate(item: any): JSX.Element;
    render(): JSX.Element;
}
