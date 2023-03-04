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
    <div className="main-content">
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

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


  <div className = "card1">
    <img src={require('../home/women-stock.jpg')} alt=""/>
    <div class="card-content">
      <h2>
        Women
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio aut hic.
      </p>
      <a href="/women" className="button">
        Find out more
      </a>
    </div>
  </div>


  <div className = "card2">
    <img src={require('../home/men-stock.jpg')} alt=""/>
    <div class="card-content">
      <h2>
        Men
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio aut hic.
      </p>
      <a href="/men" className="button">
        Find out more
      </a>
    </div>
  </div>
  </div>
  </>
  
  )
}

export default Home