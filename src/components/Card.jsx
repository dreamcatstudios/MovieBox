import React from 'react'
import "./Card.css"
const Card = ({elem}) => {
    return (
    <div className="card-container">
      <div className="like">
        <i class="ri-heart-fill"></i>
      </div>
      <div className="card-container-image">
        <img src = {`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`} alt=""/>
      </div>
      <div className="card-container-info">
          <div className="date-time-format">
            <p>{elem.first_air_date} {elem.origin_country}</p>
          </div>
          <div className="card-container-info-title">
            <h1>{elem.name}</h1>
          </div>
          <div className="card-container-info-rating">
            <div className="imdb">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOsNvcZKUcfBrsNSE0aNtXoxLaLmuIYfjh7sNsPlww&s" alt="" />
              <p>{elem.vote_average}/10</p>
            </div>
            <div className="rottenTomato">
              <img src="https://w1.pngwing.com/pngs/601/1011/png-transparent-potato-plum-tomato-film-film-criticism-rotten-tomatoes-android-review-bush-tomato.png" alt="" />
              <p>{elem.vote_average*10}%</p>
            </div>
          </div>
          <div className="card-container-info-genre">
            <p>Action Adventure Horror</p>
          </div>
      </div>
    </div>
  )
}

export default Card