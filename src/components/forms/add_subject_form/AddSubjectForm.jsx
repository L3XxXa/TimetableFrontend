import React, {useEffect, useState} from 'react';
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import {useNavigate} from "react-router-dom";

const AddSubjectForm = () => {
  const[faculty, setFaculty] = React.useState('0');
  const [specialization, setSpecialization] = useState("")
  const [studyYear, setStudyYear] = useState(0)
  const[optionsFaculty, setOptionsFaculty] = useState([])
  const[optionsSpecialization, setOptionsSpecialization] = useState([])
  const[optionsStudyYear, setOptionsStudyYear] = useState([])
  const [subject, setSubject] = useState("")
  const navigate = useNavigate()

  async function addGroup(){
    console.log(specialization)
    await api.refreshToken()
    let data = {
      "name": subject
    }
    console.log(data)
    console.log(studyYear)
    await api.addSubject(data, studyYear).then(() => {
      alert("Предмет \"" + subject + "\" успешно добавлена")
      navigate('/settings')
    }).catch(error => {
    })
  }


  async function getFaculties(){
    await api.refreshToken()
    let data = await api.getFaculties().catch(error => {
    })
    let returned = []
    data.data.forEach(faculty => {
      returned.push({label: faculty.name, value: faculty.facultyId})
    })
    setOptionsFaculty(returned)
  }

  async function getSpecializations(val){
    await api.refreshToken()
    let data = await api.getSpecializations(val)
    setSpecialization(data[0].value)
    setOptionsSpecialization(data)
  }

  async function getStudyYears(val){
    let data = await api.getStudyYears(faculty, val)
    console.log(data)
    setStudyYear(data[0].value)
    setOptionsStudyYear(data)
  }


  useEffect(()=> {
    getFaculties()
  }, [])

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  return (
    <div className="auth-form-container1">
      <h2 className="h2">Добавление предмета</h2>
      <label className="label">Факультет</label>
      <CustomDropdown placeholder={"Выберите факультет"} options={optionsFaculty} handleChange={event => {
        handleChangeFaculty(event)
        getSpecializations(event.target.value)
      }
      }/>
      <label className="label">Специализация</label>
      <CustomDropdown placeholder={"Выберите специализацию"} options={optionsSpecialization} handleChange={event => {
        setSpecialization(event.target.value);
        getStudyYears(event.target.value)
      }
      }/>
      <label className="label">Год обучения</label>
      <CustomDropdown placeholder={"Выберите год обучения"} options={optionsStudyYear} handleChange={event => {
        setStudyYear(event.target.value);
      }
      }/>
      <label className="label">Название предмета</label>
      <CustomInputForAddUser placeholder={"Введите название предмета"} value={subject} onChange={event => {
        setSubject(event.target.value)
      }
      }/>
      <AddUserButton text="Добавить предмет" onClick={addGroup}/>
    </div>
  );
};

export default AddSubjectForm;