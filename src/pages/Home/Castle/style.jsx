import styled from "styled-components";

export const AttackCss = styled.div`
    bottom : 254px;
    height: 154px;
    background: rgba(255, 255, 255, 0.7);

    h2{
        width:1033px;
        height:112px;
        margin:0;
        color:#A8A7A5;
        font-style: normal;
        font-weight: 400;
        font-size: 96px;
        line-height: 112px;
    }
    img{
        width: 1048px;
        height: 139px;
    }
`

export const CastleCss = styled.div`
    height:863px;
    background-color:black;
    .fire1{
        width:12.656%;
        height: 23.64%;      
        left:72.28% ;
        top:32.05%
    }
    .fire2{
        width:15.39%;
        height: 28.73%;     
        bottom:16.62%;
        left:8.82%;
    }
    .fire3{
        width:15.54%;
        height:29.05%;
        bottom:-5%;
        left:71.15%;
    }
`


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
        font-size:12.5rem;
        font-weight:400;
        line-height:14.5rem;

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
    @media (max-width: 1400px){
        .menuTitle{
            font-size:10rem;
        }
    }
    @media (max-width: 1200px) {
        .menuTitle{
            font-size:7.5rem;
        }
    }
    @media (max-width: 992px) {
        .menuTitle{
            font-size:5rem;
        }
    }

`