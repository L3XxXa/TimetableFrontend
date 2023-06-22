import React from 'react';
import "./CSS/EF.css"


const EFbutton = (props) => {
    return (
        <div>
            <button className="EF" onClick={props.onClick}> </button>
        </div>
    );
};

export default EFbutton;