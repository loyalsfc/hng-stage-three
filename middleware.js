import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    const res = NextResponse.next()

    const supabase = createMiddlewareClient({ req, res })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // if user is signed in and the current path is /authentication redirect the user to /
    if (user && req.nextUrl.pathname === '/authentication') {
        return NextResponse.redirect(new URL('/', req.url))
    }

  // if user is not signed in and the current path is not /authentication redirect the user to /authentication
    if (!user && req.nextUrl.pathname !== '/authentication') {
        return NextResponse.redirect(new URL('/authentication', req.url))
    }

    return res
}

export const config = {
  matcher: ['/', '/authentication'],
}