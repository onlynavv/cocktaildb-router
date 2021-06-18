import React from 'react'
import { useGlobalContext } from './context'
import Loading from './Loading'
import Cocktail from './Cocktail'


const CocktailList = () => {
    const {loading,cocktails} = useGlobalContext()
    console.log(cocktails);
    if(loading){
        return <Loading />
    }
    if(cocktails.length < 1){
        return(
            <h2>No cocktails matched your search</h2>
        )
    }

    return (
        <>
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
        </section>
        <div>
            {cocktails.map((item)=>{
                return <Cocktail key={item.id} {...item} />
            })}
        </div>
        </>
    )
}

export default CocktailList
