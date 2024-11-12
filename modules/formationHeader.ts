import {IlengthColumn, IOptions} from '../types';
import { selectText } from './selectText';
import { tabObj, selectionTypeObj, lines } from './dataForTable';
import { centerText } from './centerText';

/**
 * `Формирование заголовка для таблицы.`
 */
export function formationHeader(columnLength: IlengthColumn[], options: IOptions | undefined): string {
    let str: string = lines.vertical;

    columnLength.forEach(item => {

        let bodyText: string = '';
        let bodyTextWithTab: string = '';
        //: Добавляем выделение текста, если оно установлено.
        if(options && options.selectionHeader) {

            bodyText = centerText(item.key, item.length);
            bodyTextWithTab = selectText(tabObj.start + bodyText + tabObj.end, selectionTypeObj[options.selectionHeader]);

        } else {
            bodyText = centerText(item.key, item.length);
            bodyTextWithTab = tabObj.start + bodyText + tabObj.end;

        }
        // помимо основного выравнивания текста пробелами, делаем отступы в начале и в конце текста
        str = str + bodyTextWithTab + lines.vertical;
    });
    return str;
}