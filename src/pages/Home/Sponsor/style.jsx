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
`