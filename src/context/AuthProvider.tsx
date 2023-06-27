import { FC, PropsWithChildren, useEffect, Fragment } from 'react'
import { useSession } from 'next-auth/react'
import Cookies from 'js-cookie'
import { useAuthStore } from '@/store'

export const AuthProvider:FC<PropsWithChildren> = ({ children }) => {
    const login = useAuthStore(store => store.login)
    const loadingUser = useAuthStore(store => store.loadingUser)
    
    const { status, data } = useSession()

    useEffect(() => {

        if(status === "loading"){
            loadingUser(true)
        }

        if(status === "unauthenticated"){
            loadingUser(false)
        }

        if(status === "authenticated"){
            loadingUser(false)
            if(!Cookies.get('access_token')){
                Cookies.set('access_token', data.user?.accessToken!)
            }
            login(data.user)
        }
    }, [status, data])

    return (
        <Fragment>
            { children }
        </Fragment>
    )
}