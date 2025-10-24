import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Indexpage from "./component/Indexpage"; 
// import Navbar from './component/Navbar';

import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Jobpost from './component/Jobpost';
import Companyreview from './component/Companyreview';
import Salary from './component/Salary';
import Browsecompany from './component/Browsecompany';
import Careeradvice from './component/Careeradvice';
import AboutPage from './component/Aboutpage';
import Help from './component/Help';
import Popularjob from './component/Popularjob';
import Availablejob from './component/Availablejob';
// import Apnavbar from './component/Apnavbar';
import Navbarprivate from './component/Navbarprivate';






const router = createBrowserRouter(
  [

  {path: '/',
    element: 
    <div>
      <Indexpage/>
    </div>
  },

    { path: '/login',
      element: 
      <div>
      <Login/>
      </div>
    },
    
   { path: '/signup',
      element: 
      <div>
      <Signup/>
      </div>
    },
    

    {path: '/home',
     element: 
     <div>
      
      <Home/>
     </div>
    },
 
    {path: '/jobpost',
     element: 
     <div>
      <Navbarprivate/>
      <Jobpost/>
     </div>
    },

    {
     path: '/salary',
     element:
     <div>
      <Navbarprivate/>
      <Salary/>
     </div>
    },

  {
    path: '/companyreview',
    element:
    <div>
      <Navbarprivate/>
      <Companyreview/>
    </div>
  },
   
   {
    path: '/browsecompany',
    element:
    <div>
      <Navbarprivate/>
      <Browsecompany/>
    </div>
  },

   {
    path: '/popularjob',
    element:
    <div>
      <Navbarprivate/>
      <Popularjob/>
    </div>
  },

  {
    path: '/careeradvice',
    element:
    <div>
      <Navbarprivate/>
      <Careeradvice/>
    </div>
  },

   {
    path: '/help',
    element:
    <div>
      <Navbarprivate/>
      <Help/>
    </div>
  },

   {
    path: '/aboutpage',
    element:
    <div>
      <Navbarprivate/>
      <AboutPage/>
    </div>
  },

  {
    path: '/availablejob',
    element:
    <div>
      <Navbarprivate/>
      <Availablejob/>
    </div>
  },
  ]
)





              
function App() {
  return (

     <RouterProvider router = {router} />

  )
}

export default App