import React from 'react';
import Button from './Button';
import './Controls.css';

const Controls = ({running, toggleDisplay, increaseTime, decreaseTime, toggle}) => (

    <div className="controls">
        <Button 
            disabled={running} 
            text="+" 
            actionLeft={increaseTime().bind(this, 1)}
            actionRight={increaseTime().bind(this, 10)}
        />
        
        <Button 
            text={toggleDisplay} 
            actionLeft={toggle()}
        />
        
        <Button 
            disabled={running} 
            text="-" 
            actionLeft={decreaseTime().bind(this, 1)}
            actionRight={decreaseTime().bind(this, 10)}
        />
    </div>
)

export default Controls;