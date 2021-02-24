import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">LOGO</div>
            <div className="search">
                <input type="search" placeholder='search movie...'/>
            </div>
        </div>
    )
}

export default Header
