import CoursePage from "./pages/CoursePage/CoursePage"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import SigningModal from "./pages/SigningModal/SigningModal"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import pages from "./data/pages"

import { coursesAPI } from "./api/coursesApi"


const signingRouterData = [
  {
    path: pages.SIGNING,
    element: <SigningModal  mode="signIn" />,
    children: [
      {
        path: "in",
        element: <SigningModal  mode="signIn" />,
      },
      {
        path: "up",
        element: <SigningModal  mode="signUp" />,
      },
      {
        path: "out",
        element: <SigningModal  mode="signOut" />,
      },
    ],
  },
]

const router = createBrowserRouter([
  {
    path: pages.MAIN,
    element: <MainPage />,
    loader: coursesAPI.getCourses,
    children: signingRouterData,
  },
  {
    path: pages.COURSES,
    element: <MainPage />,
    loader: coursesAPI.getCourses,
    children: signingRouterData,
  },
  {
    path: pages.COURSE,
    element: <CoursePage />,
    children: signingRouterData,
  },
  {
    path: pages.NOT_FOUND,
    element: <Page404 />,
  },
])

export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}
