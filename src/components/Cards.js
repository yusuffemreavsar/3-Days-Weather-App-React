import React from 'react'
import "./styles/Cards.css"
function Cards({date,mintemp,maxtemp,condition,conditionicon}) {
  return (
    <div className='card'>
        <p>{date}</p>
        <ul>
            <li><img src={conditionicon} alt=''/></li>
            <li><h3>{condition}</h3> </li>
            <li><p>Min Temp. {mintemp} C°</p></li>            
            <li><p>Max Temp. {maxtemp} C°</p></li>            
        </ul>
    </div>
  )
}

export default Cards