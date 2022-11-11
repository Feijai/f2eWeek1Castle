import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ThemeMobileCard from "./ThemeMobileCard";
import w1 from "../../../assets/w1.png";
import w2 from "../../../assets/w2.png";
import w3 from "../../../assets/w3.png";
//記得要引入
import "swiper/swiper-bundle.css";

const data = [
  {
    img: w1,
    theme: "視差滾動",
    title: "The F2E 活動網站設計",
    name: "版塊設計",
  },
  {
    img: w2,
    theme: "Canvas",
    title: "今晚，我想來點點簽",
    name: "凱鈿行動科技",
  },
  {
    img: w3,
    theme: "JS draggable",
    title: "Scrum 新手村",
    name: "鈦坦科技",
  },
];

export default function MobileSwiper() {
  return (
    <Swiper
      loop={true}
      initialSlide={1}
      grabCursor={true}
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={0}
      centeredSlides={true}
      navigation={true}
      modules={[Navigation]}
      className="mobileSwiper"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      }}
      style={{ marginTop: "57px" }}
    >
      {data.map((ele, idx) => (
        <SwiperSlide key={idx}>
          <ThemeMobileCard {...ele} week={idx + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
