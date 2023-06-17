import React, {useState} from 'react';
import CustomInputForLogin from "../../inputs/CustomInputForLogin";
import CustomPasswordForLogin from "../../inputs/CustomPasswordForLogin";
import LoginButton from "../../buttons/login_button/LoginButton";
import './LoginForm.css'
const LoginForm = () => {
  const[login, setLogin] = useState('')
  const[password, setPassword] = useState('')
  function loginUser(){
    alert(login + " " + password)
  }
  return (
    <div className="auth-form-container">
      <h2 className="h2">Вход в личный кабинет</h2>
      <h3 className="h3">Под университетским аккаунтом</h3>
      <label className="label">Имя пользователя</label>
      <CustomInputForLogin placeholder={"Введите логин"} value={login} onChange={event => {
        setLogin(event.target.value)
      }
      }/>
      <label className="label">Пароль</label>
      <CustomPasswordForLogin placeholder={"Введите пароль"} value={password} onChange={event => {
            setPassword(event.target.value)
          }
        }
      />
      <div className="login-button">
        <LoginButton text={"Войти"} onClick={loginUser}/>
      </div>
    </div>
  );
};

export default LoginForm;