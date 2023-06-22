import React from 'react';
import "./CSS/IFP.css"


const IFPbutton = (props) => {
    return (
        <div>
            <button className="IFP" onClick={props.onClick}> </button>
        </div>
    );
};

export default IFPbutton;