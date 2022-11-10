import React, { useLayoutEffect, useRef } from 'react'
import { ThemeCss } from './style'
import LevelCard from './LevelCard'
import w1 from '../../../assets/w1.png'
import w2 from '../../../assets/w2.png'
import w3 from '../../../assets/w3.png'
import { gsap } from 'gsap'

const Theme = () => {
    const data = [
        { pic: w1, title: ['The F2E', '活動網站設計'], text: '視差滾動', company: '版塊設計' },
        { pic: w2, title: ['今晚，', '我想來點點簽'], text: 'Canvas', company: '凱鈿行動科技' },
        { pic: w3, title: ['Scrum 新手村'], text: 'JS draggable', company: '鈦坦科技' }
    ]
    const themeRef = useRef()
    useLayoutEffect(() => {
        gsap.set('.Week2', { opacity: 0, visibility: "hidden" });
        gsap.set('.Week3', { opacity: 0, visibility: "hidden" });
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".themeTitle",
                    // markers: true,
                    start: 'top 50%',
                    end: 'top 5%',
                    scrub: true,
                }
            }).to('.Week2', {
                opacity: 1, visibility: "visible",
                duration: 1,
            }).to('.Week3', {
                opacity: 1, visibility: "visible",
                duration: 1,
            })
        }, themeRef)
        return () => ctx.revert()
    })

    return (
        <ThemeCss className="bg-black text-white" ref={themeRef}>
            <div className="container">
                <div className="row justify-content-center align-item-center">
                    <h2 className='text-center themeTitle'>年度最強合作 三大主題來襲</h2>
                    <div className='text dCenter'>
                        <p>各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡</p>
                    </div>
                    {data.map((ele, idx) => <LevelCard {...ele} key={idx} week={`Week${idx + 1}`} />)}
                </div>
            </div>
        </ThemeCss>
    )
}


export default Theme