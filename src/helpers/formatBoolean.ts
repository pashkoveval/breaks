/**
 *  Возвращает формализованное представление для value
 */
function formatBoolean<T = string>(value?: boolean | null, format = ['Да', 'Нет'] as [T, T] | [T, T, T]): T {
  if (typeof value !== 'boolean' && format.length === 3) {
    return format[2]
  }

  return value ? format[0] : format[1]
}

export default formatBoolean
