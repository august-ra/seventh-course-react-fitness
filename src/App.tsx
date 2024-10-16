import "./App.css"

import MainPage from "./pages/MainPage/MainPage"

import { Outlet } from "react-router-dom"


export default function App() {
  return (
    <>
      <MainPage />

      <Outlet />
    </>
  )
}
