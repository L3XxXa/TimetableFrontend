import React, {useState} from 'react';
import './AddUserForm.css'
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import CustomPasswordForAddUser from "../../inputs/CustomPasswordForAddUser";

const AddUserForm = () => {
  const[login, setLogin] = useState('')
  const[password, setPassword] = useState('')
  const[role, setRole] = useState('')

  function addUser(){
    alert(login + " " + password + " " + role)
  }
  return (
    <div className="auth-form-container">
      <h2 className="h2">Добавление пользователя</h2>
      <h3 className="h3">Университетский аккаунт</h3>
      <label className="label">Имя пользователя</label>
      <CustomInputForAddUser placeholder={"Введите логин"} value={login} onChange={event => {
        setLogin(event.target.value)
      }
      }/>
      <label className="label">Пароль</label>
      <CustomPasswordForAddUser placeholder={"Введите пароль"} value={password} onChange={event => {
        setPassword(event.target.value)
      }
      }
      />
      <div className="add-user-button">
        <AddUserButton text={"Добавить"} onClick={addUser}/>
      </div>
    </div>
  );
};

export default AddUserForm;