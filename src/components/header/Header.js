import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {

    const [isNavBackground, setIsNavBackground] = useState(false)
    

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100){
                return setIsNavBackground(true);
            }else {
                return setIsNavBackground(false);
            }
        });
        return window.removeEventListener('scroll', ()=> {});
        
    },[]);
    
    return (
        <div className={`header ${isNavBackground ? 'header__backround': ''}`}>
            <div className="logo">LOGO</div>
            <div className="search">
                <input type="search" placeholder='search movie...'/>
            </div>
        </div>
    )
}

export default Header
