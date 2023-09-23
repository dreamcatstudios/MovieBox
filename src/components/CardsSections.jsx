import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "./Card";
import "./CardsSections.css";

const CardsSections = () => {
  const {
    data,
    searchTrendingMovies,
    searchTrendingShows,
    searchUpcomingMovies,
  } = useContext(MovieContext);

  const [activeType, setActiveType] = useState("movies"); // Initialize with the default active type

  const handleButtonClick = (type) => {
    setActiveType(type); // Set the active type when a button is clicked

    // Call the appropriate search function based on the button clicked
    if (type === "movies") {
      searchTrendingMovies();
    } else if (type === "shows") {
      searchTrendingShows();
    } else if (type === "upcoming") {
      searchUpcomingMovies();
    }
  };

  return (
    <div id="page2">
      <div className="button-container">
        <div>
          <button
            onClick={() => handleButtonClick("movies")}
            className={`change-search-button ${
              activeType === "movies" ? "active" : ""
            }`}
          >
            Top Movies
          </button>
          <div
            className={`span-underline ${
              activeType === "movies" ? "active" : ""
            }`}
          ></div>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("shows")}
            className={`change-search-button ${
              activeType === "shows" ? "active" : ""
            }`}
          >
            Top Shows
          </button>
          <div
            className={`span-underline ${
              activeType === "shows" ? "active" : ""
            }`}
          ></div>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("upcoming")}
            className={`change-search-button ${
              activeType === "upcoming" ? "active" : ""
            }`}
          >
            Top Upcoming
          </button>
          <div
            className={`span-underline ${
              activeType === "upcoming" ? "active" : ""
            }`}
          ></div>
        </div>
      </div>

      <div id="page2-card-container">
        {data.map((elem, index) => {
          return (
            index < 8 && <Card key={index} elem={elem} type={activeType} />
          );
        })}
      </div>
    </div>
  );
};

export default CardsSections;
