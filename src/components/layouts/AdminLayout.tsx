import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'

import { NavbarAdmin } from '../admin'

interface Props extends PropsWithChildren {
    title: string
}

export const AdminLayout:FC<Props> = ({  children, title }) => {
    return (
        <>
            <Head>
                <title>{`${ title } | Admin`}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box component="header" mb={2}>
                <NavbarAdmin />
            </Box>

            <Container maxWidth="xl" component="main">
                { children }
            </Container>
        </>
    )
}