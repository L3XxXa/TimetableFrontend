import React from 'react';
import './AddTeacherButtonSettings.css'
const AddTeacherButtonSettings = (props) => {
    return (
        <div>
            <button className="add-Teacher-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddTeacherButtonSettings;