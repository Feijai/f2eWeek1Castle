import React, { useLayoutEffect, useRef } from 'react'
import { Lawn2Css } from './style'
import blue from '../../../assets/blue.png'
import yellow from '../../../assets/yellow.png'
import red from '../../../assets/red.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const Lawn2 = () => {
    const lawn2Ref = useRef()
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        gsap.fromTo(
            ".cursor",
            0,
            {
                visibility: "hidden",
            },
            {
                visibility: "visible",
                repeat: -1,
                yoyo: true,
                repeatDelay: 0.3,
            }
        );
        // 病毒 
        let ctx = gsap.context(() => {
            gsap.set('.cursor', { opacity: 0 })
            gsap.set('.blueB', { opacity: 0, visibility: "hidden" })
            gsap.set('.yellowB', { opacity: 0, visibility: "hidden" })
            gsap.set('.redB', { opacity: 0, visibility: "hidden" })
            gsap.set('.dialogue', { opacity: 0, visibility: "hidden" })
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".blueB",
                    // markers: true,
                    start: 'top 85%',
                    end: '+250',
                    scrub: true,
                }
            })
                //過場
                // .to('.passAnimate', {
                //     opacity: 1, visibility: "visible",
                // })
                // .to('.passAnimate', {
                //     height: '100vh',
                //     opacity: 0,
                //     duration: 5,
                // })
                // 分別顯示
                .to('.blueB', {
                    opacity: 1, visibility: "visible",
                    duration: 5,
                    position: 'fixed'
                })
                .to('.dialogue', {
                    opacity: 1, visibility: "visible",
                    position: 'fixed'
                })
                // blue talk
                .to('.cursor1', { opacity: 1 })
                .to('.typing1', {
                    text: "怪物A:羨慕別人的酷酷網頁動畫？",
                    duration: 2,
                })
                .to('.blueB', {
                    className: 'blueB toGray',
                }).to('.yellowB', {
                    opacity: 1, visibility: "visible",
                    position: 'fixed',
                    duration: 5,
                })
                // yellow talk
                .to('.cursor2', { opacity: 1 })
                .to('.typing2', {
                    text: "怪物B:滿足不了同事的許願？",
                    duration: 2,
                }).to('.yellowB', {
                    className: 'yellowB toGray'
                }).to('.redB', {
                    opacity: 1, visibility: "visible",
                    position: 'fixed',
                    duration: 5,
                })
                // red talk
                .to('.cursor3', { opacity: 1 })
                .to('.typing3', {
                    text: "怪物C:動畫技能樹太雜無從下手？",
                    duration: 2,
                })
                //結束前設定固定在底部
                .to('.blueB', { className: 'blueB', position: 'absolute', top: '60%' })
                .to('.yellowB', { className: 'yellowB', position: 'absolute', top: '60%' })
                .to('.redB', { position: 'absolute', top: '60%' })
                .to('.dialogue', { position: 'absolute', bottom: "4%" },)
                .to('.monsterTalk', {
                    opacity: 0, visibility: "hidden",
                    display: 'none'
                }).to('.choose', {
                    opacity: 1, visibility: "visible",
                })



        }, lawn2Ref);
        return () => ctx.revert();
    });
    return (
        <Lawn2Css ref={lawn2Ref}>
            <img src={blue} alt="" className='blueB' />
            <img src={yellow} alt="" className="yellowB " />
            <img src={red} alt="" className="redB" />
            <div className="dialogue bg-black text-white">
                <p className='monsterTalk'>
                    <span className="animation-wrapper typing typing1 text-white"></span><span className="cursor cursor1 text-white">_</span><br />
                    <span className="animation-wrapper typing typing2 text-white"></span><span className="cursor cursor2 text-white">_</span><br />
                    <span className="animation-wrapper typing typing3 text-white"></span><span className="cursor cursor3 text-white">_</span><br />
                </p>
                <p className='choose'>
                    <button className='w-100'>應戰</button>
                    <button className='w-100'>逃跑</button>
                </p>
            </div>
        </Lawn2Css>
    )
}

export default Lawn2
