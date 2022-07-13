import React, { useRef, useState } from "react";
import product from "./ProductAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

const Product = () => {
  return (
    <>
      <div className="section-product uk-section uk-position-relative">
        <h2 className="uk-text-center uk-text-bold">
          <span style={{ color: "#e76900" }}>Top</span>
          <span style={{ color: "#0b0b45" }}>selling</span>
        </h2>

        <div className="uk-container">
          <Swiper
            className="mySwiper"
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              type: "progressbar",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            uk-scrollspy="cls: uk-animation-fade; target: .swiper-slide; delay: 300; repeat: false"
          >
            {product.map((props) => {
              const {
                id,
                image,
                discount,
                productName,
                categoryName,
                price,
                discountedPrice,
              } = props;
              return (
                <SwiperSlide key={id}>
                  <div className="product">
                    <div className="uk-position-relative">
                      <a href="#" className="product-img">
                        <img src={image} alt="" />
                      </a>
                      <div className="discount">
                        <p>{discount}</p>
                      </div>
                      <div className="wishlist">
                        <a
                          href="#"
                          uk-icon="icon: heart"
                          title="Add to wishlist"
                        ></a>
                      </div>
                      <div className="cart">
                        <a
                          href="#"
                          uk-icon="icon: cart"
                          title="Add to cart"
                        ></a>
                      </div>
                    </div>
                    <div className="uk-flex uk-flex-between uk-padding-small">
                      <div className="name">
                        <p>{productName}</p>
                        <p>{categoryName}</p>
                      </div>
                      <div className="price">
                        <p>{price}</p>
                        <p>{discountedPrice}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Product;
