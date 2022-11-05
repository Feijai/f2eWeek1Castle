import styled from "styled-components"
import thunder from '../../../assets/thunder.png'

export const ProfessionCss = styled.div`
    height:844px;
    background-image: url(${thunder});
    background-repeat: repeat;
    background-size: 60px 60px;
    .container{
        padding-top:2.5rem;
    }
    .title{
        color:#FFE600;
        font-size:7.5rem;
        margin-bottom:0;
        height:8.75rem
    }
    .chooseProfession{
        padding:2.875rem 4.6875rem 2.6875rem 4.6875rem;
        column-gap:2.75rem;
    }
    .pumpkinMan{
        margin-top:8px;
        width: 558px;
        height: 469px;

        object-fit:cover
    }
    .chooseText{
        margin-top: 1.1875rem;
        font-size:4rem;
        margin-bottom:0;
    }
    .ques{
        position:absolute;
        top:63%;
        left:55%;
        transform: translate(-50%, -50%);
        font-size: 9.375rem;
        line-height: 100%;
        width:5.25rem;
        height:auto;
    }

    .role{
        width:51.875%;
        img{
            width:10rem;
            height:10rem;
            border:6px solid #FFFFFF;
        }

    }
    .chooseRole{
        font-weight: 400;
        font-size: 40px;
        line-height: 47px;
    }
    
    .roleTitle{
        font-weight: 400;
        font-size: 2rem;
        line-height: 37px;
    }
`