import React from 'react'
import { LawnScreenCss } from './style'
import glass1 from '../../../assets/glass1.png'


export default function LawnScreen(data) {

    return (
        <LawnScreenCss className='position-relative'>
            <img src={glass1} alt="" className='glass1 position-absolute pCenter h-100' />
            <img src={data.img} alt="" className='talker  position-absolute' />
            <div className='talkBox position-absolute text-white'>
                <p>{data.name}</p>
                <p style={{ marginTop: '1.5rem' }}>&nbsp;&nbsp;{data.text}</p>
            </div>
        </LawnScreenCss>
    )
}
