import { GetServerSideProps, NextPage } from 'next'
import { ArrowLeftOutlined } from '@mui/icons-material'
import { NewsListSection } from '@/screens/admin'
import { AdminLayout, LinkApp } from '@/components'

interface Props {
    query: string;
}

const SearchHomePage: NextPage<Props> = ({ query }) => {
    return (
        <AdminLayout title="Search">
            <LinkApp href="/admin" styles={{ color: ({ palette }) => palette.info.main, display: "inline-flex", alignItems: "center" }}>
                    <ArrowLeftOutlined /> Volver al panel de inicio
            </LinkApp>

            <NewsListSection />
        </AdminLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { query = '' } = ctx.params as { query: string }
    const { categories = '', authors = '' } = ctx.query

    console.log({ query, categories, authors })

    return {
        props: {
            query
        }
    }
}

export default SearchHomePage 