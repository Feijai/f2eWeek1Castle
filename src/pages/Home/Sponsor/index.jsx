import React, { useState } from 'react'
import { SponsorCss } from './style'
import kdan from '../../../assets/kdan.png'
import kdanHome from '../../../assets/kdanHome.png'
import tetan from '../../../assets/tetan.png'
import tetanHome from '../../../assets/tetanHome.png'
import block from '../../../assets/block.png'
import blockHome from '../../../assets/blockHome.png'
import SponsorCard from './SponsorCard'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

//記得要引入
import "swiper/swiper-bundle.css";

const data = [
    { home: kdanHome, logo: kdan, name: '凱鈿科技' },
    { home: tetanHome, logo: tetan, name: '鈦坦科技' },
    { home: blockHome, logo: block, name: '版塊設計' },
]


const Sponsor = () => {
    const [paginationRef, setPaginationRef] = useState(null);

    return (
        <>
            <SponsorCss>
                <div className='dCenter'>
                    <div className='title position-relative'>
                        <p className='position-absolute pCenter'>贊助單位</p>
                    </div>
                </div>
                <Swiper 
                    // loop={true}
                    initialSlide={1}
                    grabCursor={true}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={-120}
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
                    style={{marginTop:'57px'}}
                >
                    {data.map((ele, idx) =>
                    (
                        <SwiperSlide key={idx} ><SponsorCard {...ele} /></SwiperSlide>
                    )
                    )}
                </Swiper>
            </SponsorCss>
            <Footer />
        </>
    )
}


export default Sponsor