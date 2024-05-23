import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from './pages/ContactPage';
import ProjectsPages from './pages/ProjectsPages';
import HomePage from './pages/HomePage';
import App from './App';
import ProjectCard from './components/ProjectCard';

const router = createBrowserRouter([
  
    
    {element: <App />,
    children:[
      { 
        path : "/",
        element : <HomePage/>,
            },
            {
              path : "/ProjectsPages",
              element : <ProjectsPages />,
            },
            {
              path: "/ProjectsPages/:id",
              element: <ProjectCard />,
            },
            {

              path: "/ContactPages",
              element : <ContactPage/>,
            }

    ]
}
  
  
  
  


]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <RouterProvider router= {router} />
  </React.StrictMode>
)

