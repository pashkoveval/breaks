/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Вернуть древовидную структуру в виде плоского массива.
 * Исходный массив / объекты не мутируются!
 *
 * @param treeList - исходный массив
 * @param childrenKey - ключ для получения потомков
 */
const treeToList = <T extends Record<string, any>, K extends keyof T>(treeList: T[], childrenKey: K): T[] => {
  let index = 0
  const list = treeList.slice()

  while (index < list.length) {
    const childrens: T[] | undefined = list[index][childrenKey]

    if (Array.isArray(childrens)) {
      list.push(...childrens)
    }
    index++
  }

  return list
}

export default treeToList
