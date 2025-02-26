import get from 'lodash/get'

/**
 * Получает значение из объекта по пути.
 *
 * @example
 * var object = { a: { b: 1, c: 2 } };
 *
 * get(object, 'a.c');
 * // => 2
 *
 * @param {object} object   Исходный объект.
 * @param {string} path     Путь к значению внутри объекта.
 * @returns {any}           Искомое значение.
 */
export default get
