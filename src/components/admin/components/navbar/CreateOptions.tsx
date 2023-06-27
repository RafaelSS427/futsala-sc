import { FC } from 'react'
import { LinkApp } from '@/components/ui'
import { ArrowBackIosOutlined } from '@mui/icons-material'
import { Box, Stack, Typography, Button } from '@mui/material'

interface Props {
    title: string
}

export const CreateOptions:FC<Props> = ({ title }) => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" pr={{ xs: "16px", sm: "24px" }} sx={{ borderRight: "1px solid #666" }} height="64px">
                <LinkApp
                    href='/admin'
                    styles={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <ArrowBackIosOutlined color="secondary" />
                </LinkApp>
            </Box>

            <Stack ml={2}>
                <Typography variant="h6" component="p">{ title }</Typography>
            </Stack>

            <Box display={{ xs: "none", sm: "block" }} sx={{ flex: 1 }} />

            <Stack direction="row" spacing={1} mr={2} display={{ xs: "none", sm: "flex" }}>
                <Button variant="outlined" color="primary" type="submit" form="create-news-form">
                    Publicar
                </Button>
                <Button variant="contained" color="inherit" disableElevation>
                    Vista previa
                </Button>
            </Stack>
        </>
    )
}