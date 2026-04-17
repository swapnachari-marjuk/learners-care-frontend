import { createBrowserRouter, type RouteObject } from "react-router";
// import App from "../App";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import AboutLC from "../Pages/AboutLC/AboutLC";
import ContactLs from "../Pages/ContactLs/ContactLs";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/AuthPages/Login/Login";
import Signup from "../Pages/AuthPages/Signup/Signup";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-courses",
        element: <AllCourses />,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "/about-ls",
        element: <AboutLC />,
      },
      {
        path: "/contact-ls",
        element: <ContactLs />,
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
