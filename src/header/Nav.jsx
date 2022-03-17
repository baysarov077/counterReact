import React from 'react';
import ReactDOM from 'react-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li className='list-item'>Главная</li>
                <li className='list-item'>О нас</li>
                <li className='list-item'>Контакты</li>
            </ul>
        </nav>
    );
};

export default Nav;