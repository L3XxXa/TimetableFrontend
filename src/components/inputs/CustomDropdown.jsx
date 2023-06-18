import React from 'react';
import "./stylesForDropDown.css"


function CustomDropdown() {

    const options = [

        {label: 'Ученик', value: '1'},

        {label: 'Учитель', value: '2'},

    ];

    const [value, setValue] = React.useState('Teacher');

    const handleChange = (event) => {

        setValue(event.target.value);

    };

    return (
        <div >
            <select className ="drop"
                value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option
                        value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}


export default CustomDropdown;