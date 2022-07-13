import React from "react";

const Testimonial = () => {
  return (
    <>
      <div
        className="section-testimonial"
        uk-scrollspy="cls: uk-animation-fade; target: .testimonial; delay: 300; repeat: true"
      >
        <div className="testimonial uk-container">
          <div className="testimonial-img">
            <img src="images/founder-img.png" alt="" />
          </div>

          <div className="testimonial-text uk-padding">
            <img src="images/quote-icon.png" alt="" style={{ width: "50px" }} />
            <p className="uk-width-1-2@m">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem has been the industry's standrad dummy text ever
              since the 1500s.
            </p>
            <p
              className="uk-text-bold uk-margin-remove-bottom"
              style={{ fontSize: "24px" }}
            >
              -Founder
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
