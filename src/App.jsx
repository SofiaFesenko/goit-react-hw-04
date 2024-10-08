import { useEffect, useState } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGalleryAndImageCard/ImageGallery'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from "./components/ImageModal/ImageModal";


function App() {
  const [inputValue, setinputValue] = useState("")
  const [photos, setPhotos] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pages, setPages] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [imgSrc, setimgSrc] = useState(null)

  const handleModalOpen = (img) => {
      setIsOpen(true)
      setimgSrc(img)
  }

  const handleModalClose = () => {
      setIsOpen(false)
      setimgSrc(null)
  }

  const increasePageNumber = () => {
    setPages(pages + 1)
    console.log(pages);
  }


  const onSubmit = (e) => {
    e.preventDefault()
    let inpVal = e.target.elements.headerInput.value
    setinputValue(inpVal)
    setPages(1) 
    console.log(inpVal); 
    
  }

  useEffect(() => {
    async function fetchPhotos() {
    if (!inputValue) return  
    try {
        setisLoading(true)
        const resp = await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${pages}&per_page=30&client_id=7Gk9pS4Ls4uzfEgT6eqkkLXjzZnzPpWTp5toauRn0Mo`)
        setPhotos((prevPhotos) => pages == 1 ? resp.data.results : [...prevPhotos, ...resp.data.results] )
        console.log(resp.data.results);
      }
      catch (error) {
        setError(true)
      }
      finally {
        setisLoading(false)
      }  
    } 
    fetchPhotos()
  }, [inputValue, pages])


  return (
    <>
    <SearchBar onSubmit={onSubmit}/>

    <ImageGallery photos={photos} handleModalOpen={handleModalOpen}/>

    {isLoading && <Loader/>}
    {error && <ErrorMessage/>} 


    {Array.isArray(photos) && (photos.length > 0 ? <LoadMoreBtn page={increasePageNumber}/> : <ErrorMessage/>)}

    {isOpen && <ImageModal imgSrc={imgSrc} isOpen={isOpen} onClose={handleModalClose}/>}

    </>
  )
}

export default App
