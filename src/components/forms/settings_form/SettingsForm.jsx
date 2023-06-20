import React from 'react';
import CustomInputForLogin from "../../inputs/CustomInputForLogin";
import "./SettingsForm.css"
import CustomInputForSettings from "../../inputs/CustomInputForSettings";
import CustomInputForSettings2 from "../../inputs/CustomInputForSettings2";
import LoginButton from "../../buttons/login_button/LoginButton";
import AddUserButtonSettings from "../../buttons/ButtonsForSettings/AddUserButtonSettings";
import AddFacultyButtonSettings from "../../buttons/ButtonsForSettings/AddFacultyButtonSettings";
import ExitButtonSettings from "../../buttons/ButtonsForSettings/ExitButtonSettings";
import GenerateButtonSettings from "../../buttons/ButtonsForSettings/GenerateButtonSettings";
import cookies from "../../../cookies/Cookies";
const SettingsForm = () => {
  return (
      <div className="settings-form-container">
        <label className="label1">Имя пользователя</label>
          <CustomInputForSettings name={cookies.getCookies("login")}/>
          <label className="label2">Роль</label>
          <CustomInputForSettings2 role={cookies.getCookies("role")}/>
          <div className="add-user-button-button">
              <AddUserButtonSettings text={"Добавить пользователя"} />
          </div>
          <div className="add-faculty-button-button">
              <AddFacultyButtonSettings text={"Добавить факультет"} />
          </div>
          <div className="generate-button-button">
              <GenerateButtonSettings text={"Сгенерировать расписание"} />
          </div>
          <div className="exit-button-button">
              <ExitButtonSettings text={"Выйти"} />
          </div>

      </div>

  );
};

export default SettingsForm;