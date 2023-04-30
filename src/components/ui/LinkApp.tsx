import { FC } from 'react'
import NextLink from 'next/link'
import { Link, SxProps, Theme } from '@mui/material'

interface Props {
    href: string;
    name: string;
    styles?:  SxProps<Theme>
}

export const LinkApp: FC<Props> = ({ href, name, styles }) => {
  return (
    <NextLink href={ href } passHref legacyBehavior>
        <Link color="inherit" sx={styles}>
            { name }
        </Link>
    </NextLink>
  )
}
