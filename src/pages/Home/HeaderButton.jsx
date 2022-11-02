import React from 'react'
import styled from 'styled-components'

const HeaderButtonCss = styled.button`
    height:50px;
    width:112px;
    background-color:#FFE600;
    color:black;
    border:0;
    padding:0;
`

export default function HeaderButton({ text }) {
    return (
        <HeaderButtonCss>
            {text}
        </HeaderButtonCss>
    )
}
