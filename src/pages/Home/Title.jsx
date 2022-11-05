import React from 'react'
import styled from 'styled-components'


const TitleCss = styled.div`
    width: calc(100% - 5rem);
    height: 235px;
    color: white;
    border: 12px solid #FFFFFF;
    border-radius: 33px;
    left:40px;
    top:43px;

    padding : 0 calc(1.5625rem - 12px);
    .menu{
        font-size:12.5rem;
        font-weight:400;
        line-height:14.5rem;
    }
    .endWord{
        bottom:calc(-1 * 1rem);
        background-color:black;
        right:41px;
        font-size:2.5rem;
        font-weight:400;
    }
`


export default function Title() {
    return (
        <TitleCss className='position-absolute'>
            <div className='position-relative'>
                <h1 className='menu cublic'>The F2E 4th</h1>
                <div className='endWord position-absolute cublic'>互動式網頁設計</div>
            </div>
        </TitleCss>
    )
}
