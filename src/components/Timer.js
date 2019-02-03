import React from 'react';
import TwoDigits from './TwoDigits';
import Separator from './Separator';
import './Timer.css';

const Timer = ({digits, prevVals, nextVals, anims}) => (
    <div className="timer">
            <TwoDigits 
                digitOne={digits[0]} 
                digitTwo={digits[1]}
                prevValOne={prevVals[0]}
                prevValTwo={prevVals[1]}
                nextValOne={nextVals[0]}
                nextValTwo={nextVals[1]}
                animOne={anims[0]}
                animTwo={anims[1]}

            />         
            <Separator />
            <TwoDigits 
                digitOne={digits[2]} 
                digitTwo={digits[3]}
                prevValOne={prevVals[2]}
                prevValTwo={prevVals[3]}
                nextValOne={nextVals[2]}
                nextValTwo={nextVals[3]}
                animOne={anims[2]}
                animTwo={anims[3]}
            />    
    </div>
)

export default Timer;