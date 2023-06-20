import React, {useEffect, useState} from 'react';
import FacultyTimetableButton from "../../components/buttons/logged_default_page_buttons/FacultyTimetableButton";
import TeacherTimetableButton from "../../components/buttons/logged_default_page_buttons/TeacherTimetableButton";
import PersonalTimetableButton from "../../components/buttons/logged_default_page_buttons/PersonalTimetableButton";
import cookies from "../../cookies/Cookies";
import {useNavigate} from "react-router-dom";

const DefaultLoggedPage = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState("")

  function checkIfLogged(){
    const loginCookie = cookies.getCookies("login")
    if (loginCookie === "" || loginCookie == null){
      navigate('/')
    }
    setLogin(loginCookie)
  }

  useEffect(() => {
    console.log("Check if logged...")
    checkIfLogged()
  });

  function onClickButton(){
    navigate('/faculties')
  }

  function openSettings(){
    navigate('/settings')
  }

  function openTimetable(){
    cookies.addCookies("timetableName", "personal")
    navigate('/timetable')
  }

  return (
    <div className="DefaultPage">
      <div className="container">
        <FacultyTimetableButton   onClickButton={onClickButton}/>
        <h1 className="h__logged">Расписание</h1>
        <TeacherTimetableButton   />
        <PersonalTimetableButton onClick={openTimetable}/>
        <h2 className="user__name" onClick={openSettings}>{ login }</h2>
      </div>
    </div>
  );
};

export default DefaultLoggedPage;