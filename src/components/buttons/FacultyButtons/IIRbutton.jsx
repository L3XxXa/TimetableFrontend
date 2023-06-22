import React from 'react';
import "./CSS/IIR.css"


const IIRbutton = (props) => {
    return (
        <div>
            <button className="IIR" onClick={props.onClick}> </button>
        </div>
    );
};

export default IIRbutton;