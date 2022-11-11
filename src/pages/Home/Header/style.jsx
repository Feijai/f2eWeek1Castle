import styled from "styled-components";


export const HeaderCss = styled.div`
    height:5rem;
    .logo{
        height:29px;
        width:230px;
    }
    .menu{
        column-gap:16px;
    }
    a{
        text-decoration: none;
        color:white;
    }
    .hamberger{
        row-gap:9px;
        flex-direction: column;
        margin-right:1rem;
        div{
            width:30px;
            height:0px;
            border: 1.5px solid #B4B4B4;
            border-radius: 50px;
        }
    }
    @media (min-width:992px){
        
    }

`


export const HeaderButtonCss = styled.button`
height:50px;
width:112px;
background-color:#FFE600;
color:black;
border:0;
padding:0;
`