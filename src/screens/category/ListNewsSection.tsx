import { FC } from 'react'
import NextLink from 'next/link'

import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material'
import { NewsCard } from '@/components'

interface Props {
    // news: News[]
}

export const ListNewsSection: FC<Props> = () => {
    return (
        <Box component="section" mt={4}>
            <Grid container spacing={2}>
                {
                    Array.from(new Array(8)).map((news, i) => (
                        <Grid item xs={12} sm={6} key={i * 4}>
                            <Card>
                                <NextLink href={`/categoria/${`baloncesto`}/${'equipo-de-baloncesto-sala-gano'}`}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://picsum.photos/1920/1080"
                                        alt="test"
                                    />
                                </NextLink>
                                    <CardContent>
                                        <NewsCard direction="column-reverse" showImage={false} />
                                    </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}