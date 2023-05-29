import { DefaultUser } from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & { accessToken?: string }
    }
    interface User extends DefaultUser {
        token: string;
    }
}