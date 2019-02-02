import React from 'react';
import './Button.css';

const Button = ({disabled, text, actionLeft, actionRight, key}) => (
    
    <div className="buttonContainer">            
            <button 
                key={key}
                className="button"
                disabled={disabled} 
                onClick={actionLeft} 
                onContextMenu={actionRight}
            >
            {text}     
            </button>      
    </div>
)

export default Button;