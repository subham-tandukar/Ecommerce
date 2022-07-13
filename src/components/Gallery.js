import React from "react";
import galleryImage from "./GalleryAPI";

const Gallery = () => {
  return (
    <>
      <div className="section-gallery uk-container uk-section">
        <div className="gallery-bg" uk-lightbox="animation: scale">
          {galleryImage.map((props) => {
            const { id, image } = props;
            return (
              <div className="gallery" key={id}>
                <a className="uk-inline" href={image}>
                  <img
                    src={image}
                    width="1800"
                    height="1200"
                    alt="gallery image"
                  />
                  <p>
                    View image <span uk-icon="icon: image"></span>{" "}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
