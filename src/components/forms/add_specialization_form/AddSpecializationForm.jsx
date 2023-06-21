import React, {useEffect, useState} from 'react';
import AddUserButton from "../../buttons/add_user_button/AddUserButton";
import CustomDropdown from "../../inputs/CustomDropdown";
import api from "../../../api/Api";
import CustomInputForAddUser from "../../inputs/CustomInputForAddUser";
import {useNavigate} from "react-router-dom";

const AddSpecializationForm = () => {
  const[faculty, setFaculty] = React.useState('0');
  const[options, setOptions] = useState([])
  const [spec1, setSpec1] = useState("")
  const navigate = useNavigate()

  async function addSpecialization(){
    let data = {
      "name": spec1
    }
    await api.addSpecialization(data, faculty).then(() => {
      alert("Специализация \"" + spec1 + "\" успешно добавлена")
      navigate('/settings')
    }).catch(error => {
      api.addSpecialization(data, faculty)
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
    setOptions(returned)
  }

  useEffect(()=> {
    getFaculties()
  }, [])


  const handleChange = (event) => {
    setFaculty(event.target.value);
  };

  return (
    <div className="auth-form-container1">
      <h2 className="h2">Добавление специализации</h2>
      <label className="label">Факультет</label>
      <CustomDropdown placeholder={"Выберите факультет"} options={options} handleChange={event => {
        handleChange(event)
      }
      }/>
      <label className="label">Специализация</label>
      <CustomInputForAddUser placeholder={"Введите название специализации"} value={spec1} onChange={event => {
        setSpec1(event.target.value)
      }
      }/>
      <AddUserButton text="Добавить специализацию" onClick={addSpecialization}/>
    </div>
  );
};

export default AddSpecializationForm;