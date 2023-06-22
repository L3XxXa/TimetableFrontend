import React, {useState} from 'react';
import './AddUserForm.css'
import AddButton from "../../buttons/add_user_button/AddButton";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import CustomPasswordForAddUser from "../../inputs/CustomPasswordForAddUser";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const AddUserForm = () => {
  const[login, setLogin] = useState('')
  const[password, setPassword] = useState('')
  const[name, setName] = useState('')
  const[surname, setSurname] = useState('')
  const[email, setEmail] = useState('')
  const[role, setRole] = React.useState('1');

  const options = [
    {label: 'Ученик', value: '1'},
    {label: 'Учитель', value: '2'},
  ];

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const navigate = useNavigate()

  async function addUser(){
    let userRole = []
    switch (role){
      case '1': {
        userRole.push("STUDENT")
        break
      }
      case '2': {
        userRole.push("TEACHER")
        break
      }
    }
    const data = {
      'fullname': name + " " + surname,
      'login': login,
      'email': email,
      'password': password,
      'roles': userRole
    }
    console.log(data);
    await api.addUser(data).then( () => {
        alert(`Пользователь ${name + " " + surname} добавлен`)
        navigate('/settings')
      }
    ).catch(error => {
        alert(error.response.data)
    })
  }
  return (
    <div className="auth-form-container">
      <h2 className="h2">Добавление пользователя</h2>
      <h3 className="h3">Университетский аккаунт</h3>
      <label className="label">Логин пользователя</label>
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
      <label className="label">Имя пользователя</label>
      <CustomInputForAddUser placeholder={"Введите имя пользователя"} value={name} onChange={event => {
        setName(event.target.value)
      }
      }
      />
      <label className="label">Фамилия пользователя</label>
      <CustomInputForAddUser placeholder={"Введите фамилию пользователя"} value={surname} onChange={event => {
        setSurname(event.target.value)
      }
      }
      />
      <label className="label">Электронная почта пользователя</label>
      <CustomInputForAddUser placeholder={"Введите электронную почту пользователя"} value={email} onChange={event => {
        setEmail(event.target.value)
      }
      }
      />
      <label className="label">Роль</label>
      <CustomDropdown placeholder={"Выберите роль"} options={options} handleChange={event => {
        handleChange(event)
      }
      }/>
        <AddButton text={"Добавить"} onClick={addUser}/>
    </div>
  );
};

export default AddUserForm;