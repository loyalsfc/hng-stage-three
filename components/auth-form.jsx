'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
  const supabase = createClientComponentClient()

  return (
        <div className="w-full max-w-sm mx-auto shrink-0">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                showLinks={true}
                providers={[]}
                redirectTo="http://localhost:3000/auth/callback"
            />
        </div>
    )
}

