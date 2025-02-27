import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
  PASTEL = 'pastel',
  MONOCHROME = 'monochrome',
  VIBRANT = 'vibrant',
}

export const useThemeStore = defineStore('theme', () => {
  const getPreferredTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK
    } else {
      return THEMES.LIGHT
    }
  }
  const currentTheme = ref((localStorage.getItem('ppe.theme') as THEMES) || getPreferredTheme())

  const changeTheme = (theme: THEMES) => {
    currentTheme.value = theme
    document.body.dataset.theme = theme
    localStorage.setItem('ppe.theme', theme)
  }

  return { currentTheme, changeTheme }
})
