import { createContext,useState,useContext } from "react";
const SearchContext=createContext();

export const SearchProvider=({children})=>{
    const[cityInput,SetCityInput]=useState("Ankara")
    const inputChange=(e)=>{
        SetCityInput(e.target.value)
        
    }
    const values={cityInput,SetCityInput,inputChange}
    
    return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
}

export const useSearch=() =>useContext(SearchContext)