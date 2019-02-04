import React from 'react';
import './Digit.css';

const Digit = ({curVal}) => (
        <div className="digitWrapper">
            <div className="digit">{curVal}</div>
        </div>
) 

export default Digit;
