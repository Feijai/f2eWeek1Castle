import React, { useRef, useLayoutEffect } from 'react'
import { CommingCss } from './style'
import BackgroundF2E from './BackgroundF2E'
import { gsap } from 'gsap'
import bgpurple from '../../../assets/bgpurple.png'
import coner from '../../../assets/coner.png'
import people from '../../../assets/people.png'
import spark from '../../../assets/spark.gif'

export default function Comming() {
    const commingRef = useRef();

    useLayoutEffect(() => {
        const loop = gsap.context(() => {
            gsap.to(".loop", {
                xPercent: "-50", //往左50%
                ease: "none",
                duration: 10,
                repeat: -1,
            });
        }, commingRef);

        return () => loop.revert();
    });

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            gsap.set('.cercle', { opacity: 0, visibility: "hidden" });
            gsap.set('.titleComming', {
                opacity: 0, visibility: "hidden",
                top: "-5%"
            });
            gsap.set('.coner', { opacity: 0, visibility: "hidden" });
            gsap.set('.people', { opacity: 0, visibility: "hidden", left: "90%", });
            gsap.set('.spark', {
                opacity: 0, visibility: "hidden", bottom: "36%",
                left: "77%"
            });
            gsap.set('.commingWeek1', { opacity: 0, visibility: "hidden" });
            gsap.set('.commingWeek2', { opacity: 0, visibility: "hidden" });
            gsap.set('.commingWeek3', { opacity: 0, visibility: "hidden", x: -100 });
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".cercle",
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: true,
                }
            }).to('.cercle', {
                opacity: 1, visibility: "visible",
            }).to('.titleComming', {
                opacity: 1, visibility: "visible",
                top: "31%",
                duration: 1,
            }).to('.coner', {
                opacity: 1, visibility: "visible",
            }).to('.people', {
                opacity: 1, visibility: "visible",
                left: "66%",
            }).to('.spark', {
                opacity: 1, visibility: "visible",
                x: 50,
                y: 50,
            }).to('.spark', {
                x: 0,
                y: 0,
            }).to('.commingWeek1', {
                opacity: 1, visibility: "visible",
            }).to('.commingWeek2', {
                opacity: 1, visibility: "visible"
            }).to('.commingWeek3', {
                opacity: 1, visibility: "visible", x: 0
            })
        })
        return () => ctx.revert()
    })
    return (
        <CommingCss className='position-relative bg-black' ref={commingRef}>
            <BackgroundF2E />

            <img src={bgpurple} alt='' className="cercle position-absolute pCenter" />
            <h2 className='titleComming position-absolute'>年度最強合作<br />三大主題來襲</h2>
            <img src={coner} alt="" className="coner position-absolute" />
            <img src={people} alt="" className="people position-absolute" />
            <img src={spark} alt="" className='spark position-absolute' />
            <p className="text commingWeek1 position-absolute text-black">The F2E 活動網站設計</p>
            <p className="text commingWeek2 position-absolute text-black">今晚，我想來點點簽</p>
            <p className="text commingWeek3 position-absolute text-black">Scrum 新手村</p>

        </CommingCss>
    )
}
