import { FC, PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

export const HeroNewsSection: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <Typography variant="h4" fontSize={{ xs:"26px", sm: "32px", md: "42px" }} fontWeight={700} component="h1" mb={2}>El equipo de la sede jugó una triangular frente a educadoras y zoe´s</Typography>
            <Typography variant="h5" component="h2" fontSize={{ xs: "18px", sm: "24px" }} sx={{ color: "#666" }}>El equipo de la sede jugó una triangular frente a educadoras y zoe´s</Typography>

            <Box my={3}>
                {children}
            </Box>
        </Box>
    )
}