import React from "react";
import { ThemeMobileCss, MobileSwiperCss } from "./style";
import MobileSwiper from "./MobileSwiper";

export default function ThemeMobile() {
  return (
    <ThemeMobileCss className="bg-black">
      <div className="container position-relative ">
        <div className="murasaki position-absolute">
          <div className="mask position-relative w-100 h-100"></div>
        </div>
        <h2 className="text-center themeTitle" dataStorke="年度最強合作">
          年度最強合作
        </h2>
        <h2 className="text-center themeTitle" dataStorke="三大主題來襲">
          三大主題來襲
        </h2>
        <p className="text text-black text-center position-relative">
          The F2E 活動網站設計
        </p>
        <p className="text text-black text-center position-relative">
          今晚，我想來點點簽
        </p>
        <p className="text text-black text-center position-relative">
          Scrum 新手村
        </p>
        <MobileSwiperCss >
          <MobileSwiper />
        </MobileSwiperCss>
      </div>
    </ThemeMobileCss>
  );
}
