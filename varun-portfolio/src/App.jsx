
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import MyStory from './MyStory';
import SkillsContainer from './SkillsContainer';
import ProjectContainer from './ProjectContainer';
import Mainbox from './Mainbox';
import Experience from './Experience';
import Contact from './Contact';

const App = () => {
  const approuter = createBrowserRouter([
    {
      path: "/", // Main route
      element: <Body />, // Body contains Header, Footer, and Outlet for routing
      children: [
        {
          index: true, // Default route
          element: <Mainbox />, // Default content for the main route
        },
        {
          path: "About", // About route
          element: <MyStory />, // Renders MyStory component
        },
        {
          path: "Skills", // Skills route
          element: <SkillsContainer />, // Renders SkillsContainer component
        },
        {
          path: "Projects", // Projects route
          element: <ProjectContainer />, // Renders ProjectContainer component
        },
        {
          path: "Experience", // Experience route
          element: <Experience />, // Renders Experience component
        },
        {
          path : "Contact",
          element : <Contact/>
        },
       
      ],
    },
  ]);

  return (
    <RouterProvider router={approuter} />
  );
};

export default App;





