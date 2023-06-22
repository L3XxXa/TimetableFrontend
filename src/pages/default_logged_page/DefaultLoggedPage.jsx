import React, {useEffect, useRef, useState} from 'react';
import FacultyTimetableButton from "../../components/buttons/logged_default_page_buttons/FacultyTimetableButton";
import TeacherTimetableButton from "../../components/buttons/logged_default_page_buttons/TeacherTimetableButton";
import PersonalTimetableButton from "../../components/buttons/logged_default_page_buttons/PersonalTimetableButton";
import cookies from "../../cookies/Cookies";
import {useNavigate} from "react-router-dom";

const DefaultLoggedPage = () => {
  const navigate = useNavigate()
  let login = useRef(cookies.getCookies("login"))

  function onClickButton(){
    navigate('/faculties')
  }

  function openSettings(){
    navigate('/settings')
  }

  function openTimetable(){
    navigate('/timetable/personal')
  }

  function openTeachers(){
    navigate('/teachers')
  }

  return (
    <div className="DefaultPage">
      <div className="container">
        <FacultyTimetableButton   onClickButton={onClickButton}/>
        <h1 className="h__logged">Расписание</h1>
        <TeacherTimetableButton   onClick={openTeachers}/>
        <PersonalTimetableButton onClick={openTimetable}/>
        <h2 className="user__name" onClick={openSettings}>{ login.current }</h2>
      </div>
    </div>
  );
};

export default DefaultLoggedPage;