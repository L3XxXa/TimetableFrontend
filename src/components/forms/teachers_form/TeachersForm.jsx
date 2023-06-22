import React, {useEffect, useRef, useState} from 'react';
import "./TeachersForm.css"
import api from "../../../api/Api";
import {useFetcher, useNavigate} from "react-router-dom";

const TeachersForm = () => {
    const [teachers, setTeacher] = useState([{"name": "zhmikh"}])
    const navigate = useNavigate()

    async function setGroupsRef(){
        let data = await api.getTeachers()
        return data
    }

    useEffect(() => {
        setGroups()
    }, [])

    async function setGroups(){
        let data = await setGroupsRef()
        let teachersTemp = []
        data.forEach(teacher => {
            teachersTemp.push({"name": teacher.label})
        })
        let sorted = teachersTemp.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()){
                return -1
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()){
                return 1
            }
            return 0
        })
        setTeacher(sorted)
    }

    function onItemClick(event){
        console.log(event.target.id)
        navigate(`/timetable/teachers/${event.target.id}`)
    }

    return (
      <div className="timetableGroups-form-container">
          {
              teachers.map(item => (
                  <div className="elem" id={item.name} onClick={onItemClick}>{ item.name }</div>
              ))
          }
      </div>
  );
};

export default TeachersForm;