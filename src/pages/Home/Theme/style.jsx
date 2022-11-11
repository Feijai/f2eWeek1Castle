import styled from "styled-components";

export const ThemeCss = styled.div`
    height:100vh;
    padding-top:43px;
    .themeTitle{
        font-size:3.25rem;
        color:#FFE600
    }
    .text{
        width:84.76%;
        margin-top:9px;
        font-size:1.25rem;
        height:4.75rem;
        background: #001AFF;
        border-radius: 53px;
        margin-bottom:2.125rem;
        p{
            margin:0;
        }
    }
    @media(min-width:992px){
        .themeTitle{
            font-size:4.25rem;
        }
        .text{
            font-size:1.75rem
        }
    }
    @media(min-width:1200px){
        .themeTitle{
            font-size:5.2rem;
        }
        .text{
            font-size:2rem
        }
    }
    @media(min-width:1400px){
        .themeTitle{
            font-size:5.625rem;
        }
        .text{
            font-size:2.25rem
        }
    }
`

export const LevelCardCss = styled.div`
    width:28.82%;
    height:59.02%;
    .week{
        font-weight: 400;
        font-size: 20px;
        line-height: 42px;
        color: #FFE600;
    }
    h3{
        font-weight: 400;
        font-size: 1.625rem;
        line-height: 31px;
        height:3.125rem;
    }
    .themeButton{
        width:57.45%;
        height:53px;
        color:black;
        border-radius:53px;
        background-color:#FFE600;
        font-size:0.9rem;
    }
    .company{
        width:54.20%;
        height:61px;
        margin-top:1.3125rem;
        background-color: #001AFF;
        font-size:0.8rem;
    }
    @media(min-width:992px){
        .week{
            font-size: 30px;
        }
        h3{
            font-size: 2.125rem;
            line-height: 49px;
            height:5.125rem;
        }
        .company{
            font-size:1.1rem;
        }
        .themeButton{
            font-size:1.2rem
        }
    }
    @media(min-width:1400px){
        .week{
            font-size: 36px;
        }
        h3{
            font-size: 2.625rem;
            line-height: 49px;
            height:6.125rem;
        }
        .company{
            font-size:1.5rem;
        }
        .themeButton{
            font-size:1.5rem;
        }
    }
`