/// <reference types="vite/client" />

import type { BreaksENV } from '@/breaks/breaks'
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_KEY: string
  readonly VITE_SUPABASE_PID: string
  readonly VITE_BREAKS: BreaksENV
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
