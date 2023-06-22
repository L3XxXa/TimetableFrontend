import React from 'react';
import "./CSS/GI.css"


const GIbutton = (props) => {
    return (
        <div>
            <button className="GI" onClick={props.onClick}> </button>
        </div>
    );
};

export default GIbutton;