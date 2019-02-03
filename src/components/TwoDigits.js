import React from 'react';
import Digit from './Digit';
import './TwoDigits.css';

const TwoDigits = ({digitOne, digitTwo, prevValOne, prevValTwo, nextValOne, nextValTwo, animOne, animTwo}) => (
    <div className="twoDigits">
            <Digit anim={animOne} prevVal={prevValOne} curVal={digitOne} nextVal={nextValOne}/>
            <Digit anim={animTwo} prevVal={prevValTwo} curVal={digitTwo} nextVal={nextValTwo}/>
    </div>
)

export default TwoDigits;