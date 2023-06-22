import React, {useEffect, useRef, useState} from 'react';
import "./TeachersPage.css"
import TeachersForm from "../../components/forms/teachers_form/TeachersForm";

const TeachersPage = () => {
    return (
        <div className="TimetableGroupPage">
            <h1 className="w__1">Выберите преподавателя </h1>
            <TeachersForm classname="groupsT__form"/>
        </div>
    );
};

export default TeachersPage;