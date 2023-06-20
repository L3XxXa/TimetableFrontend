import React, {useEffect} from 'react';
import './TimetablePage.css'
import cookies from "../../cookies/Cookies";
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
  function getTableName() {
    const name = cookies.getCookies("timetableName")
    switch (name){
      case "personal":{

      }
    }
  }

  useEffect(() => {
    getTableName()
  })
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
                  <div>
                    {data[0].discipline}
                  </div>
                  <div>
                    Аудитория {data[0].room}
                  </div>
                  <div>
                    {data[0].groups}
                  </div>
                </div>
              </td>
              <td>
                <div className="cell">
                  <div>
                    {data[0].discipline}
                  </div>
                  <div>
                    Аудитория {data[0].room}
                  </div>
                  <div>
                    {data[0].groups}
                  </div>
                </div>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                <div class="cell">
                  <div className="cell">
                    <div>
                      {data[0].discipline}
                    </div>
                    <div>
                      Аудитория {data[0].room}
                    </div>
                    <div>
                      {data[0].groups}
                    </div>
                  </div>

                </div>
              </td>
              <td>
                <div className="cell">
                  <div>
                    {data[0].discipline}
                  </div>
                  <div>
                    Аудитория {data[0].room}
                  </div>
                  <div>
                    {data[0].groups}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>10:50</td>
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
                  <div className="cell">
                    <div>
                      {data[0].discipline}
                    </div>
                    <div>
                      Аудитория {data[0].room}
                    </div>
                    <div>
                      {data[0].groups}
                    </div>
                  </div>

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