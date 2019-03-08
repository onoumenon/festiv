import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-block text-center">
          <p>
            © 2019 Festiv. Photos from Unsplash.com, Icons from icon8.{" "}
            <img src="icons/facebook.svg" width="18px" alt="facebook" />
            <img src="icons/twitter.svg" width="18px" alt="twitter" />
            <img src="icons/youtube.svg" width="18px" alt="youtube" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
