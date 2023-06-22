import React from 'react';
import "./CSS/GGF.css"


const GGFbutton = (props) => {
    return (
        <div>
            <button className="GGF" onClick={props.onClick}> </button>
        </div>
    );
};

export default GGFbutton;