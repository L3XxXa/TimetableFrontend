import React, {useState} from 'react';
import './AddAdminForm.css'
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import CustomPasswordForAddUser from "../../inputs/CustomPasswordForAddUser";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";
import AddButton from "../../buttons/add_user_button/AddButton";

const AddAdminForm = () => {
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
    let userRole = ["ADMIN"]
    const data = {
      'fullname': name + " " + surname,
      'login': login,
      'email': email,
      'password': password,
      'roles': userRole
    }
    console.log(data);
    await api.addUser(data).then( () => {
        alert(`Администратор ${name + " " + surname} добавлен`)
        navigate('/settings')
      }
    ).catch(error => {
        alert(error.response.data)
    })
  }
  return (
    <div className="auth-form-container">
      <h2 className="h2">Добавление администратора</h2>
      <label className="label">Логин администратора</label>
      <CustomInputForAddUser placeholder={"Введите логин администратора"} value={login} onChange={event => {
        setLogin(event.target.value)
      }
      }/>
      <label className="label">Пароль администратора</label>
      <CustomPasswordForAddUser placeholder={"Введите пароль администратора"} value={password} onChange={event => {
        setPassword(event.target.value)
      }
      }
      />
      <label className="label">Имя администратора</label>
      <CustomInputForAddUser placeholder={"Введите имя администратора"} value={name} onChange={event => {
        setName(event.target.value)
      }
      }
      />
      <label className="label">Фамилия администратора</label>
      <CustomInputForAddUser placeholder={"Введите фамилию администратора"} value={surname} onChange={event => {
        setSurname(event.target.value)
      }
      }
      />
      <label className="label">Электронная почта администратора</label>
      <CustomInputForAddUser placeholder={"Введите электронную почту администратора"} value={email} onChange={event => {
        setEmail(event.target.value)
      }
      }
      />
      <div className="add-button">
        <AddButton text={"Добавить"} onClick={addUser}/>
      </div>
    </div>
  );
};

export default AddAdminForm;