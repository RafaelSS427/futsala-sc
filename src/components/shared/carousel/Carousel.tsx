import { FC, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Fab } from '@mui/material'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { DotButton, NextButton, PrevButton } from './CarouselArrowButtons'

type Slide = {
    name: string,
    url: string
} | string

interface Props {
    slides: Slide[];
    options?: EmblaOptionsType;
    removeFile?: (name: string) => void;
    isAdmin?: boolean;
}

export const Carousel: FC<Props> = ({ slides, options, removeFile, isAdmin = false }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({
        delay: 5000,
        stopOnMouseEnter: true
    })])
    
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const handleScrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )

    const handleScrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    const handleScrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])

    const handleDelete = (name: string) => {
        if (!removeFile) return;
        removeFile(name)
    }

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <div style={{ position: "relative" }}>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((image, index) => (
                            <div className="embla__slide" key={index}>
                                {
                                    isAdmin ? (
                                        <div className="embla__slide__number">
                                            <Fab
                                                color="error"
                                                size="small"
                                                onClick={() => handleDelete(typeof (image) === "string" ? image : image.name)}
                                            >
                                                <DeleteOutlineOutlined />
                                            </Fab>
                                        </div>
                                    ) : null
                                }

                                <img
                                    className="embla__slide__img"
                                    src={typeof (image) === "string" ? image : image.url}
                                    alt="Your alt text"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <PrevButton onClick={handleScrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={handleScrollNext} enabled={nextBtnEnabled} />
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => handleScrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}