import React from 'react';
import Digit from './Digit';
import './TwoDigits.css';

const TwoDigits = ({digitOne, digitTwo}) => (
    <div className="twoDigits">
            <Digit className="digit" curVal={digitOne}/>
            <Digit className="digit"  curVal={digitTwo}/>
    </div>
)

export default TwoDigits;