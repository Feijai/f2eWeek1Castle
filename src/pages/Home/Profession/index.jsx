import React, { useState } from 'react'
import { ProfessionCss } from './style'
import pumpkinMan from '../../../assets/pumpkinMan.gif'
import redshirt from '../../../assets/redshirt.png'
import redman from '../../../assets/redman.png'
import pinkshirt from '../../../assets/pinkshirt.png'
import pinkman from '../../../assets/pinkman.png'
import pig from '../../../assets/pig.png'
import pigAll from '../../../assets/pigAll.png'
import blueshirt from '../../../assets/blueshirt.png'
import blueman from '../../../assets/blueman.png'
import greenshirt from '../../../assets/greenshirt.png'
import greenman from '../../../assets/greenman.png'
import waterpig from '../../../assets/waterpig.png'
import waterpigAll from '../../../assets/waterpigAll.png'
import liting from '../../../assets/liting.gif'

const Profession = () => {
    const data = [
        { name: 'no', text: '選擇你的角色', people: pumpkinMan },
        { name: 'redshirt', text: 'UI新手', people: redman },
        { name: 'pinkshirt', text: 'UI 設計師', people: pinkman },
        { name: 'pig', text: 'UI生物', people: pigAll },
        { name: 'blueshirt', text: '前端新手', people: blueman },
        { name: 'greenshirt', text: '前端工程師', people: greenman },
        { name: 'waterpig', text: '前端生物', people: waterpigAll },
    ]
    const handleFilterData = (name) => data.filter(ele => ele.name === name)

    const [role, setRole] = useState(...handleFilterData('no'))
    const [width ,setWidth] = useState('backgroundFull')
    const handleMouseOver = (e) => {
        e.target.style["-webkit-filter"] = "grayscale(0)"
        e.target.style.border = "6px solid #FF392D"
        setRole(
            ...handleFilterData(e.target.className.split(' ')[0])
        )
        setWidth('backgroundFull')
    }
    const handleMouseOut = (e) => {
        e.target.style["-webkit-filter"] = "grayscale(1)"
        e.target.style.border = "6px solid #FFFFFF"
        setRole(...handleFilterData('no'))
        setWidth('w-100')

    }
    return (
        <ProfessionCss className='bg-black text-white position-relative'>
            {role?.name==='no' && <img src={liting} alt="" className='liting position-absolute s-0 top-0 h-100'/>}
            {role?.name==='no' && <img src={liting} alt="" className='liting position-absolute end-0 top-0 h-100'/>}
            <div className={`container bg-black ${width} `}>
                <h2 className='title text-center cublic'>互動式網頁設計</h2>
                <div className='chooseProfession d-flex'>
                    <div className='position-relative'>
                        <img src={role?.people} alt="" className={`pumpkinMan ${role?.name === 'no' ? "toGray" : null}`} />
                        <h3 className={`chooseText cublic text-center ${role?.name === 'no' ? null : 'textStroke linerLite'}`}>{role?.text}</h3>
                    </div>
                    <div className='role'>
                        <h4 className='d-none d-lg-block chooseRole cublic text-center textStroke linerLite'>
                            CHOOSE A FIGHTER
                        </h4>
                        <h4 className='text-center mt-3 text-white roleTitle cublic textStroke'>UI 設計師</h4>
                        <div className="ui mt-3 mb-3 text-center">
                            <img src={redshirt} alt="" className='redshirt toGray charactor' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                            <img src={pinkshirt} alt="" className='pinkshirt toGray charactor' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                            <img src={pig} alt="" className='pig toGray charactor' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                        </div>
                        <h4 className='text-center mt-3 text-white roleTitle cublic textStroke'>前端工程師</h4>
                        <div className="f2e text-center mt-3">
                            <img src={blueshirt} alt="" className='blueshirt toGray charactor ' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                            <img src={greenshirt} alt="" className='greenshirt toGray charactor' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                            <img src={waterpig} alt="" className='waterpig toGray charactor' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                        </div>
                    </div>
                </div>
            </div>
        </ProfessionCss>
    )
}


export default Profession