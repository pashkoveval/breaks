/**
 * Преобразует Blob в json.
 * Если json валидный, то возвращает json
 * Иначе возвращает Blob
 */
export const getExcelDataFromBlob = (data: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = ({ target }) => {
      if (target?.result) {
        if (typeof target.result === 'string') {
          try {
            resolve(JSON.parse(target.result))
          } catch (e) {
            console.warn('e', e)
            resolve(data)
          }
        }
      }
    }
    reader.onerror = () => {
      reject(new Error('Ошибка чтения файла'))
    }
    reader.readAsText(data)
  })
}
