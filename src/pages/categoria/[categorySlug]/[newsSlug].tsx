import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Typography, capitalize } from '@mui/material'

import { ClientLayout } from '@/components'

interface Props {
    slug: string
}

const NewsSlugPage: NextPage<Props> = ({ slug }) => {
    return (
        <ClientLayout
            title={capitalize(slug)}
            description={`Acá irá la descripción de la noticia que viene desde el objeto ${ slug }`}
        >
            <Typography>{ slug }</Typography>
        </ClientLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
        paths: [
            {
                params: {
                    categorySlug: "baloncesto",
                    newsSlug: "equipo-de-futbol-sala-gano"
                }
            }
        ],
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