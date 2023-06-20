import React from 'react';
import "./SettingsForm.css"
import CustomInputForSettings from "../../inputs/CustomInputForSettings";
import CustomInputForSettings2 from "../../inputs/CustomInputForSettings2";
import AddUserButtonSettings from "../../buttons/ButtonsForSettings/AddUserButtonSettings";
import AddFacultyButtonSettings from "../../buttons/ButtonsForSettings/AddFacultyButtonSettings";
import ExitButtonSettings from "../../buttons/ButtonsForSettings/ExitButtonSettings";
import GenerateButtonSettings from "../../buttons/ButtonsForSettings/GenerateButtonSettings";
import cookies from "../../../cookies/Cookies";
import {useNavigate} from "react-router-dom";

const SettingsForm = () => {
  const navigate = useNavigate()
  function openAddUser(){
    navigate('/addUser')
  }
  function openAddFaculty(){
    navigate('/addFaculty')
  }

  function logout(){
    // slint-disable-next-line no-restricted-globals
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
          <div className="add-user-button-button">
              <AddUserButtonSettings onClick={openAddUser} text={"Добавить пользователя"} />
          </div>
          <div className="add-faculty-button-button">
              <AddFacultyButtonSettings onClick={openAddFaculty} text={"Добавить факультет"} />
          </div>
          <div className="generate-button-button">
              <GenerateButtonSettings text={"Сгенерировать расписание"} />
          </div>
          <div className="exit-button-button">
              <ExitButtonSettings onClick={logout} text={"Выйти"} />
          </div>

      </div>

  );
};

export default SettingsForm;