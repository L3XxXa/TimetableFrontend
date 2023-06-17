import React from 'react';
import './inputForLogin.css'

const CustomPasswordForLogin = (props) => {
  return (
    <div>
      <input type="password"
             className="inputForLogin"
             placeholder={props.placeholder}
             onChange={props.onChange}
             value={props.value}
      />
    </div>
  );
};

export default CustomPasswordForLogin;