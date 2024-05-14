"use client"
import Slider from "react-slick";
import Image from 'next/image';
import {GALLERY_IMAGE_LIST} from "@/lib/constants";

type CarouselProps = {
    defaultSlide?: number;
    handleClose?: () => void;
}

const Carousel = ({defaultSlide, handleClose}: CarouselProps) => {
    const settings = {
        initialSlide: defaultSlide || 0,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container relative">
            <div className="m-2 z-10 h-10 w-10 bg-slate-200 rounded-[20vh] flex justify-center items-center absolute top-0 right-0 cursor-pointer" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </div>
            <Slider {...settings}>
                {GALLERY_IMAGE_LIST.map((image: string) => (<div key={image} className="h-[600px]">
                    <Image
                        alt={`carousel-1`}
                        src={image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full flex-none"
                    />
                </div>))}
            </Slider>
        </div>
    );
}

export default Carousel
