import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import AllClass from "../Pages/AllClass/AllClass";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import EnrollClass from "../Pages/Dashboard/EnrollClass/EnrollClass";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import Instructor from "../Pages/Instructor/Instructor";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path: 'signin',
          element: <SignIn></SignIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'allclasses',
          element: <AllClass></AllClass>
        },
        {
          path: 'instructors',
          element: <Instructor></Instructor>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'enrollclass',
          element: <EnrollClass></EnrollClass>
        },
        {
          path: 'manageusers',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'manageclass',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }
      ]
    }
    
]);