import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import SponsorCard from './SponsorCard'

//記得要引入
import "swiper/swiper-bundle.css";


export default function SwiperComponent({data,size,space}) {
    const [paginationRef, setPaginationRef] = useState(null);


  return (

      <Swiper
        // loop={true}
        initialSlide={1}
        grabCursor={true}
        slidesPerView={size}
        slidesPerGroup={1}
        spaceBetween={space}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: paginationRef,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
            <SponsorCard {...ele} />
          </SwiperSlide>
        ))}
      </Swiper>

  );
}
