import React from "react";
import LawnScreen from './LawnScreen'
import glassBlueMobile from '../../../assets/glassBlueMobile.png'
import glassYellowMobile from '../../../assets/glassYellowMobile.png'
import glassRedMobile from '../../../assets/glassRedMobile.png'

const data = [
  { img: glassBlueMobile, text: '羨慕別人的酷酷網頁動畫？', name: '怪物A' },
  { img: glassYellowMobile, text: '滿足不了同事的許願？？', name: '怪物B' },
  { img: glassRedMobile, text: '動畫技能樹太雜無從下手？', name: '怪物C' }
]


export default function LawnMobile() {
  return (
    <>
      {data.map((ele, idx) => <LawnScreen {...ele} key={idx} />)}
    </>);
}
