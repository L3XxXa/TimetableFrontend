import React, {useEffect, useState} from 'react';
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import {useNavigate} from "react-router-dom";

const AddStudyYearForm = () => {
  const[faculty, setFaculty] = React.useState('0');
  const[specialization, setSpecialization] = React.useState('0');
  const[optionsFaculty, setOptionsFaculty] = useState([])
  const [studyYear, setStudyYear] = useState(0)
  const[optionsSpecialization, setOptionsSpecialization] = useState([])
  const navigate = useNavigate()

  async function addSpecialization(){
    console.log(specialization)
    let data = {
      "year": studyYear.N
    }
    console.log(data)
    await api.addStudyYear(data, specialization).then(() => {
      alert("Год обучения \"" + studyYear + "\" успешно добавлен")
      navigate('/settings')
    }).catch(error => {
      api.addStudyYear(data, specialization)
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
    console.log(val)
    await api.refreshToken()
    let data = await api.getSpecializations(val)
    setSpecialization(data[0].value)
    setOptionsSpecialization(data)
  }

  useEffect(()=> {
    getFaculties()
  }, [])


  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeSpecialization = (event) => {
    console.log(event.target.value)
    setSpecialization(event.target.value);
  };

  return (
    <div className="auth-form-container1">
      <h2 className="h2">Добавление специализации</h2>
      <label className="label">Факультет</label>
      <CustomDropdown placeholder={"Выберите факультет"} options={optionsFaculty} handleChange={event => {
        handleChangeFaculty(event)
        getSpecializations(event.target.value)
      }
      }/>
      <CustomDropdown placeholder={"Выберите специализацию"} options={optionsSpecialization} handleChange={event => {
        setSpecialization(event.target.value);
      }
      }/>
      <CustomInputForAddUser placeholder={"Введите год обучения"} value={studyYear} onChange={event => {
        setStudyYear(event.target.value)
      }
      }/>
      <AddUserButton text="Добавить год обучения" onClick={addSpecialization}/>
    </div>
  );
};

export default AddStudyYearForm;