import { IOptions } from './types';
import { formation } from './modules/formation'
import { print } from './modules/print';


/**
 * `Display an array of objects (with the same interface) as a table in the terminal.`
 * @param data Data for console output as a table
 * @param options Object settings 
 */
export const consoleTable = <T extends object>(
    data?: T[], 
    options?: IOptions
) => {
    
    if(!data || !Array.isArray(data) || data.length === 0) return console.log('\x1b[41m%s\x1b[0m', 'No data available for the table.');

    const {
        header, 
        dashUp,
        dashCenter,
        dashBottom, 
        dashIfExistTitle,
        columnLength
    } = formation(data, options);

    print({
        dashUp, 
        dashCenter,
        dashBottom,
        dashIfExistTitle,
        data, 
        header, 
        columnLength, 
        options
    });
}


