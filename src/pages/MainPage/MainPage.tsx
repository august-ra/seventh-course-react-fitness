import { sharedStyles } from "../../sharedStyles"

import Card from "../../components/Card/Card"
import Climber from "../../components/Climber/Climber"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { useRef } from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { skills } from "../../data/skills"
import { CoursesType } from "../../types/types"


export default function MainPage() {
  const topRef = useRef<HTMLDivElement>(null)
  const data = useLoaderData() as CoursesType
  console.log("data", data)

  function handleGettingTop() {
    if (topRef.current)
      topRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={sharedStyles.wrapper} ref={topRef}>
      <div className={sharedStyles.container}>
        <Header />

        <main className="">
          <section className="">
            <div className={sharedStyles.caption}>
              <h1 className={sharedStyles.captionText}>Начните заниматься спортом и улучшите качество жизни</h1>

              <div className={sharedStyles.captionBalloon}>
                <img className={sharedStyles.captionBalloonTail} src="/img/tail.svg" alt="tail" />
                <p className={sharedStyles.captionBalloonFace}>Измени своё тело за полгода!</p>
              </div>
            </div>

            <div className={sharedStyles.cards}>
              {
                skills.map((skill, index) => (
                  <Card key={index} skillData={skill} hasUser={false} difficulty={3} />
                ))
              }
            </div>
          </section>

          <Climber onGettingTop={handleGettingTop} />
        </main>
      </div>

      <Footer />

      <Outlet />
    </div>
  )
}
