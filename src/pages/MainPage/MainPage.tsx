import { sharedStyles } from "../../sharedStyles"

import Card from "../../components/Card/Card"
import Climber from "../../components/Climber/Climber"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { Outlet, useLoaderData } from "react-router-dom"
import { skills } from "../../data/skills"


export default function MainPage() {
  const data = useLoaderData()
  console.log("data", data)

  return (
    <div className={sharedStyles.wrapper}>
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
                  <Card key={index} name={skill.name} hasUser={false} difficulty={3} />
                ))
              }
            </div>
          </section>

          <Climber />
        </main>
      </div>

      <Footer />

      <Outlet />
    </div>
  )
}
