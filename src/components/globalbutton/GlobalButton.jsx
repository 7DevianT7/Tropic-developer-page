import React from 'react';
import './globalbutton.style.css';

const GlobalButton = ({ 
    displayText, 
    onClick, 
    disabled = false, 
    type = 'button',
    ariaLabel = displayText,
    variant = 'default' // 'default' or 'outline'
}) => {
    const buttonClass = `global-button ${variant === 'outline' ? 'outline' : ''}`;
    
    return (
        <button 
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            type={type}
            aria-label={ariaLabel}
        >
            {displayText}
        </button>
    );
};

export default GlobalButton;