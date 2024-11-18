import {selectionTypeObj, signObj} from '../modules/dataForTable';

/**
 * `interface настроек отображения таблицы.`
 */
export interface IOptions<T> {
    title?: string; 
    selectionTitle?: keyof typeof selectionTypeObj;
    selectionHeader?: keyof typeof selectionTypeObj;
    isShowLine?: boolean;
    sing?:  keyof typeof signObj;
    filter?: Array<keyof T>
}

export type TObj = {
    [key in string]: number | string | any;
}

export interface IlengthColumn {
    key: keyof TObj;
    length: number;
}

export interface IPrint<T> {
    dashUp: string;
    dashCenter: string;
    dashBottom: string;
    dashIfExistTitle: string;
    header: string;
    data: TObj[];
    columnLength: IlengthColumn[];
    options?: IOptions<T>;
}

export interface IFormation {
    columnLength: IlengthColumn[];
    dashUp: string;
    dashCenter: string;
    dashBottom: string;
    dashIfExistTitle: string;
    header: string;
}

export interface IDashOption {
    start: string;
    gaps: string;
    end: string;
}

export type TDataObject<T> = {
    [key in keyof T]: string | number
}
