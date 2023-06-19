import React from 'react';
import FacultyTimetableButton from "../../components/buttons/logged_default_page_buttons/FacultyTimetableButton";
import TeacherTimetableButton from "../../components/buttons/logged_default_page_buttons/TeacherTimetableButton";
import PersonalTimetableButton from "../../components/buttons/logged_default_page_buttons/PersonalTimetableButton";

const DefaultLoggedPage = () => {
  return (
    <div className="DefaultPage">
      <div className="container">
        <FacultyTimetableButton   />
        <h1 className="h__logged">Расписание</h1>
        <TeacherTimetableButton   />
        <PersonalTimetableButton/>
      </div>
    </div>
  );
};

export default DefaultLoggedPage;