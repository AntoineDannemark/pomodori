import React from 'react';
import './Digit.css';

const Digit = ({curVal, anim}) => (
    <div className={`threeDigitsWrapper ${anim}`}>
        <div className="digit">{curVal - 1}</div>
        <div className="digit">{curVal}</div>
        <div className="digit">{curVal + 1}</div>
    </div>
) 

export default Digit;