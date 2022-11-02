import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import attackpng from '../../assets/attack.png'

const AttackCss = styled.div`
    bottom : 254px;
    height: 154px;
    background: rgba(255, 255, 255, 0.7);

    h2{
        width:1033px;
        height:112px;
        margin:0;
        color:#A8A7A5;
        font-style: normal;
        font-weight: 400;
        font-size: 96px;
        line-height: 112px;
    }
    img{
        width: 1048px;
        height: 139px;
    }
`


export default function Attack() {
    const AttackRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".attackText", {
                color: "#E74C4C",
                repeat: -1,
                repeatDelay: 0.8,
                yoyo: true
            });
        }, AttackRef);

        return () => ctx.revert();
    });


    return (
        <AttackCss className='attack w-100 position-absolute d-flex justify-content-center align-item-center'
            ref={AttackRef}>
            <div className='position-relative'>
                {/* <img src={attackpng} alt="" className='pCenter' /> */}
                <h2 className='attackText cublic pCenter'>F2E攻擊了你的村莊！</h2>
            </div>
        </AttackCss>
    )
}
