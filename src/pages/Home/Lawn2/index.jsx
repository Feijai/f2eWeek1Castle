import React, { useLayoutEffect, useRef } from 'react'
import { Lawn2Css } from './style'
import blue from '../../../assets/blue.png'
import yellow from '../../../assets/yellow.png'
import red from '../../../assets/red.png'
import { gsap } from 'gsap'


const Lawn2 = () => {
    const lawn2Ref = useRef()
    return (
        <Lawn2Css ref={lawn2Ref}>
            <img src={blue} alt="" className='blue position-absolute' />
            <img src={yellow} alt="" className="yellow position-absolute" />
            <img src={red} alt="" className="red position-absolute" />
            <div className="dialogue position-absolute bg-black">

            </div>
        </Lawn2Css>
    )
}

export default Lawn2
