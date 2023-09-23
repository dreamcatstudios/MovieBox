import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <img
              src="/src/assets/fa-brands_facebook-square.png"
              alt=""
              className="brand-logo"
            />
            <img
              className="brand-logo"
              src="/src/assets/fa-brands_twitter.png"
              alt=""
              srcset=""
            />
            <img
              className="brand-logo"
              src="/src/assets/fa-brands_youtube.png"
              alt=""
              srcset=""
            />
            <img
              className="brand-logo"
              src="/src/assets/Vector.png"
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
            <p className="copyright-para">MovieBox by us with ❤️ with React ⚛</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
