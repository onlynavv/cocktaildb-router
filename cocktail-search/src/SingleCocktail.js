import React,{useEffect,useState} from 'react'
import { Link,useParams } from "react-router-dom";
import Loading from './Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams()

    const [loading,setLoading] = useState(false)
    const [cocktail,setCocktail] = useState()

    const fetchInfo = async() => {
        try{
        setLoading(true)
        const resp = await fetch(`${url}${id}`)
        const drinkInfo = await resp.json()
        console.log(drinkInfo)
        const {drinks} = drinkInfo
        if(drinks){
            const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = drinks[0]
            const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
            const newCocktail = {name,image,info,category,glass,instructions,ingredients}
            setCocktail(newCocktail)
        }
        else{
            setCocktail(null)
        }
        setLoading(false)
        }
        catch(error){
            console.log('error')
        }
        
    }

    useEffect(()=>{
        fetchInfo()
    },[id])

    if(loading){
        return <Loading />
    }

    if(!cocktail){
        return <h2 className='section-title'>No cocktail to display</h2>
    }
    const {name,image,info,category,instructions,glass,ingredients} = cocktail
    return (
        <div className='section cocktail-section'>
            <Link to='/'>Go back to home</Link>
            <h1 className='section-title'>{name}</h1>
            <img src={image} alt={name}></img>
            <div className='drink-info'>
                <p>
                    <span className='drink-data'>name:</span>
                    {name}
                </p>
                <p>
                    <span className='drink-data'>info:</span>
                    {info}
                </p>
                <p>
                    <span className='drink-data'>category:</span>
                    {category}
                </p>
                <p>
                    <span className='drink-data'>glass:</span>
                    {glass}
                </p>
                <p>
                    <span className='drink-data'>instructions:</span>
                    {instructions}
                </p>
                <p>
                    <span className='drink-data'>ingredients:</span>
                    {ingredients.map((item,index)=>{
                            return item ? <span key={index}>{item}</span> : null
                    })}
                </p>
            </div>
        </div>
    )
}

export default SingleCocktail
