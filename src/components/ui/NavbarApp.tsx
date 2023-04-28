import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export const NavbarApp = () => {
  return (
    <AppBar component="nav" position="static" color="primary" enableColorOnDark elevation={0}>
      <Toolbar>
        <Typography variant='h6'>LOGO</Typography>

        <Box display="flex" justifyContent="center" sx={{ flex: 1 }}>
          <Typography>Navigaton options</Typography>
        </Box>

        <Box>
          <Typography>Login</Typography>
        </Box>

      </Toolbar>
    </AppBar>
  )
}