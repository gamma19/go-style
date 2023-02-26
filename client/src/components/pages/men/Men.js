import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Men.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const Men = () => {
  return (
    <>
    <div className="slide-page">
        <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
            clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img className="card-img" src={require('../men/1.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/2.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/3.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/4.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/5.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/6.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/7.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/8.jpg')}/></SwiperSlide>
            <SwiperSlide><img className="card-img" src={require('../men/9.jpg')}/></SwiperSlide>
            </Swiper>
    </div>
    </>
  )
}

export default Men