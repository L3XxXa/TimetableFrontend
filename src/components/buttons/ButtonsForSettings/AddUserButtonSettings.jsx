import React from 'react';
import './AddUserButtonSettings.css'
const AddUserButtonSettings = (props) => {
    return (
        <div>
            <button className="add-user-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddUserButtonSettings;