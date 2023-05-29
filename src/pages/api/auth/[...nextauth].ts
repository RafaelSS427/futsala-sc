import  NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJhZmFlbCBTZXF1ZWlyYSIsImlhdCI6MTUxNjIzOTAyMn0.NRE-OnaqQ9I6mSsw3FBtXefJgialmOKPrbiqgxG_8_I'

const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Custom login",
            credentials: {},
            async authorize(credentials, req) {
                return { id: "test", token }
            },
        })
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        jwt: async({ token, user , account }) => {
            if(user && account){
                return {
                    ...token,
                    accessToken: user.token,
                    refreshToken: user.token
                }
            }

            return token
        },

        session: ({ session, token }) => {
            session.user!.accessToken = token.accessToken as string
            return session
        }
    }
}

export default NextAuth(authOptions)