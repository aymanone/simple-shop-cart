import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "/components/ErrorPage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import About from "/components/About.jsx"
import './index.css'
const router=createBrowserRouter([
  {
    path:"/",
    element: <App t="ss" /> ,
    errorElement:<ErrorPage />
  },
  {
    path:"/about",
    element:<About />,
    errorElement:<ErrorPage />

  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
