import CoursePage from "./pages/CoursePage/CoursePage"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import SigningModal from "./pages/SigningModal/SigningModal"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { UserContextValue, useUserContext } from "./context/UserContext/UserContext"
import pages from "./data/pages"

import { coursesAPI } from "./api/coursesApi"


const signingRouterData = [
  {
    path:    pages.SIGN_IN,
    element: <SigningModal mode="signIn" />,
    async loader() {
      console.log("SigningModal: in")
      return true
    },
  },
  {
    path:    pages.SIGN_UP,
    element: <SigningModal mode="signUp" />,
    async loader() {
      console.log("SigningModal: up")
      return true
    },
  },
  {
    path:    pages.SIGN_OUT,
    element: <SigningModal mode="signOut" />,
  },
  {
    path:    pages.SIGNING,
    element: <SigningModal mode="signIn" />,
    async loader() {
      console.log("SigningModal: root")
      return true
    },
  },
]

const router = (userContext: UserContextValue) => createBrowserRouter([
  {
    path:     pages.MAIN,
    element:  <MainPage />,
    loader:   async () => await coursesAPI.getCourses(userContext.uid),
    children: signingRouterData,
  },
  {
    path:     pages.COURSES,
    element:  <MainPage />,
    loader:   async () => await coursesAPI.getCourses(userContext.uid),
    children: signingRouterData,
  },
  {
    path:    pages.COURSE,
    element: <CoursePage />,
    async loader({ params }) {
      if (params.id)
        return coursesAPI.getCourse(params.id, userContext.uid)
      else
        return null
    },
    children: signingRouterData,
  },
  {
    path:    pages.PROFILE,
    element: <ProfilePage />,
  },
  {
    path:    pages.NOT_FOUND,
    element: <Page404 />,
  },
])

export default function AppRoutes() {
  const userContext = useUserContext()

  return (
    <RouterProvider router={router(userContext)} />
  )
}
