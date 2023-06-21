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
import AddSpecializationButtonSettings from "../../buttons/ButtonsForSettings/AddSpecializationButtonSettings";
import AddYearButtonSettings from "../../buttons/ButtonsForSettings/AddYearButtonSettings";
import AddGroupButtonSettings from "../../buttons/ButtonsForSettings/AddGroupButtonSettings";
import AddSubjButtonSettings from "../../buttons/ButtonsForSettings/AddSubjButtonSettings";
import AddStudentButtonSettings from "../../buttons/ButtonsForSettings/AddStudentButtonSettings";
import AddTeacherButtonSettings from "../../buttons/ButtonsForSettings/AddTeacherButtonSettings";
import AddLessonButtonSettings from "../../buttons/ButtonsForSettings/AddLessonButtonSettings";

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

  function openAddSpecialization(){
    navigate('/addSpecialization')
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

        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddSpecializationButtonSettings text={"Добавить специализацию"} onClick={openAddSpecialization}/>
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddYearButtonSettings text={"Добавить год обучения"} />
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddGroupButtonSettings text={"Добавить группу"} />
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddSubjButtonSettings text={"Добавить предмет"} />
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddStudentButtonSettings text={"Добавить ученика"} />
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddTeacherButtonSettings text={"Добавить преподавателя"} />
        </div>
        <div style = {{ visibility: isVisible ? "visible": "hidden" }} >
          <AddLessonButtonSettings text={"Добавить урок"} />
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