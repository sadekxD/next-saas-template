"use client";

import React, { useCallback, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Icons } from "./icons";

export default function Slider({ children }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <Swiper
        ref={sliderRef}
        modules={[Navigation]}
        spaceBetween={24}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pt-12 !md:pt-16 !pb-6"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide className="!w-fit" key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end gap-6">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-white border"
        >
          <Icons.arrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-white border"
        >
          <Icons.arrowRight />
        </button>
      </div>
    </div>
  );
}
