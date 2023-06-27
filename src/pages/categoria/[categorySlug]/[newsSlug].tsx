import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box, capitalize } from '@mui/material'

import { Carousel, ClientLayout, DividerApp } from '@/components'
import { getAllNewsBySlugXCategory } from '@/database'
import { DetailNewsSection, HeroNewsSection, LastestNewsSection } from '@/screens'

interface Props {
    slug: string
}

const NewsSlugPage: NextPage<Props> = ({ slug }) => {
    return (
        <ClientLayout
            title={capitalize(slug)}
            description={`Acá irá la descripción de la noticia que viene desde el objeto ${slug}`}
        >
            <HeroNewsSection>
                <Carousel
                    slides={['https://picsum.photos/1920/1080', 'https://picsum.photos/1920/1080', 'https://picsum.photos/800/800']}
                    options={{
                        loop: true
                    }}
                />
            </HeroNewsSection>

            <Box my={3}>
                <DividerApp />
            </Box>
            <DetailNewsSection />
            <LastestNewsSection />
        </ClientLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const paths = getAllNewsBySlugXCategory().map(e => ({
        params: { categorySlug: e.categoryName, newsSlug: e.newsSlug }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { newsSlug = '' } = params as { newsSlug: string }

    return {
        props: {
            slug: newsSlug
        }
    }
}

export default NewsSlugPage