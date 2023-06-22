import React from 'react';
import "./CSS/MMF.css"


const MMFbutton = (props) => {
    return (
        <div>
            <button className="MMF" onClick={props.onClick}> </button>
        </div>
    );
};

export default MMFbutton;