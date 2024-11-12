/**
 * `Для центрирования текста пробелами.`
 * @param text Текст.
 * @param lengthColumn Длинна колонки.
 */
export const centerText = (text: string, lengthColumn: number): string => {
    const textLength = text.length;
    const difference = lengthColumn - textLength;
    const halfDifference = Math.floor(difference / 2);
    const textPadStart = text.padStart(halfDifference + textLength, ' ');
    text = textPadStart.padEnd(textLength + difference, ' ');
    return text;
}