import styled from "styled-components";

export const CommingCss = styled.div`
  overflow: hidden;
  height: 100vh;
  .cercle {
    max-width: 811px;
    max-height: 811px;
  }
  .titleComming {
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 975px;
    font-size: 6.375rem;
    color: #ffe600;

    /*  邊框 */
    -webkit-text-stroke: 6px black;
    filter: drop-shadow(0 0 6px black);
  }
  .coner {
    width: 220px;
    height: auto;
    bottom: 22%;
    left: -5%;
  }
  .people {
    width: 413px;
    height: 532px;
    bottom: 0;
  }
  .spark {
    width: 106px;
    height: 106px;
    bottom: 36%;
    left: 88%;
  }
  .text {
    font-size: 2.125rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .commingWeek1 {
    top: 55%;
  }
  .commingWeek2 {
    top: 65%;
  }
  .commingWeek3 {
    top: 75%;
  }
  @media (min-width: 992px) {
    .titleComming {
      font-size: 7.375rem;
    }
    .spark {
      left: 85%;
    }
  }
  @media (min-width: 1200px) {
    .titleComming {
      font-size: 8.375rem;
    }
    .spark {
      left: 82%;
    }
  }
  @media (min-width: 1400px) {
    .titleComming {
      font-size: 9.375rem;
    }
    .text {
      font-size: 2.625rem;
    }
    .commingWeek1 {
      top: 60%;
    }
    .commingWeek2 {
      top: 70%;
    }
    .commingWeek3 {
      top: 80%;
    }
    .coner {
      width: 320px;
      height: 300px;
      bottom: 11%;
      left: 12%;
    }
    .spark {
      left: 77%;
    }
  }
`;

export const BackgroundF2ECss = styled.section`
  height: 100%;
  overflow: hidden;
  max-width: 100%;
  .loop {
    display: inline-block;
    font-size: 6rem;
    color: transparent;
    white-space: nowrap;
    height: 100%;
    -webkit-text-stroke: 1px white;
  }
  .loop > span {
    display: inline-block;
  }
`;
