import React from 'react';
import TwoDigits from './TwoDigits';
import Separator from './Separator';
import './Timer.css';

const Timer = ({digits}) => (
    <div className="timer">
            <TwoDigits digitOne={digits[0]} digitTwo={digits[1]}/>         
            <Separator />
            <TwoDigits digitOne={digits[2]} digitTwo={digits[3]}/>    
    </div>
)

export default Timer;