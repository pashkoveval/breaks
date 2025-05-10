import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
  PASTEL = 'pastel',
  MONOCHROME = 'monochrome',
  VIBRANT = 'vibrant',
}

export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggleDark = useToggle(isDark)

  const getPreferredTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK
    } else {
      return THEMES.LIGHT
    }
  }
  const currentTheme = ref((localStorage.getItem('ppe.theme') as THEMES) || getPreferredTheme())

  const changeTheme = (theme: THEMES) => {
    if (currentTheme.value !== theme) {
      if ([THEMES.DARK].includes(theme)) {
        toggleDark()
      } else if (isDark.value) {
        toggleDark()
      }
    }

    currentTheme.value = theme
    document.body.setAttribute('color-scheme', theme)
    localStorage.setItem('ppe.theme', theme)
  }

  return { currentTheme, changeTheme }
})
