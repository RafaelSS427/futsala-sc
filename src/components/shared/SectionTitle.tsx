import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { DividerApp } from '../ui'

interface Props {
  title: string
}

export const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <Stack direction="row" alignItems="end" spacing={2}>
      <Box>
        <Typography variant="h4" component="h1" fontSize={{ xs: "28px", sm: "34px" }} fontWeight={{ xs: 700, sm: 400 }} whiteSpace="nowrap">{title}</Typography>
      </Box>
      <DividerApp />
    </Stack>
  )
}