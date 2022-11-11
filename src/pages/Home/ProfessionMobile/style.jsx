import style from "styled-components";

export const ProfessionMobileCss = style.div`
    height:812px;
    padding-top:40px;
    padding-bottom:86px;
    .container{
        flex-direction: column;
    }
    h2{
        color:#FFE600;
        font-size: 42px;
        line-height: 49px;
    }
    h4{
        margin-top:1rem;
        font-size: 24px;
        line-height: 28px;
    }
    .choose{
        width:272px;
        margin-top:12px;
        .character{
            padding:6px;
        }
    }
    .character{
        width:116px;
        height:116px;
        p{  
            color:white;
            font-size:18px;
            bottom:0%;
            left: 50%;
            transform: translate(-50%, 0%);
            -webkit-text-stroke: 1px black;
        }
    }
    .pumpkinMan{
        max-width:371px;
        height:auto
    }
    .name{
        font-size:4rem;
        color:#FFE600;
    }
`;
