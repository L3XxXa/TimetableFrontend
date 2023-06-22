import React, {useEffect, useRef, useState} from 'react';
import "./TimetableGroupPage.css"
import {useParams} from "react-router-dom";
import TGForm from "../../components/forms/TGForm/TGForm";
import api from "../../api/Api";

const TimetableGroupPage = () => {
    const param = useParams()
    let facNameRef = useRef(setRef())

    function setRef(){
        let facName
        switch (param.faculty){
            case "fit": {facName = ("Факультет информационных технологий"); break}
            case "ef": {facName = ("Экономический факультет"); break}
            case "gi": {facName = ("Гуманитарный институт"); break}
            case "ifp": {facName = ("Институт философии и права"); break}
            case "impz": {facName = ("Институт медицины и психологии В. Зельмана"); break}
            case "iir": {facName = ("Институт интеллектуальной робототехники"); break}
            case "mmf": {facName = ("Механико-математический факультет"); break}
            case "ff": {facName = ("Физический факультет"); break}
            case "fen": {facName = ("Факультет естественных наук"); break}
            case "ggf": {facName = ("Геолого-геофизический факультет"); break}
        }
        return facName
    }


    return (
        <div className="TimetableGroupPage">
            <h1 className="w__1">{facNameRef.current} </h1>
            <TGForm classname="groupsT__form" faculty={facNameRef.current}/>
        </div>
    );
};

export default TimetableGroupPage;