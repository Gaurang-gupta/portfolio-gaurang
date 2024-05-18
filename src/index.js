import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Works from './Components/Works/Works';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App main={<About/>}/>
  },
  {
    path: "/resume",
    element: <App main={<Resume/>}/>
  },
  {
    path: "/works",
    element: <App main={<Works/>}/>
  },
  {
    path: "/contact",
    element: <App main={<Contact/>}/>
  },
  {
    path: "/works/:id",
    element: <App main={<Project id={window.location.pathname}/>}/>
  }

]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
