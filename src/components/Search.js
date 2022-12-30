import React from 'react'
import "./styles/Search.css"
import {useSearch} from "../Context/SearchContext"
import { useWeather} from '../Context/WeatherContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
function Search() {
  const {cityInput,inputChange}=useSearch()
  const {getData}=useWeather()
  
  return (
    <div className='search'>
      <div className='con-search'>
         <input type="text"  placeholder='Search a City...' onChange={inputChange} />
        <Button variant="warning" onClick={()=>getData(cityInput)} ><AiOutlineSearch/></Button>
        
        
      </div>
      
      </div>
  )
}

export default Search