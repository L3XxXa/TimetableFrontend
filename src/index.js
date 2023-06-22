import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AddUserPage from "./pages/add_user/AddUserPage";
import DefaultPage from "./pages/default_page/DefaultPage";
import AddRoomPage from "./pages/add_room/AddRoomPage";
import DefaultLoggedPage from "./pages/default_logged_page/DefaultLoggedPage";
import FacultyPage from "./pages/FacultyPage/FacultyPage";
import AddFacultyPage from "./pages/AddFacultyPage/AddFacultyPage";
import TimetablePage from "./pages/TimetablePage/Timetable";
import Settings from "./pages/settings/Settings";
import AddSpecializationPage from "./pages/add_specialization_page/AddSpecializationPage";
import AddStudyYearPage from "./pages/add_study_year/AddStudyYearPage";
import AddGroupPage from "./pages/add_group/AddGroupPage";

import TimetableGroupPage from "./pages/TimetableGroupsPage/TimetableGroupPage";
import AddStudentPage from "./pages/add_student_page/AddStudentPage";
import AddSubjectPage from "./pages/add_subject_page/AddSubjectPage";
import AddLessonPage from "./pages/add_lesson_page/AddLessonPage";
import AddTeacherPage from "./pages/AddTeacherPage/AddTeacherPage";
import TeachersPage from "./pages/teachers_page/TeachersPage";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/',
    element: <DefaultPage/>
  },
  {
    path: '/home',
    element: <DefaultLoggedPage/>
  },
  {
    path: '/addUser',
    element: <AddUserPage/>
  },
  {
    path: '/faculties',
    element: <FacultyPage/>
  },
  {
    path: '/addRoom',
    element: <AddRoomPage/>
  },
  {
    path: '/addFaculty',
    element: <AddFacultyPage/>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '/timetable/personal',
    element: <TimetablePage/>
  },
  {
    path: '/timetable/groups/:group',
    element: <TimetablePage/>
  },
  {
    path: '/timetable/teachers/:teacher',
    element: <TimetablePage/>
  },
  {
    path: '/teachers/',
    element: <TeachersPage/>
  },
  {
    path: '/addSpecialization',
    element: <AddSpecializationPage/>
  },
  {
    path: '/addStudyYear',
    element: <AddStudyYearPage/>
  },
  {
    path: '/addGroup',
    element: <AddGroupPage/>
  },
  {
    path: '/faculties/:faculty/groups',
    element: <TimetableGroupPage/>
  },
  {
    path: '/addStudent',
    element: <AddStudentPage/>
  },
  {
    path: '/addSubject',
    element: <AddSubjectPage/>
  },
  {
    path: '/addLesson',
    element: <AddLessonPage/>
  },
  {
    path: '/addTeacher',
    element: <AddTeacherPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
