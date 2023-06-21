import React, {useState} from 'react';
import "./AddRoomForm.css"
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import CustomDropdown from "../../inputs/CustomDropdown";
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const AddRoomForm = () => {
  const[roomName, setRoomName] = useState('')
  const[roomCapacity, setRoomCapacity] = useState('')
  const[roomType, setRoomType] = React.useState('1');
  const navigate = useNavigate()
  const handleChange = (event) => {
    setRoomType(event.target.value);
  };

  async function addRoom() {
    let room
    switch (roomType) {
      case '1': {
        room = "LECTURE"
        break
      }
      case '2': {
        room = "PRACTICE"
        break
      }
      case '3': {
        room = "LABORATORY"
      }
    }
    let data = {
      "capacity": roomCapacity,
      "roomType": room,
      "number": roomName
    }
    await api.addRoom(data).catch(error => {
      alert("Такая аудитория уже добавлена")
    })
    alert("Комната добавлена")
    navigate('/settings')
  }
  const options = [
    {label: 'Лекторская', value: '1'},
    {label: 'Семинарская', value: '2'},
    {label: 'Лабораторная', value: '3'},
  ];

  return (
    <div className="auth-form-container">
      <h2 className="h2">Добавить аудиторию</h2>
      <label className="label">Номер аудитории</label>
      <CustomInputForAddUser placeholder={"Введите номер аудитории"} value={roomName} onChange={event => {
        setRoomName(event.target.value)
      }
      }/>
      <label className="label">Вместимость</label>
      <CustomInputForAddUser placeholder={"Введите вместимость"} value={roomCapacity} onChange={event => {
        setRoomCapacity(event.target.value)
      }
      }/>
      <label className="label">Тип комнаты</label>
      <CustomDropdown options={options} handleChange={event => {
          handleChange(event)
        }
      }/>
      <div className="add-user-button">
        <AddUserButton text={"Добавить"} onClick={addRoom}/>
      </div>
    </div>
  );
};

export default AddRoomForm;