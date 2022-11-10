import styled from "styled-components";
import glass1 from '../../../assets/glass1.png'


export const Lawn2Css = styled.div`
    position:relative;
    height:1600px;
    background-image:url(${glass1});
    background-position:center center;
    .blueB{
        /* width: 29.92%;
        height: 35.75%; */
        left:50%;
        top:35%;
        transform: translate(-50%, -50%);
        width:324px;
        height:324px;
        position:absolute;
    }
    .yellowB{
        left:18%;
        top:35%;
        transform: translate(-50%, -50%);
        /* width:28.04%;
        height:auto; */
        width:359px;
        height:326px;
    }
    .redB{
        left:82%;
        top:35%;
        transform: translate(-50%, -50%);
        /* width:27.11%;
        height:auto; */
        width:347px;
        height:347px;
    }
    .dialogue{
        /* width:79.90%; */
        width:75rem;
        height:246px;
        bottom:-10%;
        left:50%;
        transform: translate(-50%, -50%);
        border: 0.75rem solid white;    
        border-radius:32px;    
        padding:2rem 5rem;
        font-size:2.5rem;
    }
    .choose{
        opacity:0;
        display:flex;
        row-gap:35px;
        flex-direction:column;
        button{
            background-color:black;
            color:white!important;
            text-align:left;
            padding:0;
            border:0;


        }
        button:hover{
            background-color:#8B8B8B
        }
    }

    .passAnimate{
        height:100px;
        width: 100%;
        background-color:white;
        z-index:5;
    }
    .passAnimate:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -60px;
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
        top: -60px;
        width: 100%;
        height: 60px;
        background: linear-gradient(45deg, transparent 75%, white 0) 50% 0%,
                    linear-gradient(-45deg, transparent 75%, white 0) 50% 0%;
        background-size: 60px 60px;  
        transform: rotate(180deg);
    }
`