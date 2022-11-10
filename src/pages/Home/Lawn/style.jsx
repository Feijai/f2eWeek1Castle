import styled from "styled-components";
import glass1 from '../../../assets/glass1.png'

export const LawnCss = styled.div`
    height:620px;
    background-image:url(${glass1});
    background-position:center center;
    .blue{
        width:147px;
        height:121px;
        z-index:5;
    }
    .litingBegin{
        opacity:0.3;
        top:-35%;
        left:50%;
        transform: translate(-50%, -50%);
    }
    .yuusha{
        top:-10%;
        left:50%;
        transform: translate(-50%, -50%);
    }
    .tree1{
        left: 32%;
        top: 0px;
    }
    .tree2{
        right: 32%;
        top: 0px;
    }
    .tree3{
        top:22%;
        left:32%;
    }
    .tree4{
        top:22%;
        right:32%;
    }
    .hana1{
        left: 13%;
        top: 22%;
    }
    .hana2{
        left: 17%;
        top: 36.5%;
    }    
    .hana3{
        right: 5%;
        top: 10.1%;
    }    
    .hana4{
        right: 19.35%;
        top: 29.6%;
    }
    .chair1{
        top: 3.2%;
        left:20.1%;
    }
    .chair2{
        top: 3.2%;
        right:20.1%;
    }
`

export const PassAnimateCss = styled.div`
    z-index:15;
    transform: translate(-50%, -50%);
    .passAnimate{
        height:0px;
        background-color:white;
    }
    .passAnimate:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -59px;
        left: 0;
        width: 100%;
        height: 60px;
        background: linear-gradient(-45deg, transparent 75%, white 0) 0 50%,
                    linear-gradient(45deg, transparent 75%, white 0) 0 50%;
        background-size: 60px 60px;  
    }

    .passAnimate:before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        top: -59px;
        width: 100%;
        height: 60px;
        background: linear-gradient(45deg, transparent 75%, white 0) 50% 0%,
                    linear-gradient(-45deg, transparent 75%, white 0) 50% 0%;
        background-size: 60px 60px;  
        transform: rotate(180deg);
    }
`