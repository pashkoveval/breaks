/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Преобразование параметров к аргументам адресной строки.
 *
 * @see {@link https://github.com/nuxt-community/auth-module/blob/dev/src/helpers/index.ts#L36}
 * @param {object} queryObject
 * @returns {string}
 */
export default (queryObject: any) =>
  Object.entries(queryObject)
    .filter(([, value]) => typeof value !== 'undefined')
    .map(([key, value]) => encodeURIComponent(key) + (value != null ? `=${encodeURIComponent(value as string)}` : ''))
    .join('&')
