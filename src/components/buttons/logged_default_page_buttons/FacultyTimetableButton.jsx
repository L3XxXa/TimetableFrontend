import React from 'react';
import "./FTB.css"


const FacultyTimetableButton = (props) => {
    return (
        <div>
            <button className="FTBlogged" onClick={props.onClickButton}> </button>
        </div>
    );
};

export default FacultyTimetableButton;