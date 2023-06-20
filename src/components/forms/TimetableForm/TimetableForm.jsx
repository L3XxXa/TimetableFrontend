import React from 'react';
import "./TimetableForm.css"
const TimetableForm = () => {
    return(
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
                    <div class="cell">
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
    )

};
export default  TimetableForm;