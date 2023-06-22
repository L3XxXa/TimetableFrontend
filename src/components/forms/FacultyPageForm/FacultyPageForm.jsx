import React from 'react';
import FITbutton from "../../buttons/FacultyButtons/FITbutton";
import EFbutton from "../../buttons/FacultyButtons/EFbutton";
import GIbutton from "../../buttons/FacultyButtons/GIbutton";
import IFPbutton from "../../buttons/FacultyButtons/IFPbutton";
import IMPZbutton from "../../buttons/FacultyButtons/IMPZbutton";
import IIRbutton from "../../buttons/FacultyButtons/IIRbutton";
import MMFbutton from "../../buttons/FacultyButtons/MMFbutton";
import FFbutton from "../../buttons/FacultyButtons/FFbutton";
import FENbutton from "../../buttons/FacultyButtons/FENbutton";
import GGFbutton from "../../buttons/FacultyButtons/GGFbutton";
import "./FacultyPageForm.css"
import {useNavigate} from "react-router-dom";
const FacultyPageForm = () => {
    const navigate = useNavigate()
    function navigateFit(){
        navigate('/faculties/fit/groups')
    }

    function navigateEf(){
        navigate('/faculties/ef/groups')
    }

    function navigateGi(){
        navigate('/faculties/gi/groups')
    }

    function navigateIfp(){
        navigate('/faculties/ifp/groups')
    }

    function navigateImpz(){
        navigate('/faculties/impz/groups')
    }

    function navigateIir(){
        navigate('/faculties/iir/groups')
    }

    function navigateMmf(){
        navigate('/faculties/mmf/groups')
    }

    function navigateFf(){
        navigate('/faculties/ff/groups')
    }

    function navigateFen(){
        navigate('/faculties/fen/groups')
    }

    function navigateGgf(){
        navigate('/faculties/ggf/groups')
    }

    return (
        <div className="FPAGE">
            <h1 className="B">Выберите факультет</h1>
            <FITbutton onClick={navigateFit}/>
            <EFbutton onClick={navigateEf}/>
            <GIbutton onClick={navigateGi}/>
            <IFPbutton onClick={navigateIfp}/>
            <IMPZbutton onClick={navigateImpz}/>
            <IIRbutton onClick={navigateIir}/>
            <MMFbutton onClick={navigateMmf}/>
            <FFbutton onClick={navigateFf}/>
            <FENbutton onClick={navigateFen}/>
            <GGFbutton onClick={navigateGgf}/>
        </div>
    )
}
export default FacultyPageForm;