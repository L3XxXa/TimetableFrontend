import React from 'react';
import './AddYearButtonSettings.css'
const AddYearButtonSettings = (props) => {
    return (
        <div>
            <button className="add-year-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddYearButtonSettings;