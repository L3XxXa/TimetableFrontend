import React from 'react';
import './AddFacultyForm.css'
import CustomInputForAddFaculty from "../../inputs/CustomInputForAddFaculty";
import AddSpecialityButton from "../../buttons/AddSpecialityButton/AddSpecialityButton";

const AddFacultyForm = () => {

    return (
        <div className="auth-form-container1">
            <h2 className="h2">Добавление факультета</h2>
            <CustomInputForAddFaculty placeholder={"Введите название факультета"} />
            <div className="add-speciality-button">
                <AddSpecialityButton/>
            </div>
          </div>

    );
}
export default AddFacultyForm;