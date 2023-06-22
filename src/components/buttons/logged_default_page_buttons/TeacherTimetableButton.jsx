import React from 'react';
import "./TTB.css"


const TeacherTimetableButton = (props) => {
    return (
        <div>
            <button className="TTBlogged" onClick={props.onClick}> </button>
        </div>
    );
};

export default TeacherTimetableButton;