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
        <Box position="relative" width="60px" height="60px">
          <NextLink href="/">
            <NextImage
              src="/logo.jpg"
              alt="Logo de iniciativa Futsala SC"
              fill
              style={{
                objectFit: "scale-down"
              }}
            />
          </NextLink>

        </Box>

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
                  name={capitalize(name)}
                  styles={{
                    textDecorationLine: "none"
                  }}
                />
              )
            })
          }
        </Box>

        <Box display={{ xs: "flex", sm: "none" }} sx={{ flex: 1 }} />

        <Box>
          <LinkApp href="/auth/login" name="Login" />
        </Box>

      </Toolbar>
    </AppBar>
  )
}