import React from 'react';
import './Input.css'

const CustomPassword = (props) => {
  return (
    <div>
      <input type="password"
             className="input"
             placeholder={props.placeholder}
             onChange={props.onChange}
             value={props.value}
      />
    </div>
  );
};

export default CustomPassword;