import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

export default function App() {
  return (
    <div className="w-full bg-lghtGray py-10">
      <Swiper effect={"cards"} grabCursor={true} className="mySwiper carousel2">
        <SwiperSlide>
          <img className="w-full" src="/imgs/postcard1.png" alt="card" />
          <p className="font-bold text-2xl text-center py-4">Blueberry Skater</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/imgs/postcard2.png" alt="card" />
          <p className="font-bold text-2xl text-center py-4">Blueberry Skater</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/imgs/postcard3.png" alt="card" />
          <p className="font-bold text-2xl text-center py-4">Blueberry Skater</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/imgs/postcard4.png" alt="card" />
          <p className="font-bold text-2xl text-center py-4">Blueberry Skater</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
