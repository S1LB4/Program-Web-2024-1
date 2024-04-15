import React from 'react';
import './Button.css';

export const Button = ({ label = "", onClick }) => (
    <div>
        <button className="button" onClick={onClick}>
            {label}
        </button>
    </div>
);

