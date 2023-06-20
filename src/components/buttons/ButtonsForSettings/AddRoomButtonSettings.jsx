import React from 'react';
import './AddRoomButtonSettings.css'
const AddRoomButtonSettings = (props) => {
    return (
        <div>
            <button className="add-room-button-settings" onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default AddRoomButtonSettings;