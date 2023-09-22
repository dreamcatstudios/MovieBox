import React, { useContext} from "react";
import "./Homepage.css";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import CardsSections from "../components/CardsSections";
const Homepage = () => {
  const movieData = useContext(MovieContext);
  console.log("Movie Data: ", movieData);
  return (
    <>
      <section className="section-hero">
        <header>
          <nav className="navbar">
            <div className="logo-container">
              <img src="/src/assets/tv.png" alt="" />
              <span>MovieBox</span>
            </div>
            <div>
              <input
                type="text"
                name=""
                className="input-field"
                placeholder="What do you want to watch?"
              />
            </div>
            <div>
              <button className="btn-header">Sign In</button>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="content-hero">
            <div>
              <div>
                <h1 className="heading">John Wick 3: Parabellum</h1>
              </div>
              <div className="review-sites">
                {/* REVIEW SECTION */}
                <div>
                  <img
                    src="/src/assets/imdb.png"
                    alt=""
                    className="logo-long"
                  />
                  <p>8.6/100</p>
                </div>
                <div>
                  <img src="/src/assets/rotten.png" alt="" className="logo" />
                  <p>8.6/100</p>
                </div>
                {/* REVIEW SECTION */}
              </div>
              <div>
                <p className="content-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam nulla ratione perspiciatis. Repellendus,
                  consequuntur. Quidem iste incidunt, libero temporibus,
                  provident repellat autem consectetur id accusantium pariatur
                  error distinctio, deleniti aperiam?
                </p>
              </div>
              <div>
                <button className="btn">Watch Trailer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardsSections/>
    </>
  );
};

export default Homepage;
