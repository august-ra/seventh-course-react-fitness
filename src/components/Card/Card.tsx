import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import CardAction from "../CardAction/CardAction"
import ProgressBar from "../ProgressBar/ProgressBar"
import Tablet from "../Tablet/Tablet"

import { Link } from "react-router-dom"
import type { CourseType, KeysType } from "../../types/types"


interface Props {
  courseData: CourseType
  hasUser:    boolean
}

export default function Card({ courseData, hasUser }: Props) {
  const name = courseData.name
  const link = `/courses/${courseData._id}`

  return (
    <div className={twMerge(sharedStyles.card, sharedStyles.shadowedBlock, sharedStyles.scaledBlock, hasUser && sharedStyles.cardFull)}>
      <Link to={link}>
        <div className={sharedStyles.cardPicture}>
          <img className={twMerge(sharedStyles.cardInner, sharedStyles[(`card-${name}`) as KeysType])} src={`/img/${name}.jpeg`} alt={name} />
        </div>
      </Link>

      <CardAction action={Math.floor(Math.random() * 2) - 1 ? "add" : "remove"} />

      <div className={sharedStyles.cardBlock}>
        <div className={sharedStyles.cardContent}>
          <Link className={sharedStyles.cardTitle} to={link}>{courseData.title}</Link>

          <div className={sharedStyles.cardTablets}>
            <Tablet imgName="calendar">25 дней</Tablet>
            <Tablet imgName="time">20-50 мин/день</Tablet>
            <Tablet imgName="difficulty" difficulty={courseData.difficulty} />
          </div>

          {
            hasUser
              && (
                <div className={sharedStyles.cardProgress}>
                  <p className={sharedStyles.cardProgressText}>Прогресс 40%</p>
                  <ProgressBar />
                </div>
              )
          }
        </div>

        {
          hasUser
            && (
              <Button additionalClasses={sharedStyles.buttonWideWithMargin} primary={true}>Продолжить</Button>
            )
        }
      </div>
    </div>
  )
}
