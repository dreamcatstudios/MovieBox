import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/fa-brands_facebook-square.png?alt=media&token=0ae98335-279d-4be2-b8f3-e70ac7425ce4"
              alt=""
              className="brand-logo"
            />
            <img
              className="brand-logo"
              src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/fa-brands_twitter.png?alt=media&token=8005bd3e-24ba-4214-9e63-eddad9f326ec"
              alt=""
              srcset=""
            />
            <img
              className="brand-logo"
              src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/fa-brands_youtube.png?alt=media&token=8d461746-6271-4966-8e98-24a9ca6190d0"
              alt=""
              srcset=""
            />
            <img
              className="brand-logo"
              src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/Vector.png?alt=media&token=b5f7ce20-c44b-447b-b190-947fe00abe6a"
              alt=""
              srcset=""
            />
          </div>
          <div className="terms-conditions">
            <a className="footer-a" href="#">
              Jatin
            </a>
            <a className="footer-a" href="#">
              Harsh
            </a>
            <a className="footer-a" href="#">
              Karan
            </a>
          </div>
          <div className="copyright-container">
            <p className="copyright-para">
              MovieBox by us with ❤️ with React ⚛
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
