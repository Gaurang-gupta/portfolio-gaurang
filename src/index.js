import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App sidebar={<Sidebar/>} navbar={<Navbar/>} main={<div>About</div>}/>
  },
  {
    path: "/resume",
    element: <App sidebar={<Sidebar/>} navbar={<Navbar/>} main={<div>Resume</div>}/>
  },
  {
    path: "/works",
    element: <App sidebar={<Sidebar/>} navbar={<Navbar/>} main={<div>Works</div>}/>
  },
  {
    path: "/contact",
    element: <App sidebar={<Sidebar/>} navbar={<Navbar/>} main={<div>contact</div>}/>
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
