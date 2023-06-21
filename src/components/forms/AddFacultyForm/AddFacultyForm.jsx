import React, {useState} from 'react';
import './AddFacultyForm.css'
import CustomInputForAddFaculty from "../../inputs/CustomInputForAddFaculty";
// import AddSpecialityButton from "../../buttons/AddSpecialityButton/AddSpecialityButton";
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const AddFacultyForm = () => {
    const[faculty, setFaculty] = useState("")
    const navigate = useNavigate()
    async function addFaculty(){
      const data = {
        "name": faculty
      }
      await api.addFaculty(data).then(
        () =>{
          alert(`Факультет ${faculty} успешно добавлен`)
          navigate('/settings')
        }
      ).catch(error => {
        alert(error.response.data)
      })
    }

    return (
        <div className="auth-form-container1">
            <h2 className="h2">Добавление факультета</h2>
            <CustomInputForAddFaculty placeholder={"Введите название факультета"} value={faculty}  onChange={event => {
              setFaculty(event.target.value)
            }
            }/>
            {/*<div className="add-speciality-button">*/}
            {/*    <AddSpecialityButton/>*/}
            {/*</div>*/}
          <AddUserButton text="Добавить факультет" onClick={addFaculty}/>
          </div>

    );
}
export default AddFacultyForm;