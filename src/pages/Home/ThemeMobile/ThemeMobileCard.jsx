import React from "react";
import { ThemeMobileCardCss } from "./style";


export default function ThemeMobileCard(data) {
  return (
    <ThemeMobileCardCss className="dCenter" img={data.img}>
      <div className="logo position-relative ">
        <div className="name position-absolute text-white dCenter"><p>{data.name}</p></div>
      </div>
      <div className="d-flex just" style={{marginTop:"13px"}}>
        <p className="week">Week1</p>
        <button className="theme">{data.theme}</button>
      </div>
      <p className="title text-white" style={{marginTop:"1.5rem"}}>{data.title}</p>
    </ThemeMobileCardCss>
  );
}
