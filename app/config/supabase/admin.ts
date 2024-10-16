import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!)


export default supabaseAdmin