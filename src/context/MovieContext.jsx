import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

const apiKey = "e3e183dd870b5b10fecdfadc95f0fa17"; // Replace with your actual API key

const trendingMovies = "https://api.themoviedb.org/3/trending/movie/week";
const trendingShows = "https://api.themoviedb.org/3/trending/tv/week";
const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming";

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(trendingMovies);

  const handleSearch = async (url) => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
        },
      });
      console.log("DATA: ", data);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchTrendingMovies = () => {
    setSearch(trendingMovies);
  };

  const searchTrendingShows = () => {
    setSearch(trendingShows);
  };

  const searchUpcomingMovies = () => {
    setSearch(upcomingMovies);
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        data,
        searchTrendingMovies,
        searchTrendingShows,
        searchUpcomingMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };
