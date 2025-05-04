"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const SwiperComponent = ({ items }: { items: Array<{ title: string; desc: string; image: string }> }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <img src={item.image} alt={item.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};