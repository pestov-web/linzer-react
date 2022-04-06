import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Pagination, Navigation } from "swiper";

import { SLIDES } from "../../utils/images";

import("./Slider.scss");

function Slider(props) {
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
          <img src={item.image} />
          <div className="swiper__legend">
            <h3 className="swiper__title">{item.nameRu}</h3>
            <p className="swiper__subtitle">{item.legend}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
