import React from 'react';
import './inputForAddUser.css'

const CustomPasswordForAddUser = (props) => {
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

export default CustomPasswordForAddUser;