import Image from 'next/image'
import { Grid, Stack, Typography, Avatar, Chip, Box, Divider } from "@mui/material"
import { FC } from 'react';

interface Props {
    showImage?: boolean;
    showTag?: boolean;
    isPriority?: boolean;
    direction?: 'row' | 'column-reverse';
    showDivider?: boolean
}

export const NewsCard: FC<Props> = ({ direction = 'row', isPriority = false, showImage = true, showTag = false, showDivider = false }) => {
    return (
        <>
            <Grid container spacing={2} flexDirection={direction}>
                <Grid item xs={12} md={(showImage && direction === 'column-reverse') ? 12 : !showImage ? 12 : 6}>
                    <Stack height="100%" justifyContent="center" rowGap={2}>
                        <Typography
                            variant="h6"
                            fontWeight={700}
                            component="h1"
                        >
                            El equipo de la sede jugó una triangular frente a educadoras y zoe´s
                        </Typography>

                        <Stack direction="row" columnGap={1}>
                            <Avatar alt="Rafael Sequeira" src="/avatar-development-mode.jpg" />
                            <Stack>
                                <Typography className='body-color' variant='caption'>Rafael Sequeira</Typography>
                                <Typography className='body-color' variant='button' fontSize={10}>22/04/2023 17:02</Typography>
                            </Stack>
                        </Stack>

                        <Typography className='body-color' variant='body1'>
                            Lorem ipsum dolor sit amet consectetur. Tempor et convallis arcu sagittis amet tempor pretium egestas porttitor. Molestie consequat ac dolor pulvinar fermentum non.
                        </Typography>

                        {
                            showTag && (
                                <Stack direction="row" gap={2}>
                                    <Chip label="Futbol" variant="outlined" />
                                </Stack>
                            )
                        }

                    </Stack>

                </Grid>

                {
                    showImage && (
                        <Grid item xs={12} md={(showImage && direction === 'column-reverse') ? 12 : 6}>
                            <Box position="relative" width="100%" height="300px">
                                <Image
                                    src="https://picsum.photos/1920/1080"
                                    alt="test"
                                    fill
                                    priority={isPriority}
                                    sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                    style={{
                                        objectFit: "contain"
                                    }}
                                />
                            </Box>
                        </Grid>
                    )
                }
            </Grid>
            {
                showDivider && (
                    <Divider sx={{ mt: 5, mb: !showImage ? 5 : 0 , display:{ sm: "block", md: "none" } }} />
                )
            }
        </>
    )
}
