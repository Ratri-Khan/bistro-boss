import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Menu from "../Component/Menu/Menu";
import Order from "../Component/Order/Order";
import Login from "../Component/Login/Login";
import Signup from "../Component/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/signup",
                element:<Signup></Signup>,
            },
        ],
    },
]);
export default router;