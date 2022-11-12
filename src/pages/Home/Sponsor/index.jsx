import React, { useState } from "react";
import kdan from "../../../assets/kdan.png";
import kdanHome from "../../../assets/kdanHome.png";
import tetan from "../../../assets/tetan.png";
import tetanHome from "../../../assets/tetanHome.png";
import block from "../../../assets/block.png";
import blockHome from "../../../assets/blockHome.png";
import Footer from "./Footer";
import SwiperComponent from "./SwiperComponent";
import { SponsorCss } from "./style";
import SponsorCard2 from "./SponsorCard2";

const data = [
    { home: kdanHome, logo: kdan, name: "凱鈿科技" },
    { home: tetanHome, logo: tetan, name: "鈦坦科技" },
    { home: blockHome, logo: block, name: "版塊設計" },
];

const Sponsor = () => {
    const [size, setSize] = useState(
        window.innerWidth >= 1400 ? 3 : window.innerWidth > 996 ? 2 : 1
    );
    const [space, setSpace] = useState(window.innerWidth > 996 ? -120 : 0);
    const [sm, setSm] = useState(window.innerWidth < 576);
    window.addEventListener("resize", (e) => {
        window.innerWidth >= 1400
            ? setSize(3)
            : window.innerWidth > 996
                ? setSize(2)
                : setSize(1);
        window.innerWidth > 996 ? setSpace(-120) : setSpace(0);
        window.innerWidth > 576 ? setSm(false) : setSm(true);
    });
    return (
        <>
            <SponsorCss>
                <div className="dCenter">
                    <div className="title position-relative">
                        <p className="position-absolute pCenter">贊助單位</p>
                    </div>
                </div>
                {sm ? (
                    <div className="container">
                        {data.map((ele, idx) => (
                            <SponsorCard2 {...ele} key={idx} />
                        ))}
                    </div>
                ) : (
                    <SwiperComponent data={data} size={size} space={space} />
                )}
            </SponsorCss>
            <Footer />
        </>
    );
};

export default Sponsor;
