import React from 'react';
import './AddAdminButton.css'
const AddAdminButton = (props) => {
    return (
        <div>
            <button className="add-admin-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddAdminButton;