import itemsContext from "/components/contexts/itemsContext.js";
import ShowRoom from "/components/ShowRoom.jsx";
import Cart from "/components/Cart.jsx";
import {useState} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, createBrowserRouter,
  RouterProvider } from "react-router-dom";
import './App.css'

function App() {
  let items={
    "1":{amount:20,sold:0,price:30},
    "2":{amount:20,sold:0,price:30},
    "3":{amount:20,sold:0,price:30},
    "4":{amount:20,sold:0,price:30}
  };
  const keys=Object.keys(items);
  const [context,setContext]=useState(items);
const router=createBrowserRouter([
  {
    path:"/",
    element:<ShowRoom items={keys} />
    
  },
{
  path:"/cart",
  element:<Cart items={keys} />
}]
);

  

  return (
    <itemsContext.Provider value={[context,setContext]}>
    <RouterProvider router={router}>
    </RouterProvider>
    </itemsContext.Provider>
    
  )
}

export default App
