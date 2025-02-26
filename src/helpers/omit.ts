import omit from 'lodash/omit'

/**
 * Создает новый объект без заданных ключей.
 *
 * @example
 * var object = { a: 1, b: 2, c: 3 };
 *
 * omit(object, ['b', 'c']);
 * // => { a: 1 }
 *
 * @param {object} object       Исходный объект.
 * @param {...string} props     Массив ключей, которые необходимо убрать.
 * @returns {object}            Новый объект.
 */
export default omit
