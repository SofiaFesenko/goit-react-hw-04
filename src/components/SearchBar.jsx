import toast, { Toaster } from 'react-hot-toast';

function SearchBar({ onSubmit }) {

    const notify = () => toast("Необхідно ввести текст для пошуку зображень.");

    const searchFunctions = (e) => {
        onSubmit(e)
        !e.target.elements.headerInput.value && notify()
    }

    return (
        <header>
            <form onSubmit={searchFunctions}>
                <input
                    type="text"
                    name="headerInput"
                    placeholder="Search images and photos"

                />
                <button type="submit">Search</button>                
            </form>
            <Toaster/>
        </header>
    )
}
  
export default SearchBar