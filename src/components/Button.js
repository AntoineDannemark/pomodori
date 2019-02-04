import React from 'react';
import './Button.css';
import alarmBtnClean from '../../public/img/alarmBtnClean.png'

const Button = ({disabled, btnLogo, actionLeft, actionRight, key}) => (
    
    <div className="buttonContainer">            
            <button 
                key={key}
                className="btn"
                disabled={disabled} 
                onClick={actionLeft} 
                onContextMenu={actionRight}
            >
            <img src={require (alarmBtnClean)} alt=""></img>     
            </button>      
            <div className="btnLogo">{btnLogo}</div>
    </div>
)

export default Button;