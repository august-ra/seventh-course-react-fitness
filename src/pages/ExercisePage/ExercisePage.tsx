import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Progress from "../../components/Progress/Progress"

import { Link, Outlet, useLoaderData, useParams } from "react-router-dom"
import { WorkoutType } from "../../types/types"
import { getRate } from "../../utils/progress"


export default function ExercisePage() {
  const { courseId, workoutId } = useParams()
  const workoutData = useLoaderData() as WorkoutType

  if (!workoutData)
    return "There is an error!"

  return (
    <div className={sharedStyles.wrapper}>
      <div className={sharedStyles.container}>
        <Header />

        <main className="">
          <section className="">
            <h1 className={sharedStyles.bannerText}>{workoutData.courseName}</h1>
            <div className={sharedStyles.breadcrumbsLine}>
              <Link className={sharedStyles.breadcrumb} to="/">Красота и здоровье</Link>
              &nbsp;/&nbsp;
              <Link className={sharedStyles.breadcrumb} to={`/courses/${courseId}/`}>Йога на каждый день</Link>
              &nbsp;/&nbsp;
              <span className={sharedStyles.breadcrumbLast}>2 день</span>
            </div>

            <div className={sharedStyles.videoBlock}>
              <iframe className="" width="100%" height="100%" src={workoutData.video} title="YouTube player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </section>

          <section className={twMerge(sharedStyles.presentationNewLife, sharedStyles.shadowedBlock)}>
            <p className={sharedStyles.workoutDayCaption}>Упражнения тренировки {workoutData.day}</p>

            <div className={sharedStyles.workoutProgresses}>
              {
                workoutData.exercises
                  ? (
                    <>
                      {
                        workoutData.exercises.map((exercise, index) => (
                          index % 3 === 0
                            && (
                              <Progress key={index} title={exercise.name} progress={getRate(exercise.progress, exercise.quantity)} />
                            )
                        ))
                      }
                      {
                        workoutData.exercises.map((exercise, index) => (
                          index % 3 === 1
                            && (
                              <Progress key={index} title={exercise.name} progress={getRate(exercise.progress, exercise.quantity)} />
                            )
                        ))
                      }
                      {
                        workoutData.exercises.map((exercise, index) => (
                          index % 3 === 2
                            && (
                              <Progress key={index} title={exercise.name} progress={getRate(exercise.progress, exercise.quantity)} />
                            )
                        ))
                      }
                    </>
                  )
                  : (
                    <Progress title={""} progress={getRate(workoutData.progress, workoutData.max)} />
                  )
              }
            </div>

            <Button additionalClasses={sharedStyles.buttonProgress} primary={true}>
              { workoutData.exercises ? "Заполнить свой прогресс" : "Завершить занятие" }
            </Button>
          </section>
        </main>
      </div>

      <Footer />

      <Outlet />
    </div>
  )
}
