import { create } from 'zustand'

interface AuthProps {
    isLogin: boolean;
    user?: any;
}

interface AuthState extends AuthProps {
    login: (user: any) => void;
}

export type AuthStore = ReturnType<typeof useAuthStore>

export const useAuthStore = create<AuthState>(( set ) => ({
    isLogin: false,
    user: undefined,
    login: (user) => {
        set(store => ({
            ...store,
            isLogin: true,
            user
        }))
    }
}))