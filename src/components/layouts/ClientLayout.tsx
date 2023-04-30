import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'

import { NavbarApp } from '../ui'

interface Props extends PropsWithChildren {
    title: string
    description: string
}

export const ClientLayout:FC<Props> = ({  children, title, description }) => {
    return (
        <>
            <Head>
                <title>{`${ title } | FutsalaSC`}</title>
                <meta name="description" content={ description } />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box component="header" mb={2}>
                <NavbarApp />
            </Box>

            <Container maxWidth="md" component="main">
                { children }
            </Container>

            {/* Here will go the footer */}
            {/* <Footer /> */}
        </>
    )
}
