<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from './menu/sidebar/MainSidebar.vue'
import MainLayout from './layouts/main/MainLayout.vue'
import { useAuthStore } from './auth/auth'
import { THEMES, useThemeStore } from './theme/theme'

const auth = useAuthStore()
const themeStore = useThemeStore()

const changeTheme = () => {
  const themes = Object.values(THEMES)
  const currentIndex = themes.indexOf(themeStore.currentTheme)
  themeStore.changeTheme(themes[(currentIndex + 1) % themes.length])
}

onBeforeMount(() => {
  themeStore.changeTheme(themeStore.currentTheme)
  auth.signIn()
})
</script>

<template>
  <MainLayout v-isAuthLoaded="auth.isAuthLoaded" class="main-layout">
    <template #aside>
      <SideBar />
    </template>

    <template #header>
      <el-button type="primary" @click="changeTheme">changeTheme</el-button>
    </template>

    <template v-if="!auth.isAuthLoaded" #main>
      <KeepAlive>
        <RouterView />
      </KeepAlive>
    </template>

    <template #footer>footer</template>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
