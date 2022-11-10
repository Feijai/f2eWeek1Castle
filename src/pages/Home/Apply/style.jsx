import styled from "styled-components";

export const ApplyCss = styled.div`
height:100vh;
.container{
    padding-top:5rem;
    flex-direction:column;
}

.bar{
    border-radius:64px;
    width:81.79%;
    height:7.5625rem;
    padding:14px 25px;
    .number{
        background-color:white;
        border-radius:50px;
        color:black;
        font-size:4rem;
        height:5rem;
        width: 5rem;
        text-align:center;
    }
    .title{
        font-size:4rem;
        font-weight:400;
        line-height:75px;
    }
    .date{
        font-size:2.5rem;
        line-height:47px;
        font-weight:400
    }
}


.applyTime{
    background-color:#9747FF;
}

.product{
    margin-top:2.5rem;
    background-color:#FFB547;
    flex-direction:row-reverse;
}
.animate{
    width:81.79%;
    margin-top:22px;
}
.arrow{
    width:4rem;
    height:4rem;
}
.ball{
    width:86.4px;
    height:96px;
}
.ball5{
    margin-right:43px;
}
.applyText{
    border: 12px solid white;
    width:79.86%;
    height:246px;
    padding:2rem 9.375rem 2rem 7.8125rem;
    margin-top:1.5625rem;
    margin-bottom:7.75rem;
    border-radius:2rem;
    span{
        font-weight:400;
        /* 2.5會爆掉阿? */
        font-size:2.42rem; 
        line-height:47px;
    }
}
`