import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Headers from './Header'
import bgImage from '../../assets/background.png'
import Castle from './Castle'
import Lawn from './Lawn'
import Lawn2 from './Lawn2'
import Theme from './Theme'
import { gsap } from 'gsap'
import Profession from './Profession'
import Sponsor from './Sponsor'
import F2eSelection from './F2eSelection'
import Apply from './Apply'

const HomeCss = styled.div`
    background-image: url(${bgImage});
    background-repeat: repeat;
    background-size: 50px 50px;
`

const Home = () => {
    const lawnRef = useRef()
    const castleRef = useRef()
    return (
        <>
            <Headers />
            <HomeCss>
                <div className="container">
                    <Castle castleRef={castleRef} />
                    <Lawn lawnRef={lawnRef} />
                    <Lawn2 />
                </div>
            </HomeCss>
            <Profession />
            <Theme />
            <Apply />
            <F2eSelection />
            <Sponsor />
        </>
    )
}

export default Home