/**
 * Обрезает массив на заданную величину
 * @param array массив
 * @param length необходимая длина
 * @param fromEnd с конца?
 * @returns "укороченный" массив
 */

export const sliceArray = <T>(
  array: Array<T>,
  length: number,
  fromEnd?: boolean
) => {
  if (array.length >= length) {
    const startIndex = fromEnd ? array.length - length : 0;
    const endIndex = fromEnd ? array.length : length;
    return array.slice(startIndex, endIndex);
  }
  return array;
};
