import React,{useState,useContext,useEffect,useCallback} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState('a')
    const [cocktails,setCockTails] = useState([])

    const fetchData = useCallback(async() => {
        setLoading(true)
        try{
            const resp = await fetch(`${url}${searchTerm}`)
            const drinksData = await resp.json();
            // console.log(drinksData)
            const {drinks} = drinksData;
            if(drinks){
                const newDrinks = drinks.map((item)=>{
                    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item
                    return{id:idDrink,name:strDrink,img:strDrinkThumb,info:strAlcoholic,glass:strGlass}
                })
                setCockTails(newDrinks)
            }
            else{
                setCockTails([])
            }
            setLoading(false)
        }
        catch(error){
            console.log('error')
            setLoading(false)
        }
    },[searchTerm])

    useEffect(()=>{
        fetchData()
    },[searchTerm,fetchData])

    return (
        <AppContext.Provider value={{loading,searchTerm,cocktails,setSearchTerm}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}
