import isArray from './isArray'

/**
 * Склонение, соответственно заданному значению.
 *
 * @param {number} value
 * @param {string} case1 месяц
 * @param {string} case2 месяца
 * @param {string} case3 месяцев
 * @returns {string}
 */
function pluralize(value: number, case1: string | Array<string>, case2: string = '', case3: string = '') {
  if (!isArray(case1)) {
    return pluralize(value, [case1, case2, case3])
  }

  const helpers = [2, 0, 1, 1, 1, 2]

  return case1[value % 100 > 4 && value % 100 < 20 ? 2 : helpers[value % 10 < 5 ? value % 10 : 5]]
}

export default pluralize
