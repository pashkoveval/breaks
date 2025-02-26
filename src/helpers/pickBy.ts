import pickBy from 'lodash/pickBy'

/**
 * Создает новый объект из ключей, которые удовлетворяют заданному функцией условию.
 *
 * @example
 * var object = { a: 1, b: 0, c: null };
 *
 * pickBy(object, Boolean);
 * // => { a: 1 }
 *
 * @param {object} object       Исходный объект.
 * @param {function} predicate  Функция для условия.
 * @returns {object}            Новый объект.
 */
export default pickBy
