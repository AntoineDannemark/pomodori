import React from 'react';
import './Digit.css';

const Digit = ({curVal, prevVal, nextVal, anim}) => (
    <div className={`threeDigitsWrapper ${anim}`}>
        <div className="digitWrapper">
            <div className="digit">{prevVal}</div>
        </div>
        <div className="digitWrapper">
            <div className="digit">{curVal}</div>
        </div>
        <div className="digitWrapper">
            <div className="digit">{nextVal}</div>
        </div>
    </div>
) 

export default Digit;
