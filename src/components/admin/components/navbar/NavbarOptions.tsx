import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { DashboardOptions } from './DashboardOptions'
import { CreateOptions } from './CreateOptions'

export const NavbarOptions = () => {
  const router = useRouter()

  const currentPage = useMemo(() => {
    return router.pathname.split('/').slice(-1)[0]
  }, [router])

  return (
    <>
        {
          (() => {
            switch(currentPage){
              case 'create':
                return <CreateOptions title="Crear noticia" />
              default:
                return <DashboardOptions />
            }
          })()
        }
    </>
  )
}
