import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

const apiKey = "e3e183dd870b5b10fecdfadc95f0fa17"; // Replace with your actual API key
const baseUrl = "https://api.themoviedb.org/3/tv/popular";

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const handleSearch = async (url) => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
        },
      });

      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch(baseUrl);
  }, []);

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

// export const useMovieData = () => {
//   return useContext(MovieContext);
// };

export { MovieContext };
