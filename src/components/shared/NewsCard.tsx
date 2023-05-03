import Image from 'next/image'
import NextLink from 'next/link'

import { Grid, Stack, Typography, Avatar, Chip, Box, Divider } from "@mui/material"
import { FC } from 'react';

interface Props {
    showImage?: boolean;
    showTag?: boolean;
    isPriority?: boolean;
    direction?: 'row' | 'column-reverse';
    showDivider?: boolean;
    imgIsCover?: boolean;
}

export const NewsCard: FC<Props> = ({ direction = 'row', isPriority = false, showImage = true, showTag = false, showDivider = false, imgIsCover = false }) => {
    return (
        <>
            <Grid container spacing={2} flexDirection={direction}>
                <Grid item xs={12} md={(showImage && direction === 'column-reverse') ? 12 : !showImage ? 12 : 6}>
                    <Stack height="100%" justifyContent="center" rowGap={2}>
                        <NextLink
                            href={`/categoria/${`baloncesto`}/${'equipo-de-baloncesto-sala-gano'}`}
                            style={{ color: "inherit", textDecorationLine: "none" }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight={700}
                                component="h1"
                                sx={{
                                    lineHeight: 1.5,
                                }}
                            >
                                El equipo de la sede jugó una triangular frente a educadoras y zoe´s
                            </Typography>

                        </NextLink>

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
                            <NextLink
                                href={`/categoria/${`baloncesto`}/${'equipo-de-baloncesto-sala-gano'}`}
                            >
                                <Box position="relative" width="100%" height={imgIsCover ? "200px" : "300px"}>
                                    <Image
                                        src="https://picsum.photos/1920/1080"
                                        alt="test"
                                        fill
                                        priority={isPriority}
                                        sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                        style={{
                                            objectFit: imgIsCover ? "cover" : "contain"
                                        }}
                                    />
                                </Box>
                            </NextLink>
                        </Grid>
                    )
                }
            </Grid>
            {
                showDivider && (
                    <Divider sx={{ mt: 5, mb: !showImage ? 5 : 0, display: { sm: "block", md: "none" } }} />
                )
            }
        </>
    )
}
