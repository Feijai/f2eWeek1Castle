import React from 'react'
import { SponsorCardCss } from './style'

export default function SponsorCard(props) {
  console.log(props)
  const { home, logo, name } = props
  return (
    <SponsorCardCss className='bg-white d-flex align-items-center'>
      <img src={home} alt="" className='home'/>
      <div className='align-items-center'>
        <img src={logo} alt="" className='logo'/>
        <p className='text'>{name}</p>
      </div>
    </SponsorCardCss>
  )
}
