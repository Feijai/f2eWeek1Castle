import React from 'react'
import { ApplyCss } from './style'
import redArrow from '../../../assets/redArrow.png'
import ball1 from '../../../assets/ball1.png'
import ball2 from '../../../assets/ball2.png'
import ball3 from '../../../assets/ball3.png'
import ball4 from '../../../assets/ball4.png'
import ball5 from '../../../assets/ball5.png'

export default function Apply() {
    return (
        <ApplyCss className='bg-black'>
            <div className="container dCenter">
                <div className='bar applyTime text-white d-flex align-items-center'>
                    <div className='number'>1</div>
                    <div className='title' style={{marginLeft:'20px'}}>報名時間</div>
                    <div className='date'  style={{marginLeft:'34px'}}>
                        10/13(四) 早上 11:00<br />
                        - 11/6(日) 晚上 23:59
                    </div>
                </div>
                <div className="bar product text-black  d-flex align-items-center">
                    <div className='number'>2</div>
                    <div className='title' style={{marginRight:'20px'}}>登入作品</div>
                    <div className='date' style={{marginRight:'34px'}}>
                        10/31  UI、團體組開賽<br/>
                        11/7    前端組開賽
                    </div>
                    
                </div>
                <div className='animate d-flex  justify-content-between align-items-center'>
                    <div>
                        <img src={redArrow} alt="" className="arrow arrow1" />
                        <img src={redArrow} alt="" className="arrow arrow2" />
                        <img src={redArrow} alt="" className="arrow arrow3" />
                    </div>
                    <div className=''>
                        <img src={ball1} alt="" className='ball ball1' />
                        <img src={ball2} alt="" className='ball ball2' />
                        <img src={ball3} alt="" className='ball ball3' />
                        <img src={ball4} alt="" className='ball ball4' />
                        <img src={ball5} alt="" className='ball ball5' />
                    </div>
                </div>
                <div className='text text-white'>
                    <span>
                        活動採用 UI、前端接力合作形式，<br />
                        前端工程師可採用 UI 設計師的設計稿，<br />
                        一同產出完整作品。
                    </span>
                </div>
            </div>
        </ApplyCss>
    )
}
