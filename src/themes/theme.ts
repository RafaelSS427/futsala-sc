import { PT_Serif } from 'next/font/google'
import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

export const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export const theme = createTheme({
    palette: {
        primary: {
            main: orange[500] // this is a test color
        }
    },
    typography: {
        fontFamily: ptSerif.style.fontFamily
    }
})