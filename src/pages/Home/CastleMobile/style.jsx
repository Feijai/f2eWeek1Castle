import styled from "styled-components";

export const CastleMobileCss = styled.div`
  overflow: hidden;
  padding-top: 13px;
  height: 732px;
  .castle {
    width: 617px;
    height: 291px;
    left: 50%;
    top: 94px;
    transform: translate(-50%, 0%);
  }
  .glass1 {
    width: 1280px;
    height: 349px;
    left: 50%;
    top: 385px;
    transform: translate(-50%, 0%);
  }
  .greenTree {
    width: 165px;
    height: 165px;
  }
  .yellowTree {
    width: 153px;
    height: 153px;
  }
  .tree1 {
    top: 385px;
    left: 8%;
    transform: translate(-50%, 0%);
  }
  .tree2 {
    top: 385px;
    left: 94%;
    transform: translate(-50%, 0%);
  }
  .tree3 {
    top: 531px;
    left: 8%;
    transform: translate(-50%, 0%);
  }
  .tree4 {
    top: 531px;
    left: 94%;
    transform: translate(-50%, 0%);
  }
  .yuusha{
    top: 337px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .blue{
    bottom:0;
    left:50%;
    transform: translate(-50%, 0%);

  }
`;

export const TitleCss = styled.div`
  width: 100%;
  border: 3px solid #ffffff;
  border-radius: 13px;
  background-color: #001aff;
  .menuTitle {
    font-size: 56px;
    font-weight: 400;
    line-height: 100%;
    position: relative;
        z-index:0;
        &::before {
            content: attr(dataStorke);
            position: absolute;
            z-index: -1;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
          }
  }
  .endWord {
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 576px) {
    .menuTitle {
    }
  }
`;
