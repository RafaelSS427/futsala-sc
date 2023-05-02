import { NewsCard, SectionTitle } from '@/components'
import { Box, Grid, Stack } from '@mui/material'
import { FC } from 'react'

interface Props {
  title: string
}

export const ListNewsCatSection: FC<Props> = ({ title }) => {
  return (
    <Box component="section" mt={6}>
      <SectionTitle title={title} />

      <Grid container spacing={5}>

        {/* it is principal */}
        <Grid item xs={12} md={6}>
          <NewsCard direction="column-reverse" showDivider isPriority />
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            position="relative"
            height="100%"
            direction="column"
            justifyContent="space-between"
            pt={1}
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                "::before": {
                  content: '""',
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                  top: 0,
                  left: -20,
                  width: "1px",
                  height: "100%"
                }
              }
            })}
          >
            {
              Array.from(new Array(2)).map((item, i) => {
                return <NewsCard key={i} showImage={false} showDivider={i !== 1} />
              })
            }
          </Stack>
        </Grid>
      </Grid>

    </Box>
  )
}
