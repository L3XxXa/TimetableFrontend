import React, {useEffect, useState} from 'react';
import AddButton from "../../buttons/add_user_button/AddButton";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import {useNavigate} from "react-router-dom";

const AddLessonForm = () => {
  const[faculty, setFaculty] = React.useState('0');
  const [specialization, setSpecialization] = useState("")
  const [lessonName, setLessonName] = useState("")
  const [studyYear, setStudyYear] = useState(0)
  const[optionsFaculty, setOptionsFaculty] = useState([])
  const[optionsSpecialization, setOptionsSpecialization] = useState([])
  const[optionsStudyYear, setOptionsStudyYear] = useState([])
  const[optionsSubjects, setOptionsSubjects] = useState([])
  const[optionsTeachers, setOptionsTeachers] = useState([])
  const [subject, setSubject] = useState("")
  const [teacher, setTeacher] = useState("")
  const navigate = useNavigate()
  const[roomType, setRoomType] = React.useState('1');

  const roomOptions = [
    {label: 'Лекторская', value: '1'},
    {label: 'Семинарская', value: '2'},
    {label: 'Лабораторная', value: '3'},
  ];
  const[lessonType, setLessonType] = React.useState('1');
  const lessonOptions = [
    {label: 'Лекция', value: '1'},
    {label: 'Семинар', value: '2'},
    {label: 'Лабораторная работа', value: '3'},
  ];
  async function addGroup(){
    let room
    switch (roomType) {
      case '1': {
        room = "LECTURE"
        break
      }
      case '2': {
        room = "PRACTICE"
        break
      }
      case '3': {
        room = "LABORATORY"
      }
    }
    let lesson
    switch (lessonType) {
      case '1': {
        lesson = "LECTURE"
        break
      }
      case '2': {
        lesson = "PRACTICE"
        break
      }
      case '3': {
        lesson = "LABORATORY"
      }
    }
    console.log(specialization)
    await api.refreshToken()
    let data = {
      "name": lessonName,
      "roomType": room,
      "subjectType": lessonType,
      "teacher": teacher
    }
    console.log(data)
    console.log(studyYear)
    await api.addLesson(data, subject).then(() => {
      alert("Занятие \"" + lessonName + "\" успешно добавлено")
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

  async function getSubject(val){
    await api.refreshToken()
    let data = await api.getSubjects(faculty, specialization, val)
    console.log(data)
    setSubject(data[0].value)
    setOptionsSubjects(data)
  }

  async function getTeachers(){
    let data = await api.getTeachers()
    setTeacher(data[0].value)
    setOptionsTeachers(data)
  }

  useEffect(()=> {
    getFaculties()
    getTeachers()
  }, [])

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  return (
    <div className="auth-form-container1">
      <h2 className="h2">Добавление занятия</h2>
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
        getSubject(event.target.value)
      }
      }/>
      <label className="label">Предмет</label>
      <CustomDropdown placeholder={"Выберите предмет"} options={optionsSubjects} handleChange={event => {
        setSubject(event.target.value);
      }
      }/>
      <label className="label">Название занятия</label>
      <CustomInputForAddUser placeholder={"Введите название занятия"} value={lessonName} onChange={event => {
        setLessonName(event.target.value)
      }
      }/>
      <label className="label">Преподаватель</label>
      <CustomDropdown placeholder={"Выберите преподавателя"} options={optionsTeachers} handleChange={event => {
        setTeacher(event.target.value)
      }
      }/>
      <label className="label">Тип занятия</label>
      <CustomDropdown placeholder={"Выберите тип занятия"} options={lessonOptions} handleChange={event => {
        setLessonType(event.target.value)
      }
      }/>
      <label className="label">Тип аудитории</label>
      <CustomDropdown placeholder={"Выберите тип аудитории"} options={roomOptions} handleChange={event => {
        setRoomType(event.target.value)
      }
      }/>
      <AddButton text="Добавить занятие" onClick={addGroup}/>
    </div>
  );
};

export default AddLessonForm;