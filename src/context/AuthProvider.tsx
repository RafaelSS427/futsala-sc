import { FC, PropsWithChildren, useEffect, Fragment } from 'react'
import { useSession } from 'next-auth/react'
import Cookies from 'js-cookie'
import { useAuthStore } from '@/store'

export const AuthProvider:FC<PropsWithChildren> = ({ children }) => {
    const login = useAuthStore(store => store.login)
    const { status, data } = useSession()

    useEffect(() => {
        if(status === "authenticated"){
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