import React from 'react'
import { ThemeCss } from './style'
import LevelCard from './LevelCard'
import w1 from '../../../assets/w1.png'
import w2 from '../../../assets/w2.png'
import w3 from '../../../assets/w3.png'

const Theme = () => {
    const data = [
        { pic: w1, title: ['The F2E', '活動網站設計'], text: '視差滾動', company: '版塊設計' },
        { pic: w2, title: ['今晚，', '我想來點點簽'], text: 'Canvas', company: '凱鈿行動科技' },
        { pic: w3, title: ['Scrum 新手村'], text: 'JS draggable', company: '鈦坦科技' }
    ]

    return (
        <ThemeCss className="bg-black text-white">
            <div className="container">
                <div className="row justify-content-center align-item-center">
                    <h2 className='text-center title'>年度最強合作 三大主題來襲</h2>
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