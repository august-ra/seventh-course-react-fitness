import CoursePage from "./pages/CoursePage/CoursePage"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import SigningModal from "./pages/SigningModal/SigningModal"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Pages from "./data/pages"


const signingRouterData = [
  {
    path: Pages.SIGNING,
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
    path: Pages.MAIN,
    element: <MainPage />,
    children: signingRouterData,
  },
  {
    path: Pages.COURSES,
    element: <MainPage />,
    children: signingRouterData,
  },
  {
    path: Pages.COURSE,
    element: <CoursePage />,
    children: signingRouterData,
  },
  {
    path: Pages.NOT_FOUND,
    element: <Page404 />,
  },
])

export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}
