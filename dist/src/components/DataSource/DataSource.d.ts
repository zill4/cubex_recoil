import { ITableProps } from '../Table/Table';
import { IColumn } from './IColumn';
export interface IDataSourceProps extends ITableProps {
    dataSource?: Array<Object> | Array<number> | Array<string>;
    columns?: Array<IColumn>;
    emptyText: string;
    loading?: boolean;
    loadingText?: string;
}
declare const DataSource: any;
export default DataSource;
