import React from 'react';
import './Button.css';
import alarmBtnClean from '../img/alarmBtnClean.png'

const Button = ({disabled, text, actionLeft, actionRight, key}) => (
    
    <div className="buttonContainer">            
            <button 
                key={key}
                className="btn"
                disabled={disabled} 
                onClick={actionLeft} 
                onContextMenu={actionRight}
            >
            <img src={alarmBtnClean} alt=""></img>     
            </button>      
    </div>
)

export default Button;