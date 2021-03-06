import React from 'react';
import Button from './Button';
import './Controls.css';

const Controls = ({running, toggleDisplay, increaseTime, decreaseTime, toggle, title}) => (

    <div className="controls">

        

        
        <Button 
            disabled={running} 
            btnLogo="-" 
            actionLeft={decreaseTime().bind(this, 1)}
            actionRight={decreaseTime().bind(this, 10)}
            title={title[0]}
        />
            
        <Button 
            btnLogo={toggleDisplay} 
            actionLeft={toggle()}
            title={title[1]}
        />

        <Button 
            disabled={running} 
            btnLogo="+" 
            actionLeft={increaseTime().bind(this, 1)}
            actionRight={increaseTime().bind(this, 10)}
            title= {title[2]}
        />
    </div>
)

export default Controls;