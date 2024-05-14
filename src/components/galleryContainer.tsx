"use client"
import Image from 'next/image';
import {GALLERY_IMAGE_LIST} from "@/lib/constants";
import {useRef, useState} from "react";
import Carousel from "@/lib/ui/Carousel";
import useOutsideClick from "@/lib/hooks/useOutsideClick";

const GalleryContainer = () => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = () => {
        console.log('Clicked outside');
    };

    useOutsideClick(ref, handleClickOutside);
    const [isCarouselVisible, setIsCarouselVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const selectedImageRef = useRef(selectedImage)
    const renderDialog = () => {
        return (
            <div  className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 items-center">
                        <Carousel defaultSlide={selectedImageRef.current} handleClose={() => setIsCarouselVisible(false)}/>
                    </div>
                </div>
            </div>
        )
    }
    const handleImageClick = (value: number) => {
        selectedImageRef.current = value;
        setSelectedImage(value);
        setIsCarouselVisible(true);
    }
    return (
        <>
            <div className="grid grid-cols-4 gap-4 px-8">
                {GALLERY_IMAGE_LIST.map((image: string, index: number) => (
                    <div key={image} className="col-span-1 h-[200px] cursor-pointer" onClick={() => handleImageClick(index)}>
                        <Image
                            alt={`carousel-1`}
                            src={image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-full w-full flex-none"
                        />
                    </div>))}
            </div>
            {isCarouselVisible && renderDialog()}
        </>
    );
}

export default GalleryContainer
