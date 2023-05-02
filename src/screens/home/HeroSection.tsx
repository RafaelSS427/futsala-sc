import { NewsCard } from '@/components'
import { Avatar, Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// The sections will took this nomenclature = [SectionName]Section
export const HeroSection = () => {
  return (
    <Box component="section">

      <NewsCard showTag isPriority />

    </Box>
  )
}