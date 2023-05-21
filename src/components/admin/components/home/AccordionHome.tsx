import { useState } from 'react'
import { Accordion, AccordionSummary, Stack, Typography, AccordionDetails, Grid, Divider } from '@mui/material'
import { ExpandMoreOutlined, FilterList } from '@mui/icons-material'
import { FilterListHome } from './FilterListHome'

export const AccordionHome = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const onGetFilterCategories = (categories: string[]) => {
        console.log(categories)
    }

    const onGetFilterAuthors = (authors: string[]) => {
        console.log(authors)
    }

    return (
        <Accordion
            elevation={0}
            expanded={isExpanded}
            onChange={() => setIsExpanded(e => !e)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="filter-content"
                id="filter-header"
            >
                <Stack direction="row" spacing={1}>
                    <FilterList />
                    <Typography sx={{ width: '33%' }}>
                        Filtros
                    </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                        <Stack>
                            <Typography variant="button" mb={1} fontWeight={600}>Categoría</Typography>
                            <Divider />
                            <FilterListHome
                                options={['Futbol', 'Boxeo', 'Baloncesto']}
                                onGetFilters={ onGetFilterCategories }
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                        <Stack>
                            <Typography variant="button" mb={1} fontWeight={600}>Autor</Typography>
                            <Divider />
                            <FilterListHome
                                options={['Kevin', 'Rafael', 'Axel']}
                                onGetFilters={ onGetFilterAuthors }
                            />
                        </Stack>
                    </Grid>

                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}