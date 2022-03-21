import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';


const Number = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        if(counter != 0){
            setCounter(counter - 1)
        }
    }
    function reset() {
        setCounter(0)
    }
    return (
        <div>
            <span className='number'>{counter}</span>
            <div className='buttons'>
                <button onClick={increment} className='increment'>Увеличить</button>
                <button onClick={decrement} className='decrement'>Уменьшить</button>
                <button onClick={reset} className='default'>Сбросить</button>
            </div>
        </div>
    );
};

export default Number;