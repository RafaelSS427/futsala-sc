import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Typography, capitalize } from '@mui/material'

import { ClientLayout } from '@/components'

interface Props {
    slug: string
}

const CategorySlugPage: NextPage<Props> = ({ slug }) => {
    return (
        <ClientLayout
            title={capitalize(slug)}
            description={`Resultados para la categoria de ${ slug }`}
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
                    categorySlug: "baloncesto"
                }
            },
            {
                params: {
                    categorySlug: "futbol"
                }
            },
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { categorySlug = '' } = params as { categorySlug: string }

    return {
        props: {
            slug: categorySlug
        }
    }
}

export default CategorySlugPage