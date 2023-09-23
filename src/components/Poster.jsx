import React from 'react'
import "./Poster.css"
const Poster = () => {
  return (
    <div className="poster-container">
        <div className="poster-container-img">
            <img src="https://images2.alphacoders.com/224/224760.jpg" alt="" />
        </div>
        <div className="poster-container-filter"></div>
        <div className="main-div">
            <div className="main-div-title">
                <h1>Stiens;Gate</h1>
            </div>
            <div className="main-div-about">
                <div className="director">
                    <h2><span>Director</span> : Tatsuya Matsubara</h2>
                </div>
                <div className="stars">
                    <h2><span>Actors</span> : Mamoru miayano,kana Hanazawa</h2>
                </div>
            </div>
            <div className="main-div-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sapiente optio libero omnis possimus facere culpa itaque consequatur quibusdam suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, consequatur.</p>
            </div>
            <div className="main-div-description-rating">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
            </div>
            <div className="main-div-button-controll">
                <button id = "play">
                    <i class="ri-play-line"></i>
                    Play Now
                </button>
                <button id = "later">
                    <i class="ri-bookmark-line"></i>
                    Watch Later
                </button>
            </div>
        </div>
    </div>
  )
}

export default Poster
