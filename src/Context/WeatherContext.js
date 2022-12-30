import { createContext,useContext,useState} from "react";

const WeatherContext=createContext();
export const WeatherProvider=({children})=>{
    const APP_KEY="414bfeb15f4f4838b57182401222612"
    
    const[weatherData,SetWeatherData]=useState([])
    const[cityName,SetCityName]=useState("")
    async function getData(city){
       const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
       const result=await data.json()
       SetWeatherData(result.forecast.forecastday)
       SetCityName(result.location.name)
       console.log(result.forecast.forecastday)
       console.log(result.location.name)
      }
     const values={weatherData,SetWeatherData,getData,cityName}
     
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}


export const useWeather=()=>useContext(WeatherContext)