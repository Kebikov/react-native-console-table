import type { IOptions } from "../types";
import { lines } from "./dataForTable";
import { selectText } from "./selectText";
import { selectionTypeObj } from "./dataForTable";
import { centerText } from "./centerText";


/**
 * `Формирование Title для Header.`
 * @param title 
 * @param header 
 * @param options 
 */
export const formationTitle = (header: string, options?: IOptions): {title: string, dashTitle: string} | void => {
    if(!options) return;
    // Если Title больще чем вся таблица, мы его не показываем.
    if(options.title && header.length < options.title.length + 2) return console.error('“The header is longer than the entire table width, the table will be displayed without a header.”');
    if(options && options.title) {
        let title = centerText(options.title, header.length - 2);
        /**
         * `Линия для Title.`
         */
        const dashTitle = lines.angleTopLeft + ''.padStart(title.length, lines.horizon) + lines.angleTopRight;

        // Выделяем Title, если это установлено.
        if(options.selectionTitle) {
            title = lines.vertical + selectText(title, selectionTypeObj[options.selectionTitle]) + lines.vertical;
        } else {
            title = lines.vertical + title + lines.vertical;
        }

        return {
            title,
            dashTitle
        }

    } else {
        return undefined;
    }
}