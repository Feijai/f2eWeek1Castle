import styled from "styled-components";

export const ThemeMobileCss = styled.div`
  height: 812px;
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
    z-index: 1;
    &::before {
      content: attr(dataStorke);
    }

    &::before {
      position: absolute;
      z-index: -1;
      -webkit-text-stroke: 6px black;
      text-stroke: 6px black;
    }
  }
  .text {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`;
