import React from 'react';
import FacultyTimetableButton from "../../buttons/DefaultPageButtons/FacultyTimetableButton";
import TeacherTimetableButton from "../../buttons/DefaultPageButtons/TeacherTimetableButton";
import "./Default.css"
const DefaultPageForm = () => {
    return (
        <div className="container">

        <FacultyTimetableButton   />
            <h1 className="h">Расписание</h1>
        <TeacherTimetableButton   />
        </div>
    )
}
export default  DefaultPageForm;