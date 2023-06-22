import React from 'react';
import "./CSS/FEN.css"


const FENbutton = (props) => {
    return (
        <div>
            <button className="FEN" onClick={props.onClick}> </button>
        </div>
    );
};

export default FENbutton;