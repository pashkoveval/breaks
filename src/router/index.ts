import type { Role } from '@/supabase/totalTypes'
import type { BreaksENV } from '@/breaks/breaks'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import breaksRouts from '@/breaks/routes'
import { useAuthStore } from '@/auth/auth'

const getConnectedBreaks = (route: RouteRecordRaw) => {
  const list = JSON.parse(import.meta.env.VITE_BREAKS || '{}') as BreaksENV
  const breakName = (route?.meta?.break as string) || ''
  return breakName && list[breakName] === true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Домашняя страница',
      },
    },
    ...breaksRouts.filter(getConnectedBreaks),
  ],
})

router.beforeEach((to, from, next) => {
  const AUTH = useAuthStore()
  const requiresAuth = to.matched.some((record) => record.meta.auth) // Требуется ли авторизация

  if (AUTH.currentSession) {
    return next()
  }

  if (requiresAuth && !Boolean(AUTH.sessionData)) {
    // Если маршрут требует авторизации, а пользователь не авторизован
    // next({ name: 'login' }); // Перенаправляем на страницу входа
    next({ name: 'home' }) // Перенаправляем на страницу входа
  } else if (requiresAuth && Boolean(AUTH.sessionData)) {
    // Если маршрут требует авторизации и пользователь авторизован
    const userRoles = AUTH.profileData?.roles || [] // Получаем роли пользователя
    const requiredRoles = (to?.meta?.roles as Role['id'][]) || [] // Роли, необходимые для доступа

    if (
      Array.isArray(requiredRoles) &&
      requiredRoles.length &&
      !requiredRoles.some((role) => userRoles.includes(role))
    ) {
      // Если у пользователя нет необходимых ролей
      next({ name: 'home' }) // Перенаправляем на главную страницу
    } else {
      next() // Разрешаем переход
    }
  } else {
    next() // Разрешаем переход
  }
})

export default router
