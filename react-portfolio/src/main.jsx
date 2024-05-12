import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ProjectsPages from './pages/ProjectsPages';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path : "/ProjectsPages",
    element : <ProjectsPages />,
  },
  {
    path : "/ProjectPage",
    element: <ProjectPage/>,
  },
  {

    path: "/ContactPages",
    element : <ContactPage/>
  }


]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)

