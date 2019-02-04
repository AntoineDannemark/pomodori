import React from 'react';
import Digit from './Digit';
import './TwoDigits.css';

const TwoDigits = ({digitOne, digitTwo,}) => (
    <div className="twoDigits">
            <Digit curVal={digitOne}/>
            <Digit curVal={digitTwo}/>
    </div>
)

export default TwoDigits;