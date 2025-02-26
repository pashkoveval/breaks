import pick from 'lodash/pick'

/**
 * Создает объект из ключей, которые были выбраны.
 *
 * @example
 * var object = { a: 1, b: 2, c: 3 };
 *
 * pick(object, ['a', 'c']);
 * // => { a: 1, c: 3 }
 *
 * @param {object} object       Исходный объект.
 * @param {string[]} props      Массив ключей, которые необходимо выбрать.
 * @returns {object}            Новый объект.
 */
export default pick
