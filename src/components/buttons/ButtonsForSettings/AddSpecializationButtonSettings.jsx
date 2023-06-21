import React from 'react';
import './AddSpecializationButtonSettings.css'
const AddSpecializationButtonSettings = (props) => {
    return (
        <div>
            <button className="add-specialization-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddSpecializationButtonSettings;