import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Headers from "./Header";
import Castle from "./Castle";
import Lawn from "./Lawn";
import Lawn2 from "./Lawn2";
import Theme from "./Theme";
import { gsap } from "gsap";
import Profession from "./Profession";
import ProfessionMobile from "./ProfessionMobile";
import Sponsor from "./Sponsor";
import F2eSelection from "./F2eSelection";
import Apply from "./Apply";
import Comming from "./Comming";
import ThemeMobile from "./ThemeMobile";
import { HomeCss, PassAnimateCss } from "./style";
import CastleMobile from "./CastleMobile";
import LawnMobile from './LawnMobile'

const Home = () => {
  const lawnRef = useRef();
  const castleRef = useRef();
  const attackRef = useRef();

  const [sm, setSm] = useState(window.innerWidth < 768);
  window.addEventListener("resize", (e) => {
    window.innerWidth > 768 ? setSm(false) : setSm(true);
  });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // attack 圖標
    let ctx2 = gsap.context(() => {
      gsap.to(".attackText", {
        color: "#E74C4C",
        repeat: -1,
        repeatDelay: 0.8,
        yoyo: true,
      });
    }, attackRef);

    // 城堡
    let ctx0 = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sky",
            // markers: true,
            start: "top 5%",
            end: "top 5%",
            scrub: true,
          },
        })
        .to(".sky", {
          backgroundColor: "#5C94FC",
        })
        .to(".fire", {
          display: "none",
        })
        .to(".attack", {
          opacity: 0,
        })
        .set("#menuTitle", {
          className: "menuTitle rambleText text-center",
        })
        .set(".endWord", {
          backgroundColor: "#5C94FC",
          color: "black",
        });
    });
    // 勇者
    let ctx1 = gsap.context(() => {
      gsap.set(".litingBegin", { display: "none" });
      gsap.set(".yuusha", { opacity: 0, visibility: "hidden" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".yuusha",
            // markers: true,
            start: "top 85%",
            end: "top 5%",
            scrub: true,
          },
        })
        // 開頭閃電 ... 閃電怪怪的 背景黑色der
        .to(".litingBegin", { display: "block", duration: 5 })
        .to(".yuusha", {
          opacity: 1,
          visibility: "visible",
          duration: 10,
        })
        .to(".litingBegin", { display: "none" })
        .to(".yuusha", {
          top: "50%",
          // yPercent: '-100',
          duration: 20,
          position: "absolute",
        });
    }, lawnRef);

    // 病毒
    let ctx3 = gsap.context(() => {
      gsap.set(".passAnimate", { opacity: 0, visibility: "hidden" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".blue",
            // markers: true,
            start: "top 90%",
            end: "top 5%",
            scrub: true,
          },
        })
        .to(".blue", {
          top: "110%",
          // yPercent: '-100',
          duration: 20,
          position: "absolute",
        })
        .to(".blue", { opacity: 0 })
        // 過場動畫
        .to(".passAnimate", { opacity: 1, visibility: "visible" })
        .to(".passAnimate", {
          height: "100vh",
          duration: 5,
        })
        .to(".passAnimate", {
          opacity: 0,
          duration: 3,
          display: "none",
        });
    }, lawnRef);
    return () => {
      ctx1.revert();
      ctx0.revert();
      ctx2.revert();
      ctx3.revert();
    };
  });

  return (
    <>
      <Headers />

      {sm ? (
        <>
          <CastleMobile />
          <LawnMobile />
          <ProfessionMobile />
          <ThemeMobile />
        </>
      ) : (
        <>
          <HomeCss>
            <div className="container">
              <Castle castleRef={castleRef} attackRef={attackRef} />
              <Lawn lawnRef={lawnRef} />
              <Lawn2 />
            </div>
          </HomeCss>
          <Profession />
          <Comming />
          <Theme />
        </>
      )}

      <Apply />
      <F2eSelection />
      <Sponsor />
    </>
  );
};

export default Home;
