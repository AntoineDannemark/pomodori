import React from 'react';
import Digit from './Digit';
import './TwoDigits.css';

const TwoDigits = ({digitOne, digitTwo,}) => (
    <div className="twoDigits">
            <Digit anim={animOne} curVal={digitOne}/>
            <Digit anim={animTwo} curVal={digitTwo}/>
    </div>
)

export default TwoDigits;