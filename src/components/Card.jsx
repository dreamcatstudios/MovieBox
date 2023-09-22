import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className="card-container">
      <div className="like">
        <i class="ri-heart-fill"></i>
      </div>
      <div className="card-container-image">
        <img src="https://rukminim2.flixcart.com/image/850/1000/jr3t5e80/poster/a/w/f/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcww8v99r4qhh.jpeg?q=20" alt="" />
      </div>
      <div className="card-container-info">
          <div className="date-time-format">
            <p>USA 2016-CURRENT</p>
          </div>
          <div className="card-container-info-title">
            <h1>Stranger Thing</h1>
          </div>
          <div className="card-container-info-rating">
            <div className="imdb">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOsNvcZKUcfBrsNSE0aNtXoxLaLmuIYfjh7sNsPlww&s" alt="" />
              <p>8.5/10</p>
            </div>
            <div className="rottenTomato">
              <img src="https://w1.pngwing.com/pngs/601/1011/png-transparent-potato-plum-tomato-film-film-criticism-rotten-tomatoes-android-review-bush-tomato.png" alt="" />
              <p>97%</p>
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