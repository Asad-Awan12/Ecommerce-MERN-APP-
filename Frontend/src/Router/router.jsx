import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../Components/Pages/Home";
import { About } from "../Components/Pages/About";
import { ContactUs } from "../Components/Pages/ContactUs";
import { Cart } from "../Components/Pages/Cart/Cart";
import { Login } from "../Components/Login";
import { DashBoard } from "../Components/Pages/DashBoard/DashBoard";
import { AllUsers } from "../Components/Pages/DashBoard/AllUsers";
import { ManagePosts } from "../Components/Pages/DashBoard/ManagePosts/ManagePosts";
import { AdminLayout } from "../Components/Pages/Admin/AdminLayout";
import { Register } from "../Components/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/AboutUs',
                element:<About />
            },
            {
                path:'/Cart',
                element:<Cart />
            },
            {
                path:'/ContactUs',
                element:<ContactUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Register />
            },
            {
                path:'/dashboard',
                element:<AdminLayout />,
            },
        ]
    }
])
export default router