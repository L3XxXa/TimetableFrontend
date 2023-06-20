import React from 'react';
import './PersonalTimetableButton.css'

const PersonalTimetableButton = (props) => {
  return (
    <div>
      <button className="PersonalTimetableButton" onClick={props.onClick}></button>
    </div>
  );
};

export default PersonalTimetableButton;