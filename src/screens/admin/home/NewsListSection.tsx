import { FC} from 'react'
import { Box, Grid } from '@mui/material'
import { NewsCard } from '@/components'
import { AccordionHome } from '@/components/admin'

interface Props {
    news?: number[]
}

export const NewsListSection:FC<Props> = ({ news = [1, 2, 3, 4] }) => {

    return (
        <Box>
            <AccordionHome />

            <Grid container spacing={2} mt={1}>
                {
                    news.map((news, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <NewsCard direction="column-reverse" imgIsCover isDetail showDivider />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}