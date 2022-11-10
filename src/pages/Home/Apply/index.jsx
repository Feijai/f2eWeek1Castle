import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ApplyCss, ApplyMobleCss } from "./style";
import redArrow from "../../../assets/redArrow.png";
import ball1 from "../../../assets/ball1.png";
import ball2 from "../../../assets/ball2.png";
import ball3 from "../../../assets/ball3.png";
import ball4 from "../../../assets/ball4.png";
import ball5 from "../../../assets/ball5.png";
import news from "../../../assets/news.png";
import flag from "../../../assets/flag.png";
import balls from "../../../assets/balls.gif";

export default function Apply() {
  const applyRef = useRef();
  useLayoutEffect(() => {
    gsap.fromTo(
      ".cursor",
      0,
      {
        visibility: "hidden",
      },
      {
        visibility: "visible",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.3,
      }
    );
    gsap.set(".cursor", { display: "none" });
    gsap.set(".applyTime", { opacity: 0, visibility: "hidden", y: -100 });
    gsap.set(".product", { opacity: 0, visibility: "hidden" });
    gsap.set(".arrow", { opacity: 0, visibility: "hidden" });
    gsap.set(".ball", { opacity: 0, visibility: "hidden" });
    gsap.set(".balls", { display: "none" });
    gsap.set(".applyText", { opacity: 0, visibility: "hidden" });
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top 45%",
            end: "top 5%",
            scrub: true,
          },
        })
        .to(".applyTime", {
          opacity: 1,
          visibility: "visible",
          y: 0,
          duration: 1,
        })
        .to(".product", {
          opacity: 1,
          visibility: "visible",
          duration: 1,
        })
        .to(".arrow", {
          opacity: 1,
          visibility: "visible",
          duration: 1,
        })
        .to(".ball1", {
          opacity: 1,
          visibility: "visible",
          duration: 3,
        })
        .to(".ball2", {
          opacity: 1,
          visibility: "visible",
          duration: 3,
        })
        .to(".ball3", {
          opacity: 1,
          visibility: "visible",
          duration: 3,
        })
        .to(".ball4", {
          opacity: 1,
          visibility: "visible",
          duration: 3,
        })
        .to(".ball5", {
          opacity: 1,
          visibility: "visible",
          duration: 3,
        })
        .to(".applyText", {
          opacity: 1,
          visibility: "visible",
          duration: 1,
        })
        // 文字顯示
        .to(".cursor1", { display: "contents" })
        .to(".applyTextPrint1", {
          text: "活動採用 UI、前端接力合作形式，",
          duration: 2,
        })
        .to(".cursor1", { display: "none" })
        .to(".cursor2", { display: "contents" })
        .to(".applyTextPrint2", {
          text: "前端工程師可採用 UI 設計師的設計稿，",
          duration: 2,
        })
        .to(".cursor2", { display: "none" })
        .to(".cursor3", { display: "contents" })
        .to(".applyTextPrint3", {
          text: "一同產出完整作品。",
          duration: 2,
        })
        //
        .to(".ball", { display: "none" })
        .to(".balls", { display: "block" });
    }, applyRef);
    return () => ctx.revert();
  });

  const [sm, setSm] = useState(window.innerWidth > 768 ? false : true);
  window.addEventListener("resize", (e) => {
    window.innerWidth > 768 ? setSm(false) : setSm(true);
  });

  return (
    <>
      <ApplyCss className="bg-black apply" ref={applyRef}>
        <div className="container dCenter">
          <div
            className="d-md-none d-flex  text-white"
            style={{ marginBottom: "7px" }}
          >
            <div className="number">1</div>
            <div
              className="title align-self-center"
              style={{ marginLeft: "16px" }}
            >
              報名時間
            </div>
          </div>
          <div className="bar applyTime text-white d-flex align-items-center">
            <div className="number d-none d-md-block">1</div>
            <div
              className="title  d-none d-md-block"
              style={{ marginLeft: "20px" }}
            >
              報名時間
            </div>
            <div
              className="date d-none d-md-block"
              style={{ marginLeft: "34px" }}
            >
              10/13(四) 早上 11:00
              <br />- 11/6(日) 晚上 23:59
            </div>
            <img
              src={news}
              alt=""
              style={{ width: "116px", height: "118px", marginLeft: "21px" }}
              className="d-none d-md-block"
            />
            <img
              src={news}
              alt=""
              style={{ width: "90px", height: "92px" }}
              className=" d-block d-md-none"
            />
            <div className="date d-block d-md-none">
              10/13(四) 早上 11:00
              <br />- 11/6(日) 晚上 23:59
            </div>
          </div>

          <div
            className="d-md-none d-flex  text-white "
            style={{ marginTop: "41px" }}
          >
            <div className="number">2</div>
            <div
              className="title align-self-center"
              style={{ marginLeft: "16px" }}
            >
              登入作品
            </div>
          </div>
          <div className="bar product text-black  d-flex align-items-center">
            <div className="number d-none d-md-block">2</div>
            <div
              className="title  d-none d-md-block"
              style={{ marginRight: "20px" }}
            >
              登入作品
            </div>
            <div
              className="date d-none d-md-block"
              style={{ marginRight: "34px" }}
            >
              10/31&nbsp;&nbsp;UI、團體組開賽
              <br />
              11/7&nbsp;&nbsp;&nbsp;前端組開賽
            </div>
            <img
              src={flag}
              alt=""
              style={{ width: "94px", height: "94px", marginRight: "7px" }}
              className="d-none d-md-block"
            />

            <img
              src={flag}
              alt=""
              style={{ width: "73px", height: "73px", marginRight: "9px" }}
              className=" d-md-none align-self-center"
            />
            <div
              className="date d-md-none align-self-center text-white"
              style={{ marginRight: "34px" }}
            >
              10/31&nbsp;&nbsp;UI、團體組開賽
              <br />
              11/7&nbsp;&nbsp;&nbsp;前端組開賽
            </div>
          </div>
          <div className="animate d-flex  align-items-center">
            <div className="d-flex">
              <img src={redArrow} alt="" className="arrow arrow1" />
              <img src={redArrow} alt="" className="arrow arrow2" />
              <img src={redArrow} alt="" className="arrow arrow3" />
            </div>
            <div className="">
              <img src={ball1} alt="" className="ball ball1" />
              <img src={ball2} alt="" className="ball ball2" />
              <img src={ball3} alt="" className="ball ball3" />
              <img src={ball4} alt="" className="ball ball4" />
              <img src={ball5} alt="" className="ball ball5" />
              <img src={balls} alt="" className="balls" />
            </div>
          </div>
          <div className="applyText text-white">
            <span className="applyTextPrint1"></span>
            <span className="cursor cursor1 text-white">_</span>
            <br />
            <span className="applyTextPrint2"></span>
            <span className="cursor cursor2 text-white">_</span>
            <br />
            <span className="applyTextPrint3"></span>
            <span className="cursor cursor3 text-white">_</span>
          </div>
        </div>
      </ApplyCss>
    </>
  );
}
