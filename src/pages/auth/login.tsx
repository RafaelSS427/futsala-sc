import { NextPage } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material'

import { AuthLayout, LinkApp } from '@/components'
import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'

const LoginPage: NextPage = () => {

    const onSubmitForm = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await signIn('credentials', { email: "Rafaelss427@gmail.com", password: 'test-password', callbackUrl: '/admin' })
    }

    return (
        <AuthLayout title="Log In">
            <Stack height="100%" spacing={2} alignItems="center" justifyContent="center">
                <NextLink href="/">
                    <Box position="relative" width="150px" height="150px">
                        <NextImage
                            src="/logo.jpg"
                            alt="Logo de iniciativa Futsala SC"
                            priority
                            fill
                            sizes="(min-width: 768px) 100px, 50px"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                    </Box>
                </NextLink>

                <Container maxWidth="xs">
                    <Stack spacing={2} component="form" onSubmit={onSubmitForm}>
                        <Typography variant="h5" fontWeight={700} mb={0.5}>Ingresa tus crendeciales</Typography>
                        <TextField
                            fullWidth
                            id="outlined-email"
                            label="Correo electrónico"
                            placeholder="example@gmail.com"
                        />

                        <Stack spacing={0.5}>
                            <Stack direction="row" justifyContent="end">
                                <LinkApp href="/auth/forgot-password"
                                    styles={{
                                        // color: "#1D4ED8"
                                        color: (theme) => theme.palette.info.main
                                    }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </LinkApp>
                            </Stack>
                            <TextField
                                fullWidth
                                type="password"
                                id="outlined-password"
                                label="Contraseña"
                                placeholder="Ingresa tu contraseña"
                            />
                        </Stack>

                        <Button variant="outlined" color="secondary" type="submit">
                            Log In
                        </Button>
                    </Stack>
                </Container>
            </Stack>
        </AuthLayout >
    )
}

export default LoginPage