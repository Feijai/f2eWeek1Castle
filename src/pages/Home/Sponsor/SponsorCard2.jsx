import React from "react";
import { SponsorCardCss2 } from "./style";

export default function SponsorCard2(props) {
  const { logo, name } = props
    console.log(props)
  return (
    <SponsorCardCss2 className="bg-white d-flex align-items-center dCenter">
      <div className="align-items-center">
        <p className="text text-center">{name}</p>
        <img src={logo} alt="" className="logo" />
      </div>
    </SponsorCardCss2>
  );
}
