import React from 'react'
import { SelectionCss } from './style'

export default function F2eSelection() {
    return (
        <SelectionCss className='bg-black'>
            <div className="container bg-white ">
                <h2 className='text-center'  data-storke="區區修煉已經無法滿足了嗎？還有比賽等著你！">
                    區區修煉已經無法滿足了嗎？還有比賽等著你！
                </h2>
                <div className='cards mt40'>
                    <div className="textCard">
                        <div className="header bg-black text-white">評審機制</div>
                        <div className='cardContent'>
                            <p className="title">初選</p>
                            <p className="text">將由六角學院前端、UI 評審進行第一波篩選。</p>
                            <p className="title mt40">決選</p>
                            <p className="text">
                                由六角學院與贊助廠商討論，<br />
                                進行最後篩選，並於 12/30(五)<br />
                                由評審進行直播公布名單！
                            </p>
                        </div>
                    </div>
                    <div className="textCard">
                        <div className="header bg-black text-white">獎項</div>
                        <div className='cardContent' style={{marginTop:'2rem'}}>
                            <p className="text">初選佳作 共六十位 數位獎狀</p>
                            <p className="text">個人企業獎 共六位 <br/>NTD 3,000/位</p>
                            <p className="text">團體企業獎 共三組 <br/>NTD 10,000/組</p>
                            <p className="text mt40 text-center">以上皆提供完賽數位獎狀</p>
                        </div>
                    </div>
                </div>
            </div>
        </SelectionCss>
    )
}
