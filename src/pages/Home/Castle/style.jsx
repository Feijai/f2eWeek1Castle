import styled from "styled-components";

export const AttackCss = styled.div`
  bottom: 254px;
  height: 154px;
  background: rgba(255, 255, 255, 0.7);

  h2 {
    width: 100%;
    max-width: 1033px;
    position: relative;
    height: 112px;
    margin: 0;
    color: #a8a7a5;
    font-style: normal;
    font-weight: 400;
    font-size: 62px;
    line-height: 112px;
  }
  img {
    width: 1048px;
    height: 139px;
  }

    @media (min-width: 992px) {
        h2{
            font-size:82px;
        }
    }

    @media (min-width: 1200px){
        h2{
            font-size: 96px;
        }
    }
`;

export const CastleCss = styled.div`
overflow: hidden;
  height: 863px;
  background-color: black;
  .castle{
    transform:translate(-50%,0);
  }
  .fire1 {
    width: 24.656%;
    height: auto;
    left: 72.28%;
    top: 35.05%;
  }
  .fire2 {
    width: 15.39%;
    height: auto;
    bottom: 16.62%;
    left: 8.82%;
  }
  .fire3 {
    width: 15.54%;
    height: auto;
    bottom: -5%;
    left: 71.15%;
  }
  @media (min-width: 992px) {
        .menuTitle{
            font-size:8.5rem;
        }
        .fire1 {
            width: 19.656%;
            left: 72.28%;
            top: 32.05%;
        }
    }

    @media (min-width: 1200px) {
        .menuTitle{
            font-size:10.5rem;
        }
    }

    @media (min-width: 1400px){
        .fire1 {
            width: 12.656%;
            left: 72.28%;
            top: 32.05%;
        }
        .fire2 {
            bottom: 16.62%;
            left: 8.82%;
        }
        .fire3 {
            bottom: -5%;
            left: 71.15%;
        }
        .castle{
            width:100%
        }
    }
`;

export const TitleCss = styled.div`
    width: calc(100% - 5rem);
    height: 235px;
    color: white;
    border: 12px solid #FFFFFF;
    border-radius: 33px;
    left:40px;
    top:43px;
    padding : 0 calc(1.5625rem - 12px);
    .menuTitle{
        font-size:6rem;
        font-weight:400;
        line-height:14.5rem;
        position: relative;
        z-index:0;
        &::before {
            content: attr(dataStorke);
            position: absolute;
            z-index: -1;
            -webkit-text-stroke: 5px black;
            text-stroke: 5px black;
          }
    }


    .endWord{
        position:absolute;
        bottom:0;
        background-color:black;
        right:41px;
        font-size:2.5rem;
        font-weight:400;
        transform : translate(0%,60%)
    }


    @media (min-width: 992px) {
        .menuTitle{
            font-size:8.5rem;
        }
    }

    @media (min-width: 1200px) {
        .menuTitle{
            font-size:10.5rem;
        }
    }

    @media (min-width: 1400px){
        .menuTitle{
            font-size:12.5rem;
        }
    }

`;
