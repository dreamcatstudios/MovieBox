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
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Press Room</a>
          </div>
          <div className="copyright">
            <p>MovieBox by DreamcatStudios</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
