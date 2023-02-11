import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Photo from "./components/Photo"
import Contact from "./components/Contact"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero/>,
      },
      {
        path: "/shop",
        element:<Shop/>,
      },
      {
        path: "/photo",
        element:<Photo/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
    ],
  },
]);

export default App;
