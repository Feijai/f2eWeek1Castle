import styled from "styled-components";
import title from "../../../assets/title.png";

export const SponsorCss = styled.div`
  background-color: #339943;
  height: 100%;
  padding-top: 57px;
  .title {
    background-image: url(${title});
    background-position: center center;
    width: 95.73%;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: cover;
    p {
      font-size: 2rem;
      line-height: 100%;
    }
  }

  .sponsorSwiper {
    height: 525px;
    width: 100%;
  }

  .swiper-slide {
    align-self: center
    transition: 0.7s;
    align-self: center;

    .home {
      width: 54.05%;
      height: 97.65%;
    }
    .logo {
      width: 100%;
      height: 60.04%;
    }
    .text {
      font-size: 3rem;
    }
  }
  .swiper-slide-duplicate-next {
    opacity: 0;
  }
  .swiper-slide-active {
    z-index: 10;
    transition: 0.7s;
    .contain {
      display: block !important;
    }
    .home {
      width: 55.65%;
      height: 79.04%;
    }
    .logo {
      width: calc(100% - 12px);
      height: auto;
    }
    .text {
      font-size: 3rem;
    }
  }
  .swiper-pagination-clickable {
    display: flex;
    column-gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }
  .swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    display: block;
  }
  .swiper-pagination-bullet-active {
    background-color: #e6553b;
    width: 1rem;
  }
  .swiper-slide-duplicate-prev,
  .swiper-slide-duplicate-next {
    /* display: none !important;; */
  }

  .container{
    row-gap:1rem;
    display: flex;
    flex-direction: column;
    padding-top:28px;
    padding-bottom:24px;
  }

  @media (min-width: 1200px) {
    .title {
      p{
        font-size:4rem;
    }}
    .swiper-slide {
      width: 680px !important;
      height: 384px;
    }
    .swiper-slide-active {
      height: 525px;
      width: 929px !important;
      .text {
        font-size: 5rem;
      }
    }
  }
  @media (min-width: 996px) {
    .title {
      width:48.61%
      p{
        font-size:3rem;
    }}
    .swiper-slide-active {
      .text {
        font-size: 4rem;
      }
    }
  }
 @media (min-width:576px){
  height:875px
 }
`;

export const SponsorCardCss = styled.div`
  border: 9px solid black;
  border-radius: 30px;
  height: 100%;
`;

export const SponsorCardCss2 = styled.div`
  border: 9px solid black;
  border-radius: 30px;
  height: 316px;
  .text {
    font-size: 2.5rem;
  }
  .logo {
    height: 232px;
    width: 232px;
  }
`;
