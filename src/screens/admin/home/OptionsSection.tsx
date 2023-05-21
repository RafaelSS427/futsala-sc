import { Stack, Button } from '@mui/material'
import { AddCircleOutlineOutlined } from '@mui/icons-material'

export const OptionsSection = () => {
    return (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={3}>
            <Button
                size="medium"
                variant="outlined"
                startIcon={<AddCircleOutlineOutlined color='primary' />}
                sx={{ height: "64px" }}
                color="inherit"
            >
                Crear nueva noticia
            </Button>
            <Button
                size="medium"
                variant="outlined"
                startIcon={<AddCircleOutlineOutlined color='primary' />}
                sx={{ height: "64px" }}
                color="inherit"
            >
                Crear nueva categoría
            </Button>
        </Stack>
    )
}