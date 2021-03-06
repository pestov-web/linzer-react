import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Pagination, Navigation } from "swiper";

import { SLIDES } from "../data/images";

import("../scss/vendors/swiper/Slider.scss");

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      id="home"
    >
      {SLIDES.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={item.nameRu} />
          <div className="swiper__legend">
            <h2 className="swiper__title">{item.nameRu}</h2>
            <p className="swiper__subtitle">{item.legend}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
