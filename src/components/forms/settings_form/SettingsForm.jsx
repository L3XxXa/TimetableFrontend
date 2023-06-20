import React, {useEffect, useState} from 'react';
import "./SettingsForm.css"
import CustomInputForSettings from "../../inputs/CustomInputForSettings";
import CustomInputForSettings2 from "../../inputs/CustomInputForSettings2";
import AddUserButtonSettings from "../../buttons/ButtonsForSettings/AddUserButtonSettings";
import AddFacultyButtonSettings from "../../buttons/ButtonsForSettings/AddFacultyButtonSettings";
import ExitButtonSettings from "../../buttons/ButtonsForSettings/ExitButtonSettings";
import GenerateButtonSettings from "../../buttons/ButtonsForSettings/GenerateButtonSettings";
import cookies from "../../../cookies/Cookies";
import {useNavigate} from "react-router-dom";
import AddRoomButtonSettings from "../../buttons/ButtonsForSettings/AddRoomButtonSettings";

const SettingsForm = () => {
  const navigate = useNavigate()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (cookies.getCookies('role') === "ADMIN"){
      setVisible(true)
    }
  }, [])

  function openAddUser(){
    navigate('/addUser')
  }
  function openAddFaculty(){
    navigate('/addFaculty')
  }

  function openAddRoom(){
    navigate('/addRoom')
  }

  function logout(){
    let logout = window.confirm("Вы действительно хотите выйти?")
    if (logout){
      cookies.addCookies('role', "")
      cookies.addCookies('login', "")
      cookies.addCookies('accessToken', '')
      cookies.addCookies('refreshToken', '')
      cookies.addCookies('type', '')
      navigate('/')
    }
  }

  return (
      <div className="settings-form-container">
        <label className="label1">Имя пользователя</label>
          <CustomInputForSettings name={cookies.getCookies("login")}/>
          <label className="label2">Роль</label>
          <CustomInputForSettings2 role={cookies.getCookies("role")}/>
          <div style = {{ visibility: isVisible ? "visible": "hidden" }}>
              <AddUserButtonSettings onClick={openAddUser} text={"Добавить пользователя"} />
          </div>
          <div style = {{ visibility: isVisible ? "visible": "hidden" }}>
              <AddFacultyButtonSettings onClick={openAddFaculty} text={"Добавить факультет"} />
          </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }}>
          <AddRoomButtonSettings onClick={openAddRoom} text={"Добавить комнату"} />
        </div>
          <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
              <GenerateButtonSettings text={"Сгенерировать расписание"} />
          </div>

          <div className="exit-button-button">
              <ExitButtonSettings onClick={logout} text={"Выйти"} />
          </div>

      </div>

  );
};

export default SettingsForm;