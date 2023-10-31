import * as React from 'react';
export type NotificationType = 'success' | 'primary' | 'error' | 'default';
export interface INotificationItem {
    title: string;
    type?: NotificationType;
    id?: number;
}
export interface INotificationProps {
    item: INotificationItem;
}
export interface INotificationState {
    view?: 'visible' | 'hiding' | 'removed';
}
export interface INotificationsProps {
    dataSource: INotificationItem[];
    className: string;
}
export interface INotificationsState {
}
export default class Notifications extends React.Component<INotificationsProps, INotificationsState> {
    render(): JSX.Element;
}
