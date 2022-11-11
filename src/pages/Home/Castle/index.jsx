import React from "react";
import { CastleCss, AttackCss, TitleCss } from "./style";
import castle from "../../../assets/castle.png";
import fire from "../../../assets/fire.gif";

export default function Castle({ castleRef, attackRef }) {
  return (
    <CastleCss className="position-relative p-0 sky" ref={castleRef}>
      <TitleCss className="position-absolute title">
        <div className="position-relative h-100">
          <h1
            className="menuTitle text-center"
            id="menuTitle"
            dataStorke="The F2E 4th"
          >
            The F2E 4th
          </h1>
          <div className="endWord">互動式網頁設計</div>
        </div>
      </TitleCss>
      <img src={castle} alt="" className="w-100 position-absolute bottom-0" />
      <img src={fire} alt="" className="fire fire1 position-absolute" />
      <img src={fire} alt="" className="fire fire2 position-absolute" />
      <img src={fire} alt="" className="fire fire3 position-absolute" />
      <AttackCss
        className="attack w-100 position-absolute d-flex justify-content-center align-item-center"
        ref={attackRef}
      >
        <div className="position-relative">
          {/* <img src={attackpng} alt="" className='pCenter' /> */}
          <h2 className="attackText cublic pCenter">F2E攻擊了你的村莊！</h2>
        </div>
      </AttackCss>
    </CastleCss>
  );
}
