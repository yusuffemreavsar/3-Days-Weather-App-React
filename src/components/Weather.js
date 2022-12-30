import Cards from './Cards'
import { useWeather } from '../Context/WeatherContext'

import "./styles/Weather.css"

function Weather() {
  const {weatherData,cityName}=useWeather()
  

  console.log(weatherData)

  return (
    <div className='weather'>
      {cityName ==="" && <div className='opening'><h2>Weather App</h2>
      <h3>3 days weather</h3></div>}
      <h1>{cityName}</h1>        
      {weatherData.map((item)=>(<Cards key={item.date}  date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} conditionicon={item.day.condition.icon}></Cards>))}      
    </div>
  )
}

export default Weather