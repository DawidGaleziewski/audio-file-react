import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header"> 
            <div className="main-header__banner">
                <span className="banner__text">
                    <span className="banner__text--left">
                        Audio
                    </span>
                    <span className="banner__text--right">
                        File
                    </span>
                </span>
            </div>
        </header>
    )
}

export default Header;