import { AdminLayout } from '@/components'
import { OptionsSection, NewsListSection } from '@/screens/admin'

const AdminHomePage = () => {

    return (
        <AdminLayout title="Dashboard">
            <OptionsSection />

            <NewsListSection />
        </AdminLayout>
    )
}


export default AdminHomePage