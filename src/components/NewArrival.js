import React from "react";

const NewArrival = () => {
  return (
    <>
      <div className="section-new-arrival uk-overflow-hidden">
        <div className="uk-container">
          <div className="uk-child-width-1-3@s uk-flex uk-flex-middle uk-padding uk-padding-remove-horizontal uk-padding-remove-top uk-grid">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 90%;">
              <img
                src="images/new-arrival-img1.png"
                alt="new arrival image"
                uk-scrollspy="cls: uk-animation-kenburns; repeat: false"
              />
            </div>

            <div
              className="uk-text-center"
              uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 90%;"
            >
              <p>
                <span>Men's</span> <br /> New <br /> Arrival
              </p>
              <a href="#" className="btn btn-primary uk-text-bold">
                <span></span>Let's Shop
              </a>
            </div>

            <div uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 90%;">
              <img
                src="images/new-arrival-img2.png"
                alt="new arrival image"
                className="uk-animation-reverse uk-transform-origin-top-right"
                uk-scrollspy="cls: uk-animation-kenburns; repeat: false"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
