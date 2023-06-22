import React from 'react';
import './GoBackButton.css'
const GoBackButtonSettings = (props) => {
    return (
        <div>
            <button className="generate-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default GoBackButtonSettings;