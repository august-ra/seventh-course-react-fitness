import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Banner from "../../components/Banner/Banner"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { Outlet, useLoaderData } from "react-router-dom"
import { CourseType } from "../../types/types"


export default function CoursePage() {
  const courseData = useLoaderData() as CourseType

  if (!courseData)
    return "There is an error!"

  return (
    <div className={sharedStyles.wrapper}>
      <div className={sharedStyles.container}>
        <Header />

        <main className="">
          <Banner key={courseData._id} courseData={courseData} />

          <section className="">
            <div className={sharedStyles.presentation}>
              <h3 className={sharedStyles.presentationTitle}>Подойдет для вас, если:</h3>
              <div className={sharedStyles.presentationContent}>
                {
                  courseData.fitting.map((item, index) => (
                    <div key={index} className={sharedStyles.presentationBlock}>
                      <p className={sharedStyles.presentationNumber}>{index + 1}</p>
                      <p className={sharedStyles.presentationText}>{item}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className={sharedStyles.presentation}>
              <h3 className={sharedStyles.presentationTitle}>Направления</h3>
              <ul className={sharedStyles.presentationGoals}>
                {
                  courseData.directions.map((item, index) => (
                    <li key={index} className={sharedStyles.presentationGoal}>
                      <img className={sharedStyles.presentationGoalStar} src="/img/star.svg" alt="star" />
                      <p>{item}</p>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className={twMerge(sharedStyles.presentationNewLife, sharedStyles.shadowedBlock, sharedStyles.scaledBlock)}>
              <div className={sharedStyles.presentationNewLifeLeft}>
                <h2 className={sharedStyles.presentationNewLifeTitle}>Начните путь<br />к новому телу</h2>
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

      <Footer />

      <Outlet />
    </div>
  )
}
