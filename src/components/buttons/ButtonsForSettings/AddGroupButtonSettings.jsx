import React from 'react';
import './AddGroupButtonSettings.css'
const AddGroupButtonSettings = (props) => {
    return (
        <div>
            <button className="add-Group-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddGroupButtonSettings;