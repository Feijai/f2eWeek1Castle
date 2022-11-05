import styled from "styled-components";

export const SelectionCss = styled.div`
height:881px;
    .container{
        padding-top:3.75rem;
        border: 4px solid #000000;
        border-radius: 2rem;
        padding-bottom:3.875rem;
    }
    h2{
        font-size:3rem;
        background: linear-gradient(0deg, #FFE600 0%, #FFFFFF 100%);
        line-height: 56px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        position: relative;
        z-index:0;
        &::before {
            content: attr(data-storke);
        }
        &::before {
            position: absolute;
            z-index: -1;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
        }

    }
    .cards{
        display:flex;
        column-gap:51px;
        justify-content:center;
    }
    .textCard{
        width:44.90%;
        /* height:497px; */
        background-color:#D9D9D9;
        
    }
    .header{
        font-size: 2.5rem;
        line-height: 100%;
        padding:10px 27px;
    }
    .title{
        font-size: 2.5rem;
    }
    .cardContent{
        padding:18px 0px 24px 27px;
    }
    .text{
        font-size:2.25rem;
    }
    p{
        /* margin:0; */
    }
`