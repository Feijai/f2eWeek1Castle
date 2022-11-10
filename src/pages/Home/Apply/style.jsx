import styled from "styled-components";

export const ApplyCss = styled.div`
  height: 100%;
  .container {
    padding-top: 5rem;
    flex-direction: column;
  }

  .bar {
    border-radius: 12px;
    width: 100%;
    height: 7.5625rem;
    padding: 14px 25px;
  }
  .number {
    background-color: white;
    border-radius: 50px;
    color: black;
    font-size: 4rem;
    height: 5rem;
    width: 5rem;
    text-align: center;
  }
  .title {
    font-size: 42px;
    font-weight: 400;
    line-height: 49px;
  }
  .date {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
  }
  .applyTime {
    background-color: #9747ff;
  }

  .product {
    margin-top: 1rem;
    background-color: #ffb547;
  }
  .animate {
    width: 100%;
    margin-top: 22px;
    justify-content: center;
  }
  .arrow {
    display: none;
    width: 4rem;
    height: 4rem;
  }
  .ball {
    width: 55px;
    height: 62px;
  }
  .balls {
    width: 275px;
    height: 62px;
  }

  .applyText {
    border: 6px solid white;
    width: 100%;
    height: 246px;
    padding: 28px 15px;
    margin-top: 12px;
    margin-bottom: 6.25rem;
    border-radius: 2rem;
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    .bar {
      border-radius: 64px;
    }
    .product {
      margin-top: 2.5rem;
      flex-direction: row-reverse;
    }
    .arrow {
      display: block;
    }
    .animate {
      justify-content: space-between;
    }
    .ball {
      width: 86.4px;
      height: 96px;
    }
    .ball5 {
      margin-right: 43px;
    }
    .balls {
      width: 429px;
      height: 98px;
      margin-right: 43px;
    }
    .applyText {
      border: 12px solid white;
      margin-top: 1.5625rem;
      margin-bottom: 7.75rem;
      span {
        font-weight: 400;
        /* 2.5會爆掉阿? */
        font-size: 2.42rem;
        line-height: 47px;
      }
    }
  }
  @media (min-width: 1000px) {
    .date {
      font-size: 36px;
      line-height: 47px;
    }
  }
  @media (min-width: 1200px) {
    .title {
      font-size: 4rem;
      line-height: 75px;
    }
    .date {
      font-size: 2.5rem;
    }
    .applyText {
      span {
        font-weight: 400;
        /* 2.5會爆掉阿? */
        font-size: 2.42rem;
        line-height: 47px;
      }
    }
  }
  @media (min-width: 1400px) {
    height: 100vh;
    .bar {
      width: 81.79%;
    }
    .animate {
      width: 81.79%;
    }

    .applyText {
      border: 12px solid white;
      padding: 2rem 9.375rem 2rem 7.8125rem;
      margin-top: 1.5625rem;
      margin-bottom: 7.75rem;
      width: 79.86%;
      span {
        font-weight: 400;
        /* 2.5會爆掉阿? */
        font-size: 2.42rem;
        line-height: 47px;
      }
    }
  }
`;
