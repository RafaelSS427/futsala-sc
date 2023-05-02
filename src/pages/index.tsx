import { NextPage } from 'next'
import { ClientLayout } from '@/components'
import { HeroSection, ListNewsCatSection } from '@/screens'

const HomePage:NextPage = () => {
  return (
    <ClientLayout
      title="Inicio"
      description="Cubrimos el deporte de Futsal de la sede del Caribe"
    >
      <HeroSection />
      <ListNewsCatSection title="Baloncesto" />
      <ListNewsCatSection title="Futbol" />
    </ClientLayout>
  )
}

export default HomePage