import React, { useState } from "react";
import { ProfessionMobileCss } from "./style";
import mbred from "../../../assets/mbred.png";
import mbgreen from "../../../assets/mbgreen.png";
import pumpkinMan from "../../../assets/pumpkinMan.png";
import uired from "../../../assets/uired.png";
import f2egreen from "../../../assets/f2egreen.png";

export default function ProfessionMobile() {
  const [data, setData] = useState({ name: null, img: pumpkinMan });
  return (
    <ProfessionMobileCss className="bg-black">
      <div className="container dCenter">
        <h2 className="text-center">互動式網頁設計</h2>
        <h4 className="text-center linerLite textStroke">CHOOSE A FIGHTER</h4>
        <div className="choose d-flex justify-content-between">
          <div
            className={`bg-white character ${data?.name ==='UI 設計師' ? '' : 'toGray' }`}
            onClick={() => setData({ name: "UI 設計師", img: uired })}
          >
            <div className="bg-black mbredgray position-relative">
              <img src={mbred} alt="" className="w-100 h-100" />
              <p className="position-absolute w-100 text-center">UI 設計師</p>
            </div>
          </div>
          <div
            className={`bg-white character ${data?.name ==='前端工程師' ? '' : 'toGray' }`}
            onClick={() => setData({ name: "前端工程師", img: f2egreen })}
          >
            <div className="bg-black mbgreengray position-relative">
              <img src={mbgreen} alt="" className="w-100 h-100" />
              <p className="position-absolute w-100 text-center">前端工程師</p>
            </div>
          </div>
        </div>
        <div>
          <img src={data.img} alt="" className="w-100 h-100 pumpkinMan" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <p className="name">{data?.name}</p>
      </div>
    </ProfessionMobileCss>
  );
}
