import React from 'react';
import "./stylesForDropDown.css"


function CustomDropdown(props) {
      return (
        <div >
            <select className ="drop"
                value={props.value} onChange={props.handleChange}>
                {props.options.map((option) => (
                    <option
                        value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}


export default CustomDropdown;