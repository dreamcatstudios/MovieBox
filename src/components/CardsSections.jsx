import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Card from "./Card"
import "./CardsSections.css"
const CardsSections = () => {
    const movieData = useContext(MovieContext)
  return (
    <div id="page2">
        <h1 id = "head">Top Shows</h1>
        <div id = "page2-card-container">
        {
            movieData.map((elem, index)=>{
            return index < 8 &&  (<Card key={index} elem = {elem}/>)
            })
        }
        </div>
      </div>
  )
}

export default CardsSections