import "./Home.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Home = () => {
  return (
    <>
    <div className="cards">
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img className="card-img" src={require('../home/1.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/2.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/3.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/4.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/5.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/6.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/7.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/8.jpg')}/></SwiperSlide>
        <SwiperSlide><img className="card-img" src={require('../home/9.jpg')}/></SwiperSlide>
      </Swiper>
    </div>
    <article className="article-container">
        <h2>Welcome to Go-Style !</h2>
        <article className="article-inner">
        <li>
          <p>Welcome to our fashion website, where style meets comfort! We are proud to offer you the latest trends in clothing, 
          shoes, and accessories that will help you express your unique personality and boost your confidence. From elegant dresses 
          to casual denim, we have everything you need to create your perfect outfit. Our collection features a variety of fabrics, 
          prints, and colors that will suit any occasion and any mood. Whether you're looking for something classic or something edgy,
          we have you covered. So, browse our selection and discover your new favorite pieces today!
          </p>
        </li>
        
        </article>
      </article>
    </>
  )
}

export default Home