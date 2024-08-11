import ImageCard from "./ImageCard"

function ImageGallery({photos}) {
    return (
        <div>
            {
                Array.isArray(photos) && 
                photos.map((photo) => {
                    return (
                        <>
                            <ImageCard key={photo.id} src={photo.urls.thumb}/>
                        </>
                    )
                })
            }
            
        </div>     
    )
}

export default ImageGallery