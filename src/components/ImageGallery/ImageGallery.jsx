import css from './ImageGallery.module.css'
import ImageCard from "./ImageCard"

function ImageGallery({photos}) {
    return (
        <div className={css.block}>
            {
                Array.isArray(photos) && 
                photos.map((photo) => {
                    return (
                        <>
                            <ImageCard key={photo.id} src={photo.urls.thumb} openmodal={photo.urls.regular}/>
                        </>
                    )
                })
            }
            
        </div>     
    )
}

export default ImageGallery