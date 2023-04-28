import { Box, Grid, Stack, Typography } from '@mui/material'

// The sections will took this nomenclature = [SectionName]Section
export const HeroSection = () => {
  return (
    <Box component="section">
      <Grid container spacing={2}>
        <Grid item md={6}>
            <Typography>Description</Typography>
        </Grid>
        <Grid item md={6}>
          <Stack direction="row" justifyContent="center" border="1px solid red">
            <Typography>Image</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}