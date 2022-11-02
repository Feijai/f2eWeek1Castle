import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import castle from '../../assets/castle.png'
import Attack from './Attack'

const CastleCss = styled.div`
    height:863px;
    background-color:black;
`

export default function Castle() {
    return (
        <CastleCss className='container position-relative p-0'>
            <Title />
            <div className='w-100 position-absolute bottom-0'>
                <img src={castle} alt="" className='w-100 ' />
            </div>
            <Attack />
        </CastleCss>
    )
}
