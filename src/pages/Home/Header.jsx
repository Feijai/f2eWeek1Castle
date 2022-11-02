import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import HeaderButton from './HeaderButton'

const HeaderCss = styled.div`
    height:5rem;
    .logo{
        height:29px;
        width:230px;
    }
    .menu{
        column-gap:16px;
    }
    a{
        text-decoration: none;
        color:white;
    }
`

const Header = () => {
    return (
        <HeaderCss className='bg-black text-white'>
            <div className='container h-100'>
                <div className='d-flex h-100 align-items-center justify-content-between'>
                    <img src={logo} alt='' className='logo' />
                    <div className='menu d-flex align-items-center justify-content-between'>
                        <Link to='/' className="">
                            <span className=''>關卡資訊</span>
                        </Link>
                        <Link to='/' className="">
                            <span className=''>攻略資源</span>
                        </Link>
                        <Link to='/' className="">
                            <span className=''>求職專區</span>
                        </Link>
                        <HeaderButton text={'註冊報名'} />
                        <HeaderButton text={'登入'} />
                    </div>
                </div>
            </div>
        </HeaderCss>
    )
}

export default Header