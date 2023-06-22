import React from 'react';
import "./CSS/FIT.css"


const FITbutton = (props) => {
    return (
        <div>
            <button className="FIT" onClick={props.onClick}> </button>
        </div>
    );
};

export default FITbutton;