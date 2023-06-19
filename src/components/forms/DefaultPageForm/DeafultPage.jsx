import React, {useEffect} from 'react';
import FacultyTimetableButton from "../../buttons/DefaultPageButtons/FacultyTimetableButton";
import TeacherTimetableButton from "../../buttons/DefaultPageButtons/TeacherTimetableButton";
import "./Default.css"
import {useNavigate} from "react-router-dom";
import cookies from "../../../cookies/Cookies";
const DefaultPageForm = () => {
    const navigate = useNavigate()
    function onClickFaculty () {
        navigate('/faculties')
    }
    function checkIfLogged(){
        const loginCookie = cookies.getCookies("login")
        if (loginCookie !== ""){
            navigate('/home')
        }
    }

    useEffect(() => {
        checkIfLogged()
    })

    return (
        <div className="container">

        <FacultyTimetableButton  onClickButton={onClickFaculty}/>
            <h1 className="h">Расписание</h1>
        <TeacherTimetableButton   />
        </div>
    )
}
export default  DefaultPageForm;