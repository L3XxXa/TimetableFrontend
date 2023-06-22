import React from 'react';
import "./CSS/FF.css"


const FFbutton = (props) => {
    return (
        <div>
            <button className="FF" onClick={props.onClick}> </button>
        </div>
    );
};

export default FFbutton;