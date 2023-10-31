import * as React from 'react';
import { IPagerProps } from '../Pager/Pager';
export interface ITableFooterProps extends IPagerProps {
}
export default class TableFooter extends React.Component<ITableFooterProps, {}> {
    render(): JSX.Element;
}
