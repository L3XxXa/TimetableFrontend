import React from 'react';
import './AddSubjButtonSettings.css'
const AddSubjButtonSettings = (props) => {
    return (
        <div>
            <button className="add-Subj-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddSubjButtonSettings;