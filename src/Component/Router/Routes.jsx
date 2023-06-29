import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Home from '../Home/Home'
import ContactPage from '../ContactPage/ContactPage'
import Student from '../../Layout/Student'
import Register from '../Register/Register'
import LoginPage from '../LoginPage/LoginPage'
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'
import ActiveCourses from '../../Dashboard/ActiveCourses/ActiveCourses'
import JoinClass from '../../Dashboard/JoinClass/JoinClass'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/student',
    element: <Student />,
    children: [
      {
        path: '/student',
        element: <Register />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      {
        path: '/admin',
        element: <ActiveCourses />,
      },
      {
        path: '/admin/JoinClass',
        element: <JoinClass />,
      },
    ],
  },
])
