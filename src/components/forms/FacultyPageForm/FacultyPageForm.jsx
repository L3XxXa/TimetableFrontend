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
const FacultyPageForm = () => {
    return (
        <div className="FPAGE">
            <h1 className="B">Выберите факультет</h1>
            <FITbutton/>
            <EFbutton/>
            <GIbutton/>
            <IFPbutton/>
            <IMPZbutton/>
            <IIRbutton/>
            <MMFbutton/>
            <FFbutton/>
            <FENbutton/>
            <GGFbutton/>
        </div>
    )
}
export default FacultyPageForm;