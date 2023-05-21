import { useCallback } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { AppBar, Box, Toolbar, capitalize } from '@mui/material'

import { LinkApp } from './LinkApp'
import { getPipeLinks } from '@/utils'
import { getCategoriesByName } from '@/database'

export const NavbarApp = () => {

  const testLinks = getCategoriesByName()

  const getLinks = useCallback(() => getPipeLinks(testLinks), [testLinks])

  return (
    <AppBar component="nav" position="static" color="inherit" enableColorOnDark elevation={1}>
      <Toolbar>
        <NextLink href="/">
          <Box position="relative" width="60px" height="60px">
            <NextImage
              src="/logo.jpg"
              alt="Logo de iniciativa Futsala SC"
              fill
              sizes="(min-width: 768px) 100px, 50px"
              style={{
                objectFit: "scale-down"
              }}
            />
          </Box>
        </NextLink>

        <Box display={{ xs: "none", sm: "flex" }} justifyContent="center" columnGap="10px" sx={{ flex: 1 }}>
          {
            getLinks().map((name, i) => {
              if (name === '|') {
                return <strong key={`${name}-${i}`} style={{ color: '#3EC8C8' }}>{name}</strong>
              }

              return (
                <LinkApp
                  key={`${name}-${i}`}
                  href={`/categoria/${name}`}
                  styles={{
                    textDecorationLine: "none"
                  }}
                >
                  { capitalize(name) }
                </LinkApp>
              )
            })
          }
        </Box>

        <Box display={{ xs: "flex", sm: "none" }} sx={{ flex: 1 }} />

        <Box>
          <LinkApp href="/auth/login">
            Login
          </LinkApp>
        </Box>

      </Toolbar>
    </AppBar>
  )
}