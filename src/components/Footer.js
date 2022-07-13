import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="uk-container uk-padding-large uk-padding-remove-bottom uk-margin-large-top">
          <div className="uk-child-width-1-3@s uk-margin-top uk-grid">
            <div className="footer-about">
              <a href="#">
                <img
                  src="images/logo.png"
                  alt="logo"
                  style={{ height: "50px" }}
                />
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem has been the industry's standrad dummy text ever
                since the 1500s, when an unknown printer took a gallery.
              </p>
            </div>

            <div className="footer-quick-links">
              <h3>Quick Links</h3>
              <ul className="uk-list">
                <li>
                  <a href="#">
                    <span uk-icon="icon: chevron-right"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: chevron-right"></span>Terms &
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: chevron-right"></span>Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: chevron-right"></span>Help
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: chevron-right"></span>FAQS
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact-us">
              <h3>Contact Us</h3>
              <ul className="uk-list">
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker fa-2x uk-margin-small-right"></i>
                    Location
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone fa-2x uk-margin-small-right"></i>
                    Contact number
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope fa-2x uk-margin-small-right"></i>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot uk-flex uk-flex-between uk-flex-middle">
            <div className="social-links">
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-twitter"></i>
              </a>
            </div>

            <div className="copyright">
              <span>2022 &copy; copyright@eliteinfotech.com</span>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
