import React from "react";


const HeroBanner = () => {
  return (
    <>
      <section className="hero-banner uk-position-relative">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slideshow="animation: scale; autoplay: true; min-height: 300; max-height: 600"
        >
          <ul className="uk-slideshow-items">
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                <img
                  src="images/banner-img-1.jpg"
                  alt=""
                  uk-cover="true"
                />
              </div>
              <div className="banner-text">
                <h1 className="animate__animated animate__jackInTheBox animate__slower">
                  Men's <br /> Collection
                </h1>
                <a
                  href="#"
                  className="btn btn-primary uk-text-bold animate__animated animate__backInUp animate__slower"
                >
                  <span></span>Shop Now
                </a>
              </div>
            </li>
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                <img
                  src="images/banner-img-2.jpg"
                  alt=""
                  uk-cover="true"
                />
              </div>
              <div className="banner-text">
                <h1 className="animate__animated animate__rollIn animate__slower">
                  Men's <br /> Collection
                </h1>
                <a
                  href="#"
                  className="btn btn-primary uk-text-bold animate__animated animate__backInUp animate__slower"
                >
                  <span></span>Shop Now
                </a>
              </div>
            </li>
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
                <img
                  src="images/banner-img-3.jpg"
                  alt=""
                  uk-cover="true"
                />
              </div>
              <div className="banner-text">
                <h1
                  style={{ color: "white" }}
                  className="animate__animated animate__rotateInUpLeft animate__slower"
                >
                  Men's
                  <br /> Collection
                </h1>
                <a
                  href="#"
                  className="btn btn-primary uk-text-bold animate__animated animate__backInUp animate__slower"
                >
                  <span></span>Shop Now
                </a>
              </div>
            </li>
          </ul>

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="!#"
            uk-slidenav-previous="true"
            uk-slideshow-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="!#"
            uk-slidenav-next="true"
            uk-slideshow-item="next"
          ></a>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
