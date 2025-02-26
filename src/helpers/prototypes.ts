/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
function* getPrototypes(prototype: any): Generator<any> {
  for (let item: any | null = prototype; item; item = Object.getPrototypeOf(item)) {
    yield item
  }
}

/**
 * Получение всей цепочки прототипов.
 *
 * @example
 * class A { }
 * class B extends A { }
 * class C extends B { }
 *
 * prototypes(C) -> [
 *  C.prototype,
 *  B.prototype,
 *  A.prototype,
 *  Function.prototype,
 *  Object.prototype,
 * ]
 *
 * @param {Function} Class
 * @returns {any[]}
 */
export default (Class: Function): any[] => {
  return Array.from(getPrototypes(Class.prototype))
}
