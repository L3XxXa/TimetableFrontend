import React from 'react';
import {useNavigate} from "react-router-dom";
import './OpenLoginButton.css'
const OpenLoginButton = () => {
  const navigate = useNavigate()
  function navigateToLoginForm(){
    navigate('/login')
  }
  return (
    <div>
      <button onClick={navigateToLoginForm} className="open__login__button">Войти</button>
    </div>
  );
};

export default OpenLoginButton;