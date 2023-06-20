import React from 'react';
import './ExitButtonSettings.css'
const ExitButtonSettings = (props) => {
    return (
        <div>
            <button className="exit-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default ExitButtonSettings;