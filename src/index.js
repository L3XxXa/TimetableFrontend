import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AddUserPage from "./pages/add_user/AddUserPage";
import DefaultPage from "./pages/default_page/DefaultPage";
import FacultyPage from "./pages/FacultyPage/FacultyPage";

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
    path: '/addUser',
    element: <AddUserPage/>
  },
  {
    path: '/Faculties',
    element: <FacultyPage/>
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
