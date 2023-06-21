import React from 'react';
import './AddLessonButtonSettings.css'
const AddLessonButtonSettings = (props) => {
    return (
        <div>
            <button className="add-Lesson-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddLessonButtonSettings;