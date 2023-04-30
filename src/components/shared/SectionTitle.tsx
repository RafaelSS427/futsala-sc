import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface Props {
    title: string
}

export const SectionTitle:FC<Props> = ({ title }) => {
  return (
    <Stack direction="row" alignItems="end" spacing={2}>
        <Typography variant="h4" component="h1">{ title }</Typography>
        <hr style={{ border: "0.1px #0ABF25 solid", width: "100%", marginBottom:"7.5px" }} />
    </Stack>
  )
}
