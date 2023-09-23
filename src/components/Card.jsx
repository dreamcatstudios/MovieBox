import React, { useState, useEffect } from "react";
import "./Card.css";
const Card = ({ elem, type }) => {
  const genre = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
  };

  const [name, setName] = useState("");

  useEffect(() => {
    type === "shows" ? setName("name") : setName("title");
  }, [type]);

  return (
    <div className="card-container">
      <div className="like">
        <i class="ri-heart-fill"></i>
      </div>
      <div className="card-container-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="card-container-info">
        <div className="date-time-format">
          <p>
            {elem.first_air_date} {elem.origin_country}
          </p>
        </div>
        <div className="card-container-info-title">
          <h1>{elem[name]}</h1>
        </div>
        <div className="card-container-info-rating">
          <div className="imdb">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGOsNvcZKUcfBrsNSE0aNtXoxLaLmuIYfjh7sNsPlww&s"
              alt=""
            />
            <p>{Number(elem.vote_average).toFixed(2)}/10</p>
          </div>
          <div className="rottenTomato">
            <img
              src="https://w1.pngwing.com/pngs/601/1011/png-transparent-potato-plum-tomato-film-film-criticism-rotten-tomatoes-android-review-bush-tomato.png"
              alt=""
            />
            <p>{Math.floor(elem.vote_average * 10)}%</p>
          </div>
        </div>
        <div className="card-container-info-genre">
          <p>
            {elem &&
              elem.genre_ids.map((item, index) => {
                return elem.genre_ids.length === index + 1
                  ? `${genre[item]}`
                  : `${genre[item]}, `;
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
