import styled from "styled-components";
import title from '../../../assets/title.png'

export const SponsorCss = styled.div`
    background-color:#339943;
    height:875px;
    padding-top:57px;
    .title{
        background-image:url(${title});
        background-position:center center;
        width:48.61%;
        height:100px;
        background-repeat: no-repeat;
        background-size: contain;
        object-fit: cover;
        p{
            font-size: 64px;
            line-height: 100%;
        }
    }

    .sponsorSwiper{
      height:525px;
      width:100%
    }
    .swiper-slide{
      /* overflow: hidden; */
      /* -webkit-filter:grayscale(1); */
    }
    .swiper-slide-active {
      /* -webkit-filter:grayscale(0); */

      .contain{
      }
    }

    .swiper-pagination-clickable{
      display:flex;
      column-gap:0.5rem;
      justify-content:center;
      margin-top:1rem;
    }
    .swiper-pagination-bullet{
      width:0.5rem;
      height:0.5rem;
      background-color: black;
      display:block;
    }
    .swiper-pagination-bullet-active{
      background-color: #E6553B;
      width:1rem;
    }
    .swiper-slide-duplicate-prev, 
    .swiper-slide-duplicate-next{
        /* display: none !important;; */
    }

    @media (min-width: 1400px) {
      .swiper-slide{
        transition: .7s;
        align-self:center;
        width:680px!important;
        height:384px;
        .home{
            width:54.05%;
            height:97.65%;
        }
        .logo{
            width:100%;
            height:60.04%;
        }
        .text{
            font-size:3rem
        }
      } 
      .swiper-slide-duplicate-next{
        opacity:0;
      }
      .swiper-slide-active {
        z-index:10;
        height:525px;;
        transition: .7s;
        width:929px!important;
        .contain{
          display:block!important;
        }
        .home{
            width:55.65%;
            height:79.04%
        }
        .logo{
            width:300px;
            height:300px;
        }
        .text{
            font-size:5rem;
        }
      }
    }
`

export const SponsorCardCss = styled.div`
    border : 9px solid black;
    border-radius:30px;
    height:100%;

`
