import './App.css';
import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';


const router =createBrowserRouter(
   [
     {
       path:"/",
       element :
       <div>
          <Navbar/>
         <Home/>
         </div>
     }
     ,
     {
       path:"/about",
       element :
       <div>
          <Navbar/>
         <About/>
        </div>
   }
    ,
   {
          path:"/dashboard",
          element :
          <div>
          <Navbar/>
         <Dashboard/>
       </div>
   }
   ]
)



const App = () => {
  return (
    <div>
       <RouterProvider router={router}/>
      
    </div>
  )
}

export default App