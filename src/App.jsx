import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Indexpage from "./component/Indexpage";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
// import Jobpost from "./component/Jobpost";
import Companyreview from "./component/Companyreview";
import Salary from "./component/Salary";
import Browsecompany from "./component/Browsecompany";
import Careeradvice from "./component/Careeradvice";
import AboutPage from "./component/Aboutpage";
import Help from "./component/Help";
import Popularjob from "./component/Popularjob";
import Availablejob from "./component/Availablejob";
import Apnavbar from "./component/Apnavbar";
// import Navbarprivate from './component/Navbarprivate';
import EmployerIndexpage from "./EmployeerDashboard/EmployerIndexpage";
import EmployerNavbar from "./EmployeerDashboard/EmployerNavbar";
import EmployerDashboardpage from "./EmployeerDashboard/EmployerDashboardpage";
import SmartSourcingPage from "./EmployeerDashboard/SmartSourcingPage";
import CandidateApplications from "./EmployeerDashboard/CandidateApplicationspage";
import Interviewpage from "./EmployeerDashboard/Interviewpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Indexpage />
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },

  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },

  {
    path: "/home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },

  

  {
    path: "/salary",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Salary />
      </div>
    ),
  },

  {
    path: "/companyreview",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Companyreview />
      </div>
    ),
  },

  {
    path: "/browsecompany",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Browsecompany />
      </div>
    ),
  },

  {
    path: "/popularjob",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Popularjob />
      </div>
    ),
  },

  {
    path: "/careeradvice",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Careeradvice />
      </div>
    ),
  },

  {
    path: "/help",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Help />
      </div>
    ),
  },

  {
    path: "/aboutpage",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <AboutPage />
      </div>
    ),
  },

  {
    path: "/availablejob",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <Apnavbar />
        <Availablejob />
      </div>
    ),
  },

                               //EmployeerPaths.......................................

 {
    path: "/employerIndexpage",
    element: (
      <div>
        {/* <Navbarprivate/> */}
        <EmployerIndexpage />
      </div>
    ),
  },

  {
    path: "/employerNavbar",
    element: (
      <div>
        <EmployerNavbar />
      </div>
    ),
  },

  {
    path: "/employerDashboardpage",
    element: (
      <div>
        <EmployerDashboardpage />
      </div>
    ),
  },

  {
    path: "/smartsourcingpage",
    element: (
      <div>
      <SmartSourcingPage/>
      </div>
    ),
  },

   {
    path: "/candidateapplicationspage",
    element: (
      <div>
       <CandidateApplications/>
      </div>
    ),
  },

  {
    path: "/interviewpage",
    element: (
      <div>
       <Interviewpage/>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
