import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { Link, SxProps, Theme } from '@mui/material'

interface Props extends PropsWithChildren {
    href: string;
    styles?:  SxProps<Theme>
}

export const LinkApp: FC<Props> = ({ children, href, styles }) => {
  return (
    <NextLink href={ href } passHref legacyBehavior>
        <Link color="inherit" sx={styles}>
            { children }
        </Link>
    </NextLink>
  )
}