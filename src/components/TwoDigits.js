import React from 'react';
import Digit from './Digit';
import './TwoDigits.css';

const TwoDigits = ({digitOne, digitTwo, animOne, animTwo}) => (
    <div className="twoDigits">
            <Digit anim={animOne} curVal={digitOne}/>
            <Digit anim={animTwo} curVal={digitTwo}/>
    </div>
)

export default TwoDigits;