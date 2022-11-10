import styled from "styled-components";

export const SelectionCss = styled.div`
  height: 100%;
  .container{
    padding-top: 3.75rem;
    border: 4px solid #000000;
    border-radius: 2rem;
    padding-bottom: 3.875rem;
  }
  h2 {
    font-size: 2rem;
    background: linear-gradient(0deg, #ffe600 0%, #ffffff 100%);
    line-height: 56px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    position: relative;
    z-index: 0;
    &::before {
      content: attr(data-storke);
    }
    &::before {
      position: absolute;
      z-index: -1;
      -webkit-text-stroke: 2px black;
      text-stroke: 2px black;
    }
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .textCard {
    width: 100%;
    background-color: #d9d9d9;
  }
  .header {
    font-size: 2rem;
    line-height: 100%;
    padding: 10px 27px;
    text-align:center;
  }
  .title {
    font-size: 1.5rem;
  }
  .cardContent {
    padding: 18px 0px 24px 27px;
  }
  .text {
    font-size: 1.5rem;
  }
  p {
    /* margin:0; */
  }
  @media (min-width: 576px) {
    .header{
      font-size: 2.25rem;
      text-align:left;
    }
    .text {
      font-size: 2rem;
    }
    .title{
      font-size:2.25rem;
    }
  }
  @media (min-width: 768px) {
    .cards {
      column-gap: 51px;
      justify-content: center;
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
    height: 881px;
    h2 {
      font-size: 2rem;
    }
    .textCard {
      width: 44.9%;
    }
    .header{
      font-size: 2.5rem;
    }
    .text {
      font-size: 2.25rem;
    }
    .title{
      font-size:2.5rem;
    }
  }
`;
