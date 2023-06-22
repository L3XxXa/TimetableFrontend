import React, {useEffect, useRef, useState} from 'react';
import "./TGForm.css"
import api from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const TGForm = (props) => {
    const [firstYear, setFirstYear] = useState([{group: 0, year: 0}])
    const [secondYear, setSecondYear] = useState([{group: 0, year: 0}])
    const [thirdYear, setThirdYear] = useState([{group: 0, year: 0}])
    const [fourthYear, setFourthYear] = useState([{group: 0, year: 0}])
    const navigate = useNavigate()

    async function setGroupsRef(){
        let data = await api.getGroupsByFaculty(props.faculty)
        return data
    }

    useEffect(() => {
        setGroups()
    }, [])

    async function setGroups(){
        let data = await setGroupsRef()
        let firstYearGroups = []
        let secondYearGroups = []
        let thirdYearGroups = []
        let fourthYearGroups = []
        data.forEach(gr => {
            if (gr.year === 1){
                console.log(gr)
                firstYearGroups.push(gr)
            }
            else if (gr.year === 2){
                secondYearGroups.push(gr)
            }
            else if (gr.year === 3){
                thirdYearGroups.push(gr)
            }
            else if (gr.year === 4){
                fourthYearGroups.push(gr)
            }
        })
        setFirstYear(firstYearGroups)
        setSecondYear(secondYearGroups)
        setThirdYear(thirdYearGroups)
        setFourthYear(fourthYearGroups)
    }

    function onItemClick(event){
        console.log(event.target.id)
        navigate(`/timetable/groups/${event.target.id}`)
    }
    return (
      <div className="timetableGroups-form-container">
          <div className="timetableGroups-form-container">
              <div className="row">
                  <div className="schedule-block" id="exam-degree2">
                      <div className="col-xs-6">
                          <table className="degree_groups">
                              <tr>
                                  <td>
                                      <h4 className="t1">1 курс</h4>
                                  </td>
                                  {
                                      firstYear.map(item => (
                                          <td key={item.group} >
                                              <a className="group" onClick={onItemClick} id={item.group.toString()}>{item.group}</a>
                                          </td>
                                      ))
                                  }
                              </tr>

                              <tr>
                                  <td>
                                      <h4 className="t2">2 курс</h4>
                                  </td>
                                  {
                                      secondYear.map(item => (
                                          <td key={item.group} >
                                              <a className="group" onClick={onItemClick} id={item.group.toString()}>{item.group}</a>
                                          </td>                                      ))
                                  }
                              </tr>
                              <tr>
                                  <td>
                                      <h4 className="t3">3 курс</h4>
                                  </td>
                                  {
                                      thirdYear.map(item => (
                                          <td key={item.group} >
                                              <a className="group" onClick={onItemClick} id={item.group.toString()}>{item.group}</a>
                                          </td>                                      ))
                                  }
                              </tr>
                              <tr>
                                  <td>
                                      <h4 className="t4">4 курс</h4>
                                  </td>
                                  {
                                      fourthYear.map(item => (
                                          <td key={item.group} >
                                              <a className="group" onClick={onItemClick} id={item.group.toString()}>{item.group}</a>
                                          </td>
                                      ))
                                  }
                              </tr>

                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default TGForm;