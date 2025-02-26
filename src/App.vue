<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from './components/Sidebar/SideBar.vue'
import MainLayout from './layouts/main/MainLayout.vue'
import { useAuthStore } from './stores/auth'
import { THEMES, useThemeStore } from './stores/theme'

const auth = useAuthStore()
const themeStore = useThemeStore()

const changeTheme = () => {
  const themes = Object.values(THEMES)
  const currentIndex = themes.indexOf(themeStore.currentTheme)
  themeStore.changeTheme(themes[(currentIndex + 1) % themes.length])
}

onBeforeMount(() => {
  themeStore.changeTheme(themeStore.currentTheme)
  auth.setSessionData()

  setTimeout(async () => {
    await auth.signIn()
  }, 3000)
})
</script>

<template>
  <MainLayout class="main-layout">
    <template #aside>
      <SideBar />
    </template>

    <template #header>
      <button @click="changeTheme">changeTheme</button>
    </template>

    <template #main>
      <KeepAlive>
        <RouterView />
      </KeepAlive>
    </template>

    <template #footer>footer</template>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
