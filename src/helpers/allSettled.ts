type Result<T> = Promise<{ data: T; errors: Error[] }>

/**
 * Обертка над **Promise.allSettled**
 *
 * @param values - массив промиссов
 * @param defaultValues - значение для промис по умолчанию
 *
 * @returns результат выполнения **Promise.allSettled** и массив с ошибками, если есть.
 */
const allSettled = async <T extends readonly unknown[] | []>(
  values: T,
  defaultValues: Awaited<Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>>,
): Promise<Result<typeof defaultValues>> => {
  const errors: Error[] = []

  const data = (await Promise.allSettled(values).then((result) =>
    result.map((item, index) => {
      if (item.status === 'fulfilled') {
        return item.value
      }

      errors.push(item.reason)

      return defaultValues[index]
    }),
  )) as typeof defaultValues

  return {
    data,
    errors,
  }
}

export default allSettled
