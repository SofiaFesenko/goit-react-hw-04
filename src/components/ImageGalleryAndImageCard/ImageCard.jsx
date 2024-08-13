
function ImageCard({src, onImageClick, openmodal}) {
    return (
        <>
            <img src={src} onClick={onImageClick}/>
        </>
        
    )
}

export default ImageCard