import { Box, FormControl, OutlinedInput, Stack } from '@mui/material'
import { LinkApp } from '@/components/ui'
import { HomeOutlined } from '@mui/icons-material'

export const DashboardOptions = () => {
    return (
        <>
            <Box pr={2}>
                <FormControl color="info" sx={{ width: { xs: "100%", sm: "35ch" } }}>
                    <OutlinedInput placeholder="Buscar" sx={{ height: "40px" }} />
                </FormControl>
            </Box>

            <Box display={{ xs: "none", sm: "block" }} sx={{ flex: 1 }} />

            <Stack direction="row" spacing={1} mr={3} display={{ xs: "none", sm: "flex"  }}>
                <HomeOutlined color="info" />
                {/* <LinkApp href={`/`} */}
                <LinkApp href={`/`}
                    styles={{
                        color: (theme) => theme.palette.info.main
                    }}
                >
                    Ir al inicio
                </LinkApp>
            </Stack>
        </>
    )
}