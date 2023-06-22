import React from 'react';
import './AddButton.css'
const AddButton = (props) => {
  return (
    <div>
      <button className="add-button" onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default AddButton;