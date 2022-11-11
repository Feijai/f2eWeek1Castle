import styled from "styled-components";

export const ThemeMobileCss = styled.div`
  height: 100%;
  .container {
    padding-top: 3rem;
  }
  .murasaki {
    top: -13px;
    left: 50%;
    transform: translate(-50%, 0%);
    height: 328px;
    width: 328px;
    background-color: #9747ff;
    border-radius: 500px;
  }

  .mask:after {
    content: "";
    position: absolute;
    height: 13px;
    width: 150px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: black;
  }
  .themeTitle {
    color: #ffe600;
    position: relative;
    font-size: 48px;
    z-index: 0;

    &::before {
      content: attr(dataStorke);
      position: absolute;
      z-index: -1;
      -webkit-text-stroke: 9px black;
      text-stroke: 9px black;
    }
  }
  .text {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`;

export const ThemeMobileCardCss = styled.div`
  width: 100%;
  flex-direction: column;

  .logo {
    height: 240px;
    background-image: url(${(props) => props.img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: cover;
    min-width: 349px;
  }
  .name {
    bottom: 14px;
    right: 15px;
    height: 31px;
    background-color: #001aff;
  }

  .title {
    font-size: 2rem;
  }
  .week {
    margin-left: 10px;
    font-size: 2rem;
    color: #ffe600;
  }
  .theme {
    margin-left: 1rem;
    background-color: #ffe600;
    border-radius: 53px;
    width: 212px;
    height: 53px;
    font-size: 1.5rem;
  }
`;

export const MobileSwiperCss = styled.div`
  margin-top: 51px;
  .swiper-button-prev,
  .swiper-button-next {
    top: 33%;
    color: #d8d8d8;
    width: 22.19px;
    height: 28.5px;
  }
`;
