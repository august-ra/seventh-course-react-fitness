import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import CardAction from "../CardAction/CardAction"
import ProgressBar from "../ProgressBar/ProgressBar"
import Tablet from "../Tablet/Tablet"

import { Link } from "react-router-dom"
import type { CourseType, KeysType } from "../../types/types"
import { getActionFromProgress } from "../../utils/progress"


interface Props {
  courseData: CourseType
  fullSize:   boolean
}

export default function Card({ courseData, fullSize }: Props) {
  const name = courseData.name
  const link = `/courses/${courseData._id}`

  return (
    <div className={twMerge(sharedStyles.card, sharedStyles.shadowedBlock, sharedStyles.scaledBlock)}>
      <Link to={link}>
        <div className={sharedStyles.cardPicture}>
          <img className={twMerge(sharedStyles.cardInner, sharedStyles[(`card-${name}`) as KeysType])} src={`/img/${name}.jpeg`} alt={name} />
        </div>
      </Link>

      <CardAction action={courseData.isAdded ? "remove" : "add"} />

      <div className={sharedStyles.cardBlock}>
        <div className={sharedStyles.cardContent}>
          <Link className={sharedStyles.cardTitle} to={link}>{courseData.title}</Link>

          <div className={sharedStyles.cardTablets}>
            <Tablet imgName="calendar">25 дней</Tablet>
            <Tablet imgName="time">20-50 мин/день</Tablet>
            <Tablet imgName="difficulty" difficulty={courseData.difficulty} />
          </div>

          {
            fullSize
              && (
                <div className={sharedStyles.cardProgress}>
                  <p className={sharedStyles.cardProgressText}>Прогресс {courseData.progress}%</p>
                  <ProgressBar progress={courseData.progress} />
                </div>
              )
          }
        </div>

        {
          fullSize
            && (
              <Button additionalClasses={sharedStyles.buttonWideWithMargin} primary={true}>
                {getActionFromProgress(courseData.progress)}
              </Button>
            )
        }
      </div>
    </div>
  )
}
