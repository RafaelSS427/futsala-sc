import { CSSProperties, FC } from 'react'
import { Box, Typography } from '@mui/material'
import { Slide } from 'react-slideshow-image'
import { ArrowLeft, ArrowRight } from '@/components'

const divStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover', // or cover
    // backgroundRepeat: 'no-repeat', // "cover" doesn't need this property 
    backgroundPosition: 'center',
    height: '400px'
}

const buttonStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: "50%",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 0
}

interface Props {
    images: string[]
}

export const HeroNewsSection: FC<Props> = ({ images }) => {
    return (
        <Box>
            <Typography variant="h4" fontSize={{ xs: "32px", sm: "42px" }} fontWeight={700} component="h1" mb={2}>El equipo de la sede jugó una triangular frente a educadoras y zoe´s</Typography>
            <Typography variant="h5" component="h2" fontSize={{ xs: "18px", sm: "24px" }} sx={{ color: "#666" }}>El equipo de la sede jugó una triangular frente a educadoras y zoe´s</Typography>

            <Box className="slide-container" mt={4}>
                <Slide
                    easing='ease'
                    duration={7000}
                    indicators={ () => <span className="indicator"/> }
                    prevArrow={
                        <button
                            style={{
                                ...buttonStyle,
                                marginLeft: "5px",
                                padding: "2px 5px 2px 2px"
                            }}>
                            <ArrowLeft />
                        </button>
                    }
                    nextArrow={
                        <button
                            style={{
                                ...buttonStyle,
                                marginRight: "5px",
                                padding: "2px 2px 2px 5px",
                            }}
                        >
                            <ArrowRight />
                        </button>
                    }
                >
                    {
                        images.map((url, i) => (
                            <Box key={i}>
                                <Box style={{ ...divStyle, backgroundImage: `url(${url})` }} />
                            </Box>
                        ))
                    }
                </Slide>
            </Box>
        </Box>
    )
}
