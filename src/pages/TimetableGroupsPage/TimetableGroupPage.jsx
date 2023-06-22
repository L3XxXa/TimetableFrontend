import React, {useEffect, useState} from 'react';
import "./TimetableGroupPage.css"
import {useParams} from "react-router-dom";
import TGForm from "../../components/forms/TGForm/TGForm";
import api from "../../api/Api";

const TimetableGroupPage = () => {
    const param = useParams()
    const [facName, setFacName] = useState("")

    function setFacultyName(){
        switch (param.faculty){
            case "fit": {setFacName("Факультет информационных технологий"); break}
            case "ef": {setFacName("Экономический факультет"); break}
            case "gi": {setFacName("Гуманитарный институт"); break}
            case "ifp": {setFacName("Институт философии и права"); break}
            case "impz": {setFacName("Институт медицины и психологии В. Зельмана"); break}
            case "iir": {setFacName("Институт интеллектуальной робототехники"); break}
            case "mmf": {setFacName("Механико-математический факультет"); break}
            case "ff": {setFacName("Физический факультет"); break}
            case "fen": {setFacName("Факультет естественных наук"); break}
            case "ggf": {setFacName("Геолого-геофизический факультет"); break}
        }
    }

    async function getGroups(){
        await api.refreshToken()
        let data = await api.getGroupsByFaculty(facName)
        console.log(data)
    }

    useEffect(() => {
        setFacultyName()
        getGroups()
    })

    return (
        <div className="TimetableGroupPage">
            <h1 className="w__1">{facName} </h1>
            <TGForm classname="groupsT__form"/>
        </div>

    );
};

export default TimetableGroupPage;