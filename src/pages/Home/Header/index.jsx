import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { HeaderCss, HeaderButtonCss } from "./style";

const Header = () => {
  return (
    <HeaderCss className="bg-black text-white">
      <div className="container h-100">
        <div className="d-flex h-100 align-items-center justify-content-between">
          <img src={logo} alt="" className="logo" />
          <div className="menu d-none align-items-center justify-content-between d-lg-flex">
            <Link to="/" className="">
              <span className="">關卡資訊</span>
            </Link>
            <Link to="/" className="">
              <span className="">攻略資源</span>
            </Link>
            <Link to="/" className="">
              <span className="">求職專區</span>
            </Link>
            <HeaderButtonCss>註冊報名</HeaderButtonCss>
            <HeaderButtonCss>登入</HeaderButtonCss>
          </div>
          <div className="hamberger d-flex d-lg-none">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </HeaderCss>
  );
};

export default Header;
