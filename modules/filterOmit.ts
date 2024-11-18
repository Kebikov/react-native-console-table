import { TDataObject } from "../types";

/**
 * `Фильтрация обьектов массива.`
 * @param data данные для фильтрации
 * @param keys ключи фильтрации
 */
export const filterOmit = <T extends object>(
    data: Array<TDataObject<T>>, 
    keys: Array<keyof T>
): Array<TDataObject<T>> | undefined => {
    /**
     * `Все ключи обьекта массива.`
     */
    const allKey = Object.keys(data[0]) as Array<keyof T>;

    const result = data.map(item => {
        /**
         * `Финальные обьект для возврата.`
         */
        let obj: TDataObject<T> = {} as TDataObject<T>;
        
        /**
         * `Отсортированные ключи.`
         */
        const allKeyFilter = allKey.filter(itemAllKey => {
            if(!keys.includes(itemAllKey)) {
                return itemAllKey;
            }
        });

        // Добавление данных в обьект
        allKeyFilter.forEach(itemAllKeyFilter => {
            obj[itemAllKeyFilter] = item[itemAllKeyFilter];
        });

        return obj ? obj : undefined;
    });

    return result.includes(undefined) ? undefined : result as TDataObject<T>[];
}

