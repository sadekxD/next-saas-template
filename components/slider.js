"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Slider({ children }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop
      loopedSlides={4}
      centeredSlides
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide className="!w-fit" key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
