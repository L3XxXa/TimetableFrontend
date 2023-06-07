import React from 'react';
import './AddUserButton.css'
const AddUserButton = (props) => {
  return (
    <div>
      <button className="add-user-button" onClick={props.onClick}>{props.text}</button>

    </div>
  );
};

export default AddUserButton;