/**
 * Анимирует элемент при помощи класса [className].
 *
 * @param {() => boolean} state
 * @param {HTMLElement} element
 * @param {string} className
 * @param {number} duration
 */
export default function (state: () => boolean, element: HTMLElement, className: string, duration: number) {
  element.classList.add(className)

  const interval = setInterval(
    () => {
      element.classList.remove(className)

      setTimeout(() => {
        element.classList.add(className)
      }, 50)

      if (!state()) {
        clearInterval(interval)
        setTimeout(() => {
          element.classList.remove(className)
        }, 50)
      }
    },
    duration + 2 * 50,
  )

  return interval
}
