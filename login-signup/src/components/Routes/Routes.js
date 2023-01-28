import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Signin></Signin>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
])