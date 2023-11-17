import React, { useState, useEffect } from "react";
import "./Poster.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiKey = "e3e183dd870b5b10fecdfadc95f0fa17"; // Replace with your actual API key

const Poster = () => {
  const params = useParams();
  const [query, setQuery] = useState(params.movies); // Use params.id as the search query
  const [data, setData] = useState([]);

  const url = "https://api.themoviedb.org/3/search/multi";

  const handleSearch = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          query: query,
          api_key: apiKey,
        },
      });

      setData(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]); // Add query as a dependency to trigger the search when it changes

  useEffect(() => {
    console.log("DATA POSTER: ", data);
  }, [data]); // Add data as a dependency to log it when it changes

  return (
    <div className="poster-container">
      <div
        className="poster-container-img"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500${data.poster_path}')`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%) contrast(100%) saturate(100%)",
        }}
      >
        {/* <img
          src={}
          alt=""
          style={{ objectFit: "cover" }}
        /> */}
      </div>
      <div className="poster-container-filter"></div>
      <div className="main-div">
        <div className="main-div-title">
          <h1>{data.title}</h1>
        </div>
        <div className="main-div-about">
          <div className="director">
            <h2>
              <span>Director</span> : Tatsuya Matsubara
            </h2>
          </div>
          <div className="stars">
            <h2>
              <span>Actors</span> : Mamoru miayano,kana Hanazawa
            </h2>
          </div>
        </div>
        <div className="main-div-description">
          <p>{data.overview}</p>
        </div>
        <div className="main-div-description-rating">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
        </div>
        <div className="main-div-button-controll">
          <button id="play">
            <i class="ri-play-line"></i>
            Play Now
          </button>
          <button id="later">
            <i class="ri-bookmark-line"></i>
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
