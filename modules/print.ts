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

    let sign: string = 
        data?.options?.sing ? signObj[data.options.sing] 
        : 
        '';

    const headerLine = data?.options?.sing ? data.dashUp.slice(2) : data.dashUp;
    

    //* Если, есть Title, показываем его.
    const titleObj = formationTitle(data.dashCenter, data.options);

    if(titleObj && titleObj.title && titleObj.dashTitle) {
        const headerTitle = data?.options?.sing ? titleObj.dashTitle.slice(2) : titleObj.dashTitle;

        console.log(sign + headerTitle); // верхняя линия Title
        console.log(titleObj.title); // Title
        console.log(data.dashIfExistTitle); // линия, если есть Title
    } else {
        console.log(sign + headerLine); // верхняя линия
    }

    console.log(data.header); // шапка таблицы
    console.log(data.dashCenter); // средняя линия
    
    // Строки данных
    data.data.forEach((itemObj, index) => {
        const lineForLog = formationLine(data.columnLength, itemObj);
        console.log(lineForLog); // строка с данными
        if(index !== data.data.length - 1 && data?.options?.isShowLine) console.log(data.dashCenter);
    });

    console.log(data.dashBottom); // нижняя линия
}