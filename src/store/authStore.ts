import { create } from 'zustand'

interface AuthProps {
    isLogin: boolean;
    user?: any;
    loading: boolean;
}

interface AuthState extends AuthProps {
    login: (user: any) => void;
    loadingUser: (state: boolean) => void;
}

export type AuthStore = ReturnType<typeof useAuthStore>

export const useAuthStore = create<AuthState>(( set ) => ({
    isLogin: false,
    user: undefined,
    loading: true,
    login: (user) => {
        set(store => ({
            ...store,
            isLogin: true,
            user
        }))
    },
    loadingUser: (state) => {
        set(store => ({
            ...store,
            loading: state
        }))
    }
}))