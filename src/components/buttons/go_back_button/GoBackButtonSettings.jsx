import React from 'react';
import './GoBackButton.css'
const GoBackButtonSettings = (props) => {
    return (
        <div>
            <button className="go-back-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default GoBackButtonSettings;