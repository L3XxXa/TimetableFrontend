import React from 'react';

const CustomDropdown = (props) => {
  return (
    <div>
      <select className="input" onChange={props.onChange} >
        {
          props.options.map((option, index) =>
            <option key={index} value={props.options.id}> {props.options.name} </option>
          )
        }
      </select>
    </div>
  );
};

export default CustomDropdown;