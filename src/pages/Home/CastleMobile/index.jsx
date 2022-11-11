import React from "react";
import { CastleMobileCss, TitleCss } from "./style";
import castle from "../../../assets/castle.png";
import glass1 from "../../../assets/glass1.png";
import tree1 from "../../../assets/tree1.png";
import tree2 from "../../../assets/tree2.png";
import yuushamobile from "../../../assets/yuushamobile.png";
import bluemobile from '../../../assets/bluemobile.png'

export default function CastleMobile() {
  return (
    <CastleMobileCss className="bg-black container position-relative">
      <TitleCss>
        <h1 className="menuTitle text-center rambleText" id="menuTitle">
          The F2E 4th
        </h1>
        <div className="text-end text-white">互動式網頁設計</div>
      </TitleCss>
      <img src={castle} alt="" className="castle position-absolute" />
      <img src={glass1} alt="" className="glass1 position-absolute" />
      <img src={tree1} alt="" className="greenTree tree1 position-absolute" />
      <img src={tree1} alt="" className="greenTree tree2 position-absolute" />
      <img src={tree2} alt="" className="yellowTree tree3 position-absolute" />
      <img src={tree2} alt="" className="yellowTree tree4 position-absolute" />
      <img src={yuushamobile} alt="" className="yuusha position-absolute" />
      <img src={bluemobile} alt="" className="blue position-absolute"/>
    </CastleMobileCss>
  );
}
