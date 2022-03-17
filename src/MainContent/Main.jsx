import React from 'react';
import ReactDOM from 'react-dom';
import Number from './Number';
import Buttons from './Buttons';
const Main = () => {
    return (
        <main className='main'>
            <Number />
            <div className='buttons'>
            <Buttons />
            </div>
        </main>
    );
};

export default Main;