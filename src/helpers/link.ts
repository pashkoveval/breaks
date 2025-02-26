/**
 * Функция-хелпер, которая создает ссылку и делает виртуальный переход по ней.
 *
 * @param {string} url
 * @param {string} filename
 * @param {boolean} [openOnSave]
 */
export default (url: string, filename: string = 'Файл', openOnSave: boolean = false) => {
  const tempLink = document.createElement('a')

  tempLink.style.display = 'none'
  tempLink.href = url

  if (!openOnSave) {
    tempLink.setAttribute('download', filename)
  } else {
    tempLink.setAttribute('target', '_blank')
  }

  // Safari thinks _blank anchor are pop ups. We only want to set _blank
  // target if the browser does not support the HTML5 download attribute.
  // This allows you to download files in desktop safari if pop up blocking
  // is enabled.
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }

  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
}
