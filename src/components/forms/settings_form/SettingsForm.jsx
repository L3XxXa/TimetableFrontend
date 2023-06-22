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
import GoBackButtonSettings from "../../buttons/go_back_button/GoBackButtonSettings";
import AddAdminButton from "../../buttons/ButtonsForSettings/AddAdminButton";

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

  function openAddStudyYear(){
    navigate('/addStudyYear')
  }

  function openAddGroup(){
    navigate('/addGroup')
  }

  function openAddStudent(){
    navigate('/addStudent')
  }

  function openAddSubject(){
    navigate('/addSubject')
  }

  function openAddLesson(){
    navigate('/addLesson')
  }

  function openAddTeacherPage(){
    navigate('/addTeacher')
  }

  function openHome(){
      navigate('/home')
  }

  function openAddAdmin(){
      navigate('/addAdmin')
  }

  return (
      <div className="settings-form-container">
          <div style={{transform: "translate(0%, -100%)"}}>
            <GoBackButtonSettings text={"Назад"} onClick={openHome}/>
          </div>
        <label className="label1">Имя пользователя</label>
          <CustomInputForSettings name={cookies.getCookies("login")}/>
          <label className="label2">Роль</label>
          <CustomInputForSettings2 role={cookies.getCookies("role")}/>
          <div style = {{ display: isVisible ? "block": "none" }}>
              <AddUserButtonSettings onClick={openAddUser} text={"Добавить пользователя"} />
          </div>
          <div style = {{ display: isVisible ? "block": "none" }}>
              <AddAdminButton onClick={openAddAdmin} text={"Добавить администратора"} />
          </div>
          <div style = {{ display: isVisible ? "block": "none" }}>
              <AddFacultyButtonSettings onClick={openAddFaculty} text={"Добавить факультет"} />
          </div>

        <div style = {{ display: isVisible ? "block": "none" }} >
          <AddSpecializationButtonSettings text={"Добавить специализацию"} onClick={openAddSpecialization}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }}>
          <AddYearButtonSettings text={"Добавить год обучения"} onClick={openAddStudyYear}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }} >
          <AddGroupButtonSettings text={"Добавить группу"} onClick={openAddGroup}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }}>
          <AddSubjButtonSettings text={"Добавить предмет"} onClick={openAddSubject}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }} >
          <AddStudentButtonSettings text={"Добавить ученика"} onClick={openAddStudent}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }} >
          <AddTeacherButtonSettings text={"Добавить преподавателя"} onClick={openAddTeacherPage}/>
        </div>
        <div style = {{ display: isVisible ? "block": "none" }} >
          <AddLessonButtonSettings text={"Добавить урок"} onClick={openAddLesson}/>
        </div>

        <div style = {{ display: isVisible ? "block": "none" }}>
          <AddRoomButtonSettings onClick={openAddRoom} text={"Добавить комнату"} />
        </div>
          <div style = {{ display: isVisible ? "block": "none" }} >
              <GenerateButtonSettings text={"Сгенерировать расписание"} />
          </div>
          <div className="exit-button-button">
              <ExitButtonSettings onClick={logout} text={"Выйти"} />
          </div>

      </div>

  );
};

export default SettingsForm;