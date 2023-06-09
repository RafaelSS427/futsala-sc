import { useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { PersonAdd, Settings, Logout, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, AdminPanelSettings, AdminPanelSettingsOutlined, CreateOutlined, NewspaperOutlined, AddOutlined } from '@mui/icons-material'
import { Avatar, Menu, MenuItem, Divider, ListItemIcon, Stack, Button } from '@mui/material'
import { signOut } from 'next-auth/react'


export const MenuAdmin = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const router = useRouter()

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const logout = () => {
        Cookies.remove('access_token')
        signOut({ callbackUrl: '/auth/login' })
    }

    return (
        <>
            <Button onClick={handleClick} variant="text" color="inherit">
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>

                    {
                        open ? (
                            <KeyboardArrowUpOutlined color="primary" />
                        ) : (
                            <KeyboardArrowDownOutlined color="primary" />
                        )
                    }
                </Stack>
            </Button>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem> */}
                <MenuItem onClick={handleClose}>
                    <Avatar /> Mi perfil
                </MenuItem>
                <Divider />

                <MenuItem onClick={() => {
                    router.push('/admin')
                    handleClose()
                }}>
                    <ListItemIcon>
                        <AdminPanelSettingsOutlined fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                </MenuItem>

                <MenuItem onClick={() => {
                    alert('A modal should be shown in this part')
                    handleClose()
                }}>
                    <ListItemIcon>
                        <AddOutlined fontSize="small" />
                    </ListItemIcon>
                    Nueva categoría
                </MenuItem>

                <MenuItem onClick={() => {
                    router.push('/admin/create')
                    handleClose()
                }}>
                    <ListItemIcon>
                        <NewspaperOutlined fontSize="small" />
                    </ListItemIcon>
                    Nueva noticia
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Agregar nuevo usuario
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem> */}
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>

            </Menu>
        </>
    );
}
