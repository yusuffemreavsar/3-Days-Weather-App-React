import React from 'react'
import Search from './Search'
import Weather from './Weather'
import "./styles/Container.css"
function Container() {
  return (
    <div className='Container'>
        <Search/>
        <Weather/>
        </div>
  )
}
export default Container