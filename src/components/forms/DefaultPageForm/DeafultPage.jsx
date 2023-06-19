import React from 'react';
import FacultyTimetableButton from "../../buttons/DefaultPageButtons/FacultyTimetableButton";
import TeacherTimetableButton from "../../buttons/DefaultPageButtons/TeacherTimetableButton";
import "./Default.css"
import {useNavigate} from "react-router-dom";
import OpenLoginButton from "../../buttons/open_login_button/OpenLoginButton";
const DefaultPageForm = () => {
    const navigate = useNavigate()
    function onClickFaculty () {
        navigate('/faculties')
    }

    return (
        <div className="container">
            <FacultyTimetableButton  onClickButton={onClickFaculty}/>
            <h1 className="h">Расписание</h1>
            <TeacherTimetableButton/>
            <OpenLoginButton/>
        </div>
    )
}
export default  DefaultPageForm;