import { formationLine } from './formationLine';
import { IPrint } from '../types';
import { signObj } from './dataForTable';
import { formationTitle } from './formationTitle';



/**
 * `Вывод таблицы в терминал.`
 */
export const print = (
    data: IPrint
) => {

    let fullTable: string = '\n';

    let sign: string = 
        data?.options?.sing ? signObj[data.options.sing] 
        : 
        '';

    const headerLine = data?.options?.sing ? data.dashUp.slice(2) : data.dashUp;
    

    //* Если, есть Title, показываем его.
    const titleObj = formationTitle(data.dashCenter, data.options);

    if(titleObj && titleObj.title && titleObj.dashTitle) {
        const headerTitle = data?.options?.sing ? titleObj.dashTitle.slice(2) : titleObj.dashTitle;
        fullTable += sign + headerTitle + '\n'; // + верхняя линия Title
        fullTable += titleObj.title + '\n'; // + Title
        fullTable += data.dashIfExistTitle + '\n'; // + линия, если есть Title
    } else {
        fullTable += sign + headerLine + '\n'; // + верхняя линия
    }

    fullTable += data.header + '\n'; // + шапка таблицы
    fullTable += data.dashCenter + '\n'; // + средняя линия
    
    // Строки данных
    data.data.forEach((itemObj, index) => {
        const lineForLog = formationLine(data.columnLength, itemObj);
        fullTable += lineForLog + '\n'; // + строка с данными
        if(index !== data.data.length - 1 && data?.options?.isShowLine) fullTable += data.dashCenter + '\n'; 
    });

    fullTable += data.dashBottom + '\n'; // + нижняя линия

    console.log(fullTable);
}