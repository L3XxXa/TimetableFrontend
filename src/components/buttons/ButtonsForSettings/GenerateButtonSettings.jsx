import React from 'react';
import './GenerateButtonSettings.css'
const GenerateButtonSettings = (props) => {
    return (
        <div>
            <button className="generate-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default GenerateButtonSettings;