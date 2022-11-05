import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Title from '../Title'
import castle from '../../../assets/castle.png'
import { CastleCss, AttackCss } from './style'
import fire from '../../../assets/fire.gif'

export default function Castle({ castleRef }) {

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
        <CastleCss className='position-relative p-0' ref={castleRef}>
            <Title />
            <img src={castle} alt="" className='w-100 position-absolute bottom-0' />
            <img src={fire} alt="" className ="fire1 position-absolute" />
            <img src={fire} alt="" className ="fire2 position-absolute" />
            <img src={fire} alt="" className ="fire3 position-absolute" />
            <AttackCss className='attack w-100 position-absolute d-flex justify-content-center align-item-center'
                ref={AttackRef}>
                <div className='position-relative'>
                    {/* <img src={attackpng} alt="" className='pCenter' /> */}
                    <h2 className='attackText cublic pCenter'>F2E攻擊了你的村莊！</h2>
                </div>
            </AttackCss>
        </CastleCss>
    )
}
