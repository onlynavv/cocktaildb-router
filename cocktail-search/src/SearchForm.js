import React,{useRef,useEffect} from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef()

    const searchDrink = () => {
        setSearchTerm(searchValue.current.value)
    }

    useEffect(() => {
        searchValue.current.focus()
    }, [])

    return (
        <div className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label>Search your favourite cocktail</label>
                    <input type='text' id='name' ref={searchValue} onChange={searchDrink}></input>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
