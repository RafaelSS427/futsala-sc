
import { AppBar, Toolbar, Box, FormControl, OutlinedInput, Stack } from '@mui/material'
import { MenuAdmin } from './MenuAdmin'
import { HomeOutlined } from '@mui/icons-material'

import { LinkApp } from '@/components'

export const NavbarAdmin = () => {
    return (
        <>
            <AppBar component="nav" position="fixed" color="inherit" enableColorOnDark elevation={1}>
                <Toolbar>
                    <Box display={{ xs: "none", sm: "block" }}>
                        <FormControl color="info" sx={{ width: { xs: "25ch", sm: "35ch" } }}>
                            <OutlinedInput placeholder="Buscar" sx={{ height: "40px" }} />
                        </FormControl>
                    </Box>

                    <Box display={{ xs: "none", sm: "block" }} sx={{ flex: 1 }} />

                    <Stack direction="row" spacing={1} mr={3}>
                        <HomeOutlined color="info" />
                        <LinkApp href={`/`}
                            styles={{
                                color: (theme) => theme.palette.info.main
                            }}
                        >
                            Ir al inicio
                        </LinkApp>
                    </Stack>
                    <Box display={{ xs: "block", sm: "none" }} sx={{ flex: 1 }} />

                    <Box display="flex" alignItems="center" pl={{ xs: "10px", sm: "40px" }} sx={{ borderLeft: "1px solid #666" }} height="64px">
                        <MenuAdmin />
                    </Box>

                </Toolbar>
            </AppBar>
            <Box height="64px" />
        </>
    )
}