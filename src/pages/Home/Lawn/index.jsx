import React from 'react'
import { LawnCss, PassAnimateCss } from './style'
import tree1 from '../../../assets/tree1.png'
import tree2 from '../../../assets/tree2.png'
import hana from '../../../assets/hana.png'
import chair from '../../../assets/chair.png'
import blue from '../../../assets/blue.gif'
import yuusha from '../../../assets/yuusha.gif'
import litingBegin from '../../../assets/litingBegin.gif'

const Lawn = ({ lawnRef }) => {

    return (
        <LawnCss className='position-relative' ref={lawnRef}>
            <PassAnimateCss className='position-fixed w-100 top-50 start-50 tran'>
                <div className="position-relative passAnimate w-100"></div>
            </PassAnimateCss>
            <img src={litingBegin} alt="" className='litingBegin position-absolute'/>
            <img src={yuusha} alt="" className='yuusha position-absolute' />
            {/* <img src={litingBegin} alt="" className='litingBegin'/> */}
            <img src={tree1} alt="" className='tree1 position-absolute tree1Style' />
            <img src={tree1} alt="" className='tree2 position-absolute tree1Style' />
            <img src={tree2} alt="" className='tree3 position-absolute tree2Style' />
            <img src={tree2} alt="" className='tree4 position-absolute tree2Style' />
            <img src={hana} alt="" className="hana1 position-absolute hanaStyle" />
            <img src={hana} alt="" className="hana2 position-absolute hanaStyle" />
            <img src={hana} alt="" className="hana3 position-absolute hanaStyle" />
            <img src={hana} alt="" className="hana4 position-absolute hanaStyle" />
            <img src={chair} alt="" className="chair1 position-absolute chairStyle" />
            <img src={chair} alt="" className="chair2 position-absolute chairStyle" />
            <img src={blue} alt='' className='blue pCenter' />

        </LawnCss>
    )
}

export default Lawn