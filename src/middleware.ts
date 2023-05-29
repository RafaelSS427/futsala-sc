import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async(req: NextRequest) => {
    const requestedPage = req.nextUrl.pathname
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if(!session){
        if(requestedPage.startsWith('/admin')){
            const url = req.nextUrl.clone()
            url.pathname = '/auth/login'

            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/admin/:path*'
    ]
}