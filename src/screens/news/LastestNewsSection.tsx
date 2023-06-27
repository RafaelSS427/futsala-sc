import { FC } from 'react'
import { NewsCard, SectionTitle } from '@/components'
import { Box, Grid } from '@mui/material'

interface Props {
    // fields
}

export const LastestNewsSection: FC<Props> = () => {
    return (
        <Box component="section">
            <SectionTitle title="Últimas noticias" />

            <Grid container spacing={2} mt={1}>
                {
                    [1, 2, 3].map((news, i) => (
                        <Grid item xs={12} sm={4} key={i}>
                            <NewsCard direction="column-reverse" imgIsCover isDetail showDivider />
                        </Grid>
                    ))
                }
            </Grid>

        </Box>
    )
}