import React from 'react';
import ReactDOM from 'react-dom';

const Buttons = () => {
    return (
        <>
            <button className='increment'>Увеличить</button>
            <button className='decrement'>Уменьшить</button>
            <button className='default'>Сбросить</button>
        </>
    );
};

export default Buttons;