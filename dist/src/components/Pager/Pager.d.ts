import * as React from 'react';
export interface IPagerProps {
    gotoPage?: (pageNumber: number, event?: React.MouseEvent<HTMLElement>) => void;
    currentPage?: number;
    changePageSize?: (pageSizeAmount: number, event?: React.MouseEvent<HTMLElement>) => void;
    firstPage?: (event: React.MouseEvent<any>) => void;
    nextPage?: (event: React.MouseEvent<any>) => void;
    numberOfPages?: number;
    numberPerPage?: number;
    lastPage?: (event: React.MouseEvent<any>) => void;
    previousPage?: (event: React.MouseEvent<any>) => void;
    dataSource?: Array<Object>;
    pageSize?: number;
    onPageChange?: (pageNumber: number, event?: React.MouseEvent<any>) => void;
    pageSizerOptions?: Array<number>;
    hidePageSize?: boolean;
    rowCount?: number;
    showDataSourceLength?: boolean;
    hideHeader?: boolean;
    title?: string;
    pagerSize?: number;
    className?: string;
}
export default class Pager extends React.Component<IPagerProps, {}> {
    gotoPage(pageNumber: number): void;
    onSelected(pageSizeAmount: number): void;
    lastPage(numberOfPages: React.MouseEvent<any>): void;
    renderPager(page: number, pageCount: number, pagerSize: number): any[];
    render(): JSX.Element;
}
