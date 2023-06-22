import React, {useEffect, useState} from 'react';
import './TimetablePage.css'
import cookies from "../../cookies/Cookies";
import api from "../../api/Api";
import {useParams} from "react-router-dom";
const TimetablePage = (props) => {
  let data = [
    {
      day: 1,
      hour: 1,
      teacher: "Aboba",
      room: "228",
      discipline: "Eating",
      groups: "111, 222"
    }
  ]

  const param = useParams()

  const [timetable, setTimetable] = useState(data)

  async function getTimetableByGroup(){
    await api.refreshToken()
    let data = await api.getTimetableByGroup(param.group)
    setTimetable(data)
  }

  async function getTimetableByTeacher(){
    await api.refreshToken()
    let data = await api.getTimetableByTeacher(param.teacher)
    setTimetable(data)
  }

  useEffect(() => {
    let paramsType
    try {
      paramsType = param.teacher
      getTimetableByTeacher()
    } catch (e){
      try {
        paramsType = param.group
        getTimetableByGroup()
      } catch (e){
        console.log(e)
      }
    }
  }, [])

  return (
      <div className="Timetable">
        <table className="time-table" cellSpacing="0">
          <col className="col1"/>
          <col span="6" className="coln"/>
          <tr>
            <th>Время</th>
            <th>Понедельник</th>
            <th>Вторник</th>
            <th>Среда</th>
            <th>Четверг</th>
            <th>Пятница</th>
            <th>Суббота</th>
          </tr>
          <tr>
            <td>9:00</td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div className="cell">

              </div>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
              <div class="cell">
                <div className="cell">

                </div>

              </div>
            </td>
            <td>
              <div className="cell">

              </div>
            </td>
          </tr>
          <tr>
            <td>10:50</td>
            <td>
              <div class="cell">
                <div>ППО</div>
                <div>4220</div>
                <div>Лабораторная</div>
                <div>Голосов Кирилл Владимирович</div>
              </div>
            </td>
            <td>
              <div class="cell">


              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">
              </div>
            </td>
          </tr>
          <tr>
            <td>12:40</td>
            <td>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">
              </div>


            </td>
            <td>
            </td>
            <td>
              <div class="cell">
              </div>



            </td>
          </tr>
          <tr>
            <td>14:30</td>
            <td>
              <div class="cell">
              </div>


            </td>
            <td>
              <div class="cell">
              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">
              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>16:20</td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>18:10</td>
            <td>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">



              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
              <div class="cell">

              </div>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>20:00</td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
              <div class="cell">


              </div>
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
        </table>
      </div>
  );
};

export default TimetablePage;