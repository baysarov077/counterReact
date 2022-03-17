import React from 'react';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import Copyright from './Copyright';
const Footer = () => {
    return (
        <footer>
            <div className='footer-item'>
            <FooterLogo />
            <FooterMenu />
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;