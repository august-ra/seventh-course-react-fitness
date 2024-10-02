import Card from "./Card"
import Climber from "./Climber/Climber"
import Footer from "./Footer/Footer"
import Header from "./Header"

import { sharedStyles } from "../sharedStyles"


export default function Main() {
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
              <Card hasUser={false} difficulty={1} />
              <Card hasUser={true} difficulty={3} />
              <Card hasUser={false} difficulty={5} />
            </div>
          </section>

          <Climber />
        </main>
      </div>

      <Footer />
    </div>
  )
}
