import css from './ImageGallery.module.css'
import { useState } from 'react';

import ImageCard from "./ImageCard"
import ImageModal from "../ImageModal/ImageModal";


function ImageGallery({photos}) {

    const [isOpen, setIsOpen] = useState(false);
    const [imgSrc, setimgSrc] = useState(null);

    const handleModalOpen = (img) => {
        setIsOpen(true)
        setimgSrc(img)
    }

    const handleModalClose = () => {
        setIsOpen(false)
        setimgSrc(null)
    }

    return (
        <div className={css.block}>
            {
                Array.isArray(photos) && 
                photos.map((photo) => {
                    return (
                        <>
                            <ImageCard key={photo.id} src={photo.urls.thumb} onImageClick={() => handleModalOpen(photo.urls.regular)}/>
                        </>
                    )
                })
            }

            {isOpen && <ImageModal imgSrc={imgSrc} isOpen={isOpen} onClose={handleModalClose}/>}
            
        </div>
    )
}

export default ImageGallery