import { NextPage } from 'next'
import { ClientLayout } from '@/components'
import { HeroSection } from '@/screens'

const HomePage:NextPage = () => {
  return (
    <ClientLayout
      title="Inicio"
      description="Cubrimos el deporte de Futsal de la sede del Caribe"
    >
      <HeroSection />
    </ClientLayout>
  )
}

export default HomePage