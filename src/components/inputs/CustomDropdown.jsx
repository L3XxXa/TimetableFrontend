import React from 'react';
import "./stylesForDropDown.css"


function CustomDropdown(props) {

    const options = [
        {label: 'Ученик', value: '1'},
        {label: 'Учитель', value: '2'},
    ];



    return (
        <div >
            <select className ="drop"
                value={props.value} onChange={props.handleChange}>
                {options.map((option) => (
                    <option
                        value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}


export default CustomDropdown;