import React from 'react';
import './AddStudentButtonSettings.css'
const AddStudentButtonSettings = (props) => {
    return (
        <div>
            <button className="add-Student-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddStudentButtonSettings;