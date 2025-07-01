import { useState } from "react";
import "./App.css";
import logo from "../src/assets/hamburger.svg";
import naruto from "../src/assets/naruto.png";

// Import CSS swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards  } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-cards';

//import react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true
  };

  return (
    <>
      <div id="navigation" className="relative">
        <div className="satu flex p-2 justify-between">
          <div id="kotak_satu" className="flex w-90">
            <img src={logo} alt="logo" className=" w-8 h-8 self-center mr-1" />
            <input
              type="text"
              autocorrect="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4 self-center"
              placeholder="Search..."
            />
          </div>

          <label
            htmlFor="check"
            className="bg-gray-100 w-10 h-5  rounded-full relative cursor-pointer self-center border"
          >
            <input type="checkbox" id="check" className="sr-only peer" />
            <span className="w-3 h-3 bg-rose-300 absolute rounded-full left-1 top-1/2 -translate-y-1/2  peer-checked:bg-rose-600 peer-checked:translate-x-2.5 transition-all duration-500"></span>
          </label>
        </div>

        <div className="dua w-1/2 bg-amber-300 h-[65vh] flex flex-col justify-evenly absolute items-center z-10 hidden">
          <a href="">Home</a>
          <a href="">Anime List</a>
          <a href="">Comic</a>
          <a href="">Jadwal Rilis</a>
          <a href="">Bookmark</a>
          <a href="">History</a>
          <a href="">Login / Register</a>
        </div>
      </div>

      <div id="highRate" className="mt-5 z-5">
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={naruto} alt="" className=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={naruto} alt="" className=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={naruto} alt="" className=""/>
          </SwiperSlide>
          {/* Tambah slide lainnya */}
        </Swiper>
      </div>

      <div id="rekomendasiDariAdmin" className="relative slider-container mt-6 px-6.5 z-5 pt-9 bg-[#1c1d1f]">
        <h3 className="absolute z-10 top-1 left-4 text-base text-white font-thin font-mono font-stretch-semi-expanded">REKOMENDASI</h3>
        <hr className="absolute top-8 left-0 w-full h-px bg-[#ffffff] z-10 border-0" />
        <Slider {...settings} className="z-5 mt-3">
          <div className="w-1/2">
            <img src={naruto} alt="" className="aspect-[9/16] object-cover p-1"/>
            <p>bagaimana cara  menggunakan</p>
          </div>
          <div className="w-1/2">
            <img src={naruto} alt="" className="aspect-[9/16] object-cover p-1"/>
          </div>
          <div className="w-1/2">
            <img src={naruto} alt="" className="aspect-[9/16] object-cover p-1"/>
          </div>
        </Slider>
      </div>

      <div id="badan">
        <div id="satu">
          <div id="new_update"></div>
        </div>

        <div id="dua">
          <div id="history"></div>
          <div id="chat"></div>
        </div>
      </div>

      <div id="movie" className=""></div>

      <div id="footer"></div>
    </>
  );
}

export default App;
