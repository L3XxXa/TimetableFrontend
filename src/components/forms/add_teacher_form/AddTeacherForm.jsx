import React, {useState} from 'react';
import './AddTeacherForm.css'
import CustomInputForAddFaculty from "../../inputs/CustomInputForAddFaculty";
// import AddSpecialityButton from "../../buttons/AddSpecialityButton/AddSpecialityButton";
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const AddTeacherForm = () => {
    const[teacherName, setTeacherName] = useState("")
    const[teacherSurname, setTeacherSurname] = useState("")
    const[teacherThirdName, setTeacherThirdName] = useState("")
    const navigate = useNavigate()
    async function addTeacher(){
      const data = {
        "name": `${teacherSurname} ${teacherName} ${teacherThirdName}`
      }
      await api.addTeacher(data).then(
        () =>{
          alert(`Преподаватель "${data.name}" успешно добавлен`)
          navigate('/settings')
        }
      ).catch(error => {
        alert(error.response.data)
      })
    }

    return (
        <div className="auth-form-container1">
          <h2 className="h2">Добавление преподавателя</h2>
          <label className="label">Фамилия преподавателя</label>
          <CustomInputForAddFaculty placeholder={"Введите фамилию преподавателя"} value={teacherSurname}  onChange={event => {
            setTeacherSurname(event.target.value)
          }
          }/>
          <label className="label">Имя преподавателя</label>
          <CustomInputForAddFaculty placeholder={"Введите имя преподавателя"} value={teacherName}  onChange={event => {
              setTeacherName(event.target.value)
            }
          }/>
          <label className="label">Отчество преподавателя</label>
          <CustomInputForAddFaculty placeholder={"Введите отчество преподавателя"} value={teacherThirdName}  onChange={event => {
            setTeacherThirdName(event.target.value)
          }
          }/>
          <AddUserButton text="Добавить преподавателя" onClick={addTeacher}/>
          </div>

    );
}
export default AddTeacherForm;