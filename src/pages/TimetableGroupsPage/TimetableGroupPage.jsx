import React from 'react';
import "./TimetableGroupPage.css"
import {useParams} from "react-router-dom";
import TGForm from "../../components/forms/TGForm/TGForm";

const TimetableGroupPage = () => {
    const param = useParams()
    alert(param.faculty)
  return (
    <div className="TimetableGroupPage">
        <h1 className="w1">Выберите группу</h1>
      <TGForm classname="groupsT__form"/>

    </div>

  );
};

export default TimetableGroupPage;