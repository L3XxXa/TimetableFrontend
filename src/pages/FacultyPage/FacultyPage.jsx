import React, {useEffect, useState} from 'react';
import "./FacultyPage.css"
import FacultyPageForm from "../../components/forms/FacultyPageForm/FacultyPageForm";
import cookies from "../../cookies/Cookies";
import {useNavigate} from "react-router-dom";

const FacultyPage = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState("")
  function checkIfLogged(){
    const loginCookie = cookies.getCookies("login")
    if (loginCookie === "" || loginCookie == null){
      navigate('/')
    }
    setLogin(loginCookie)
  }
  useEffect(() => {
    checkIfLogged()
  });

  function openSetting(){
    navigate('/settings')
  }

  return (
            <div className="FacultyPage">
                <FacultyPageForm />
              <h2 className="user__name_fac" onClick={openSetting}>{ login }</h2>
            </div>
    );
};

export default FacultyPage;