import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ghcoxxuozmbzwyroobrt.supabase.co'
const supabaseAnonKey = 'sb_publishable_MmZJVBYev2st9sD334Apzw_ocG3izHw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})