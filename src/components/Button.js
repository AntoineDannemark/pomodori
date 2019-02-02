import React from 'react';
import './Button.css';

const Button = ({disabled, text, actionLeft, actionRight}) => (
    
    <div className="button">         
            <button 
                disabled={disabled} 
                onClick={actionLeft} 
                onContextMenu={actionRight}
            >
                {text}
            </button>
    </div>
)

export default Button;