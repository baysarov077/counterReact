import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Logo from './Logo';
const Header = () => {
    return (
        <>
            <header>
                <Logo />
                <Nav />
            </header>
            <hr className='header-underline' />
        </>
    );
};

export default Header;