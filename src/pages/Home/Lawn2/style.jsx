import styled from "styled-components";
import glass1 from '../../../assets/glass1.png'


export const Lawn2Css = styled.div`
    position:relative;
    height:881px;
    background-image:url(${glass1});
    background-position:center center;
    .blue{
        width: 29.92%;
        height: 35.75%;
        left:50%;
        top:35%;
        transform: translate(-50%, -50%);
    }
    .yellow{
        left:18%;
        top:35%;
        transform: translate(-50%, -50%);
        width:28.04%;
        height:auto;
    }
    .red{
        left:82%;
        top:35%;
        transform: translate(-50%, -50%);
        width:27.11%;
        height:auto;
    }
    .dialogue{
        width:93.75%;
        height:27.92%;
        bottom:-10%;
        left:50%;
        transform: translate(-50%, -50%);
        border: 0.75rem solid white;    
        border-radius:32px;    
    }
`