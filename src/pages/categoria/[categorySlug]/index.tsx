import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { capitalize } from '@mui/material'

import { ClientLayout, SectionTitle } from '@/components'
import { getCategoriesByName } from '@/database'
import { ListNewsSection } from '@/screens'

interface Props {
    slug: string
}

const CategorySlugPage: NextPage<Props> = ({ slug }) => {
    return (
        <ClientLayout
            title={capitalize(slug)}
            description={`Resultados para la categoria de ${ slug }`}
        >
            <SectionTitle title={ capitalize(slug) } />
            <ListNewsSection />
        </ClientLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const paths = getCategoriesByName().map(e => ({
        params: { categorySlug: e }
    }))

    return {
        paths,
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