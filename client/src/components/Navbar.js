import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export const increment = item => {
    return item + 1;
};

export const decrement = item => {
    return item - 1;
};

const Navbar = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const [count, setCount] = useState(0);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>Players</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
            <div>{count}</div>
            <button className="incrementButton" onClick={() => setCount(increment(count))}>
                Increment
            </button>
            <button onClick={() => setCount(decrement(count))}>
                Decrement
            </button>
        </nav>
    );
};

export default Navbar;