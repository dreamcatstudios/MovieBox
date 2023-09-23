import React, { useContext } from "react";
import "./Homepage.css";
import { MovieContext } from "../context/MovieContext";
import CardsSections from "../components/CardsSections";
import Footer from "../components/Footer";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";

const Homepage = () => {
  const movieData = useContext(MovieContext);
  console.log("Movie Data: ", movieData.data);
  return (
    <>
      <section className="section-hero">
        <header>
          <nav className="navbar">
            <div className="logo-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/tv.png?alt=media&token=bd76ae19-568f-418d-b5ff-5bd2724e451a"
                alt=""
              />
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
              <button
                onClick={() => signOut(auth)}
                style={{ margin: "0" }}
                className="btn-header"
              >
                Sign Out
              </button>
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
                    src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/imdb.png?alt=media&token=25d6b1bd-483a-4309-8101-e616315eb32e"
                    alt=""
                    className="logo-long"
                  />
                  <p style={{ margin: "0" }}>8.6/100</p>
                </div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/rotten.png?alt=media&token=96dd342d-9a9f-4569-a988-4113e2a6dab8"
                    alt=""
                    className="logo"
                  />
                  <p style={{ margin: "0" }}>96%</p>
                </div>
                {/* REVIEW SECTION */}
              </div>
              <div>
                <p className="content-para">
                  John Wick is on the run after killing a member of the
                  international assassins' guild, and with a $14 million price
                  tag on his head, he is the target of hit men and women
                  everywhere.
                </p>
              </div>
              <div>
                <button className="btn">
                  <i class="ri-live-line"></i>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardsSections />
      <Footer />
    </>
  );
};
export default Homepage;
