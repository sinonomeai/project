import { createBrowserRouter } from "react-router-dom"
import { AdminPage } from "../pages/Admin"
import { NotFoundPage } from "../pages/NotFoundPage"
import { Login } from "../pages/Login"
import {Register } from "../pages/Register"
import { Home } from "../pages/Home"
const routers = [
    {
        path: "/:id?",
        element: <Home />,
    },
    {
        path: "/Admin",
        element: <AdminPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]
export const router = createBrowserRouter(routers)
