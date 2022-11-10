import React from 'react'
import { LevelCardCss } from './style'

const LevelCard = (props) => {
    const { pic, title, text, company, week } = props
    console.log(text)
    return (
        <LevelCardCss className={`${week}`} >
            <img src={pic} alt="" className='w-100' />
            <div className='mt-3 '>
                <span className='week'>{week}</span>
                <button className='ms-3 themeButton'>{text}</button>
            </div>
            <h3 className='mt-3'>
                {title.length === 2 ? title.map((ele, textIdx) => (
                    <React.Fragment key={textIdx}>
                        <span>{ele}</span>
                        {text.length > textIdx && <br />}
                    </React.Fragment>
                )) : <div className='h-100 d-flex align-items-center'>{title}</div>}
            </h3>
            <div className='dCenter'>
                <button className='company text-white'>{company}</button>
            </div>

        </LevelCardCss >
    )
}


export default LevelCard