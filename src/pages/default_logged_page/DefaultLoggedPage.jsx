import React, {useEffect} from 'react';
import FacultyTimetableButton from "../../components/buttons/logged_default_page_buttons/FacultyTimetableButton";
import TeacherTimetableButton from "../../components/buttons/logged_default_page_buttons/TeacherTimetableButton";
import PersonalTimetableButton from "../../components/buttons/logged_default_page_buttons/PersonalTimetableButton";
import cookies from "../../cookies/Cookies";
import {useNavigate} from "react-router-dom";

const DefaultLoggedPage = () => {
  const navigate = useNavigate()
  function checkIfLogged(){
    const loginCookie = cookies.getCookies("login")
    if (loginCookie === "" || loginCookie == null){
      navigate('/')
    }
  }

  useEffect(() => {
    console.log("Check if logged...")
    checkIfLogged()
  });

  function onClickButton(){
    navigate('/faculties')
  }

  return (
    <div className="DefaultPage">
      <div className="container">
        <FacultyTimetableButton   onClickButton={onClickButton}/>
        <h1 className="h__logged">Расписание</h1>
        <TeacherTimetableButton   />
        <PersonalTimetableButton/>
      </div>
    </div>
  );
};

export default DefaultLoggedPage;