import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Banner from "../../components/Banner/Banner"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { Outlet } from "react-router-dom"
import { skills } from "../../data/skills"


export default function CoursePage() {
  return (
    <div className={sharedStyles.wrapper}>
      <div className={sharedStyles.container}>
        <Header />

        <main className="">
          {
            skills.map((skill) => (
              <Banner key={skill._id} skillData={skill} />
            ))
          }

          <section className="">
            <div className={sharedStyles.presentation}>
              <h3 className={sharedStyles.presentationTitle}>Подойдет для вас, если:</h3>
              <div className={sharedStyles.presentationContent}>
                <div className={sharedStyles.presentationBlock}>
                  <p className={sharedStyles.presentationNumber}>1</p>
                  <p className={sharedStyles.presentationText}>Давно хотели попробовать йогу, но не решались начать</p>
                </div>
                <div className={sharedStyles.presentationBlock}>
                  <p className={sharedStyles.presentationNumber}>2</p>
                  <p className={sharedStyles.presentationText}>Хотите укрепить позвоночник, избавиться от болей в спине и суставах</p>
                </div>
                <div className={sharedStyles.presentationBlock}>
                  <p className={sharedStyles.presentationNumber}>3</p>
                  <p className={sharedStyles.presentationText}>Ищете активность, полезную для тела и души</p>
                </div>
              </div>
            </div>

            <div className={sharedStyles.presentation}>
              <h3 className={sharedStyles.presentationTitle}>Направления</h3>
              <ul className={sharedStyles.presentationGoals}>
                <li className={sharedStyles.presentationGoal}>
                  <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star"/>
                  <p>Йога для новичков</p>
                </li>
                <li className={sharedStyles.presentationGoal}>
                  <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star"/>
                  <p>Йога для новичков</p>
                </li>
                <li className={sharedStyles.presentationGoal}>
                  <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star"/>
                  <p>Йога для новичков</p>
                </li>
                <li className={sharedStyles.presentationGoal}>
                  <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star"/>
                  <p>Йога для новичков</p>
                </li>
                <li className={sharedStyles.presentationGoal}>
                  <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star"/>
                  <p>Йога для новичков</p>
                </li>
              </ul>
            </div>

            <div className={twMerge(sharedStyles.presentationNewLife, sharedStyles.shadowedBlock)}>
              <div className={sharedStyles.presentationNewLifeLeft}>
                <h2 className={sharedStyles.presentationNewLifeTitle}>Начните путь<br/>к новому телу</h2>
                <ul className={sharedStyles.presentationNewLifeLeft}>
                  <li className={sharedStyles.presentationNewLifeLeftItem}>проработка всех групп мышц</li>
                  <li className={sharedStyles.presentationNewLifeLeftItem}>тренировка суставов</li>
                  <li className={sharedStyles.presentationNewLifeLeftItem}>улучшение циркуляции крови</li>
                  <li className={sharedStyles.presentationNewLifeLeftItem}>заряд бодрости</li>
                  <li className={sharedStyles.presentationNewLifeLeftItem}>помощь в противостоянии стрессам</li>
                </ul>
                <Button additionalClasses={sharedStyles.buttonWideWithMargin} primary={true}>Войдите, чтобы добавить курс</Button>
              </div>

              <div className={sharedStyles.presentationNewLifeRight}>
                <img className={sharedStyles.presentationNewLifeLines} src="/img/curves.svg" alt="curves" />
              </div>

              <img className={sharedStyles.presentationNewLifeMan} src="/img/runner.png" alt="runner" />
            </div>
          </section>
        </main>
      </div>

      <Footer/>

      <Outlet />
    </div>
  )
}
