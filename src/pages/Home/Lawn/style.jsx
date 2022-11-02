import styled from "styled-components";
import glass1 from '../../../assets/glass1.png'

export const LawnCss = styled.div`
    height:620px;
    background-image:url(${glass1});
    background-position:center center;
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
