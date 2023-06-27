import { AppBar, Toolbar, Box } from '@mui/material'
import { MenuAdmin } from './MenuAdmin'
import { NavbarOptions } from '../components'

export const NavbarAdmin = () => {    
    return (
        <>
            <AppBar component="nav" position="fixed" color="inherit" enableColorOnDark elevation={1}>
                <Toolbar>
                    <NavbarOptions />

                    <Box display={{ xs: "block", sm: "none" }} sx={{ flex: 1 }} />

                    <Box display="flex" justifyContent="center" alignItems="center" pl={{ xs: "16px", sm: "24px" }} sx={{ borderLeft: "1px solid #666" }} height="64px">
                        <MenuAdmin />
                    </Box>

                </Toolbar>
            </AppBar >
            <Box height="64px" />
        </>
    )
}