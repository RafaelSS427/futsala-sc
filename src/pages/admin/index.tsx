import { AdminLayout } from '@/components'
import { OptionsSection, NewsListSection } from '@/screens/admin'

//TODO: Add the delete and edit buttons in the news card
const AdminHomePage = () => {

    return (
        <AdminLayout title="Dashboard">
            <OptionsSection />

            <NewsListSection />
        </AdminLayout>
    )
}


export default AdminHomePage