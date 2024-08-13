import { useState } from "react";
import ImageModal from "../Modal/ImageModal";

function ImageCard({src, openmodal}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(true)        
    }

    const handleModalClose = () => {
        setIsOpen(false)
    }



    return (
        <>
            <img src={src} onClick={() => {
                handleModalOpen()
                console.log(openmodal)
            }
            }/>
            {isOpen && <ImageModal imgSrc={openmodal} isOpen={isOpen} onClose={handleModalClose}/>}
        </>
        
    )
}

export default ImageCard