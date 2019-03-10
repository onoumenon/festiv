import React from "react";
import { Card } from "reactstrap";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <div className="d-inline-flex justify-content-between text-right">
          <div>
            <h2>FESTIV</h2>
          </div>
          <div className="d-inline-flex justify-content-between">
            <div style={{ width: "5rem" }}>
              <div>
                <img
                  className="logo-image mb-1"
                  width="20px"
                  src="https://i.imgur.com/C0VSD6w.png"
                  alt="facebook"
                />
              </div>
              <div>
                <img
                  className="logo-image mb-1"
                  width="20px"
                  src="https://i.imgur.com/PglmnVe.png"
                  alt="twitter"
                />
              </div>
              <div>
                <img
                  className="logo-image mb-1"
                  width="20px"
                  src="https://i.imgur.com/ncMDWDO.png"
                  alt="youtube"
                />
              </div>
            </div>
            <div className="content col">
              <a href="https://www.instagram.com/festiv2019/">
                <div className="content-overlay" />
                <img
                  className="content-image"
                  width="100px"
                  src="https://i.imgur.com/5VzlyP2.png"
                  alt="instagram"
                />
                <div className="content-details fadeIn-left">
                  <img
                    className="content-image"
                    width="100px"
                    src="https://i.imgur.com/rirneyp.png"
                    alt="overlay"
                  />
                </div>
              </a>
            </div>
            <div className="content">
              <a href="https://www.instagram.com/festiv2019/">
                <div className="content-overlay" />
                <img
                  className="content-image"
                  width="100px"
                  src="https://i.imgur.com/Cmjd4Q1.png"
                  alt="instagram"
                />
                <div className="content-details fadeIn-left">
                  <img
                    className="content-image"
                    width="100px"
                    src="https://i.imgur.com/rirneyp.png"
                    alt="overlay"
                  />
                </div>
              </a>
            </div>
            <div className="content col">
              <a href="https://www.instagram.com/festiv2019/">
                <div className="content-overlay" />
                <img
                  className="content-image"
                  width="100px"
                  src="https://i.imgur.com/JkmPaCq.png"
                  alt="instagram"
                />
                <div className="content-details fadeIn-left">
                  <img
                    className="content-image"
                    width="100px"
                    src="https://i.imgur.com/rirneyp.png"
                    alt="overlay"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="footer-block">
            <p className="text-white-50">
              © 2019 Festiv. Photos from Unsplash.com. Icons from icon8 and
              flaticon.
            </p>
          </div>
        </div>
      </Card>
    </footer>
  );
}

export default Footer;
