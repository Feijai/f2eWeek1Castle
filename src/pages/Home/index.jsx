import React from 'react'
import styled from 'styled-components'
import Headers from './Header'
import bgImage from '../../assets/background.png'
import Castle from './Castle'
import Lawn from './Lawn'

const HomeCss = styled.div`
    background-image: url(${bgImage});
    background-repeat: repeat;
    background-size: 50px 50px;
`

export default function Home() {
    return (
        <>
            <Headers />
            <HomeCss>
                <Castle />
                <Lawn />
            </HomeCss>

        </>
    )
}
