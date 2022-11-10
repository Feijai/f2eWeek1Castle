import styled from "styled-components";

export const CommingCss = styled.div`
height:100vh;
    .cercle{
        width:811px;
        height:811px;
    }
    .titleComming{
        left:50%;
        transform: translate(-50%, -50%);
        /* width:68.7%; */
        min-width:975px;
        min-height:350px;
        font-size:9.375rem;
        color:#FFE600;

        /*  邊框 */
        -webkit-text-stroke: 6px black;
        filter: 
            drop-shadow(0 0 6px black) ,

    }
    .coner{
        width:320px;
        height:300px;
        bottom:11%;
        left:12%
    }
    .people{
        width:413px;
        height:532px;
        bottom:0;
    }
    .spark{
        width:106px;
        height:106px;
        bottom:36%;
        left:77%;
    }
    .text{
        font-size:2.625rem;
        left:50%;
        transform: translate(-50%, -50%);
    }
    .commingWeek1{
        top:60%;
    }
    .commingWeek2{
        top:70%;
    }
    .commingWeek3{
        top:80%;
    }


`


export const BackgroundF2ECss = styled.section`
    height: 100%;
    overflow: hidden; /*隱藏超出外層容器的元素*/
    max-width: 100%;
  .loop {
    display: inline-block;
    font-size: 6rem;
    color: transparent;
    white-space: nowrap; /*文字必須設為nowrap，否則文字會自動換行*/
    height: 100%;
    -webkit-text-stroke: 1px white;
  }
  .loop > span {
    display: inline-block;
  }
`