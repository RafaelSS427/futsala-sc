import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'

interface Props extends PropsWithChildren {
    title: string;
}

export const AuthLayout:FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{`${title} | FutsalaSC`}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth="sm" sx={{ height: "90vh" }}>
                { children }
            </Container>
        </>
    )
}
