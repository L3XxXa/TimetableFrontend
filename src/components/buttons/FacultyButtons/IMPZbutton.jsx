import React from 'react';
import "./CSS/IMPZ.css"


const IMPZbutton = (props) => {
    return (
        <div>
            <button className="IMPZ" onClick={props.onClick}> </button>
        </div>
    );
};

export default IMPZbutton;