import React from 'react';
import './LoginButton.css'

const LoginButton = (props) => {
  return (
    <div>
      <button className="login-button" onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default LoginButton;