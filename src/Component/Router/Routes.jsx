import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import ContactPage from "../ContactPage/ContactPage";
import Student from "../../Layout/Student";
import Register from "../Register/Register";
import LoginPage from "../LoginPage/LoginPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]

    },
    {
        path: "/student",
        element: <Student />,
        children: [
            {
                path: "/student",
                element: <Register />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
])