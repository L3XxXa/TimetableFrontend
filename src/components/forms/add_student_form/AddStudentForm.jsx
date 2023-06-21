import React, {useEffect, useState} from 'react';
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import {useNavigate} from "react-router-dom";

const AddStudentForm = () => {
  const[faculty, setFaculty] = React.useState('0');
  const [specialization, setSpecialization] = useState("0")
  const [studyYear, setStudyYear] = useState(0)
  const[optionsFaculty, setOptionsFaculty] = useState([])
  const[optionsSpecialization, setOptionsSpecialization] = useState([])
  const[optionsStudyYear, setOptionsStudyYear] = useState([])
  const[optionsGroup, setOptionsGroup] = useState([])
  const [group, setGroup] = useState("0")
  const [studentName, setStudentName] = useState("")
  const [studentSurname, setStudentSurname] = useState("")
  const navigate = useNavigate()

  async function addStudent(){
    let data = {
      "name": `${studentName} ${studentSurname}`
    }
    await api.addStudent(data, group).then(() => {
      alert("Группа \"" + group + "\" успешно добавлена")
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

  async function getGroup(val){
    let data = await api.getGroups(faculty, specialization, val)
    console.log(data)
    setGroup(data[0].value)
    setOptionsGroup(data)
  }


  useEffect(()=> {
    getFaculties()
  }, [])

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };


  return (
    <div className="auth-form-container1">
      <h2 className="h2">Добавление группы</h2>
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
        getGroup(event.target.value)
      }
      }/>
      <label className="label">Группа</label>
      <CustomDropdown placeholder={"Выберите группу"} options={optionsGroup} handleChange={event => {
        setGroup(event.target.value);
      }
      }/>
      <label className="label">Имя студента</label>
      <CustomInputForAddUser placeholder={"Введите имя студента"} value={studentName} onChange={event => {
        setStudentName(event.target.value)
      }
      }/>
      <label className="label">Фамилия студента</label>
      <CustomInputForAddUser placeholder={"Введите фамилию студента"} value={studentSurname} onChange={event => {
        setStudentSurname(event.target.value)
      }
      }/>
      <AddUserButton text="Добавить студента" onClick={addStudent}/>
    </div>
  );
};

export default AddStudentForm;