import type { AuthError, PostgrestError, Session, SignInWithPasswordCredentials, User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import isEqual from '@/helpers/isEqual'
import omit from '@/helpers/omit'
import supabase from '@/supabase'
import type { Tables } from '@/supabase/database'
import type { Handbook } from '@/supabase/totalTypes'

type CurrentSession = {
  access_token: string
  refresh_token: string
}

export type AuthUser = User
export type ProfileUser = Tables<'users'>
export type SessionData = Omit<Session, 'user'>
export type AuthErrorData = Partial<AuthError & PostgrestError>

export const useAuthStore = defineStore('auth', () => {
  const sessionData = ref<SessionData | null>(null)
  const profileData = ref<ProfileUser | null>(null)
  const authError = ref<AuthErrorData[]>([])

  const _setError = (error: AuthErrorData | null | undefined) => {
    if (error && !authError.value.some((e) => isEqual(e, error))) {
      authError.value.push(error)
    }
  }
  const _setProfile = async (userAuth: AuthUser | null | undefined) => {
    if (userAuth && !profileData.value) {
      const table: Handbook = 'users'
      const { data: users, error } = await supabase.from(table).select('*').eq('uuid', userAuth.id)
      _setError(error)
      profileData.value = (users?.[0] as ProfileUser) || null
    }
  }
  const _setCurrentSession = (session: Session | null | undefined) => {
    if (session) {
      const key = 'ppe.currentSession'
      const data: CurrentSession = {
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      }
      localStorage.setItem(key, JSON.stringify(data))
    }
  }
  const _setSession = (session: Session | null | undefined) => {
    if (session && !sessionData.value) {
      _setProfile(session?.user)
      _setCurrentSession(session)
      sessionData.value = omit(session, ['user'])
    }
  }

  const setSessionData = async () => {
    const _setOrGetSession = async () => {
      const currentSession: CurrentSession | null = JSON.parse(localStorage.getItem('ppe.currentSession') || 'null')
      if (currentSession) {
        return await supabase.auth.setSession(currentSession)
      }
      return await supabase.auth.getSession()
    }

    _setSession(
      await _setOrGetSession().then(({ data, error }) => {
        _setError(error)
        return data.session
      }),
    )
  }

  const signIn = async (
    credentials: SignInWithPasswordCredentials = {
      email: 'super_admin@test.com',
      password: 'super_admin',
    },
  ) => {
    if (sessionData.value) {
      return
    }

    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword(credentials)
    _setError(error)
    _setSession(session)
    return { user, session, error }
  }

  return { sessionData, profileData, authError, setSessionData, signIn }
})
