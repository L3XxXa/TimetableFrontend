import React from 'react';
import './AddFacultyButtonSettings.css'
const AddFacultyButtonSettings = (props) => {
    return (
        <div>
            <button className="add-faculty-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddFacultyButtonSettings;