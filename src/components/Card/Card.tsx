import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import CardAction from "../CardAction/CardAction"
import Progress from "../Progress/Progress"
import Tablet from "../Tablet/Tablet"

import { Link } from "react-router-dom"
import { useNavigateFaraway } from "../../hooks/useNavigateFaraway"
import { getActionFromProgress } from "../../utils/progress"
import type { CourseType, KeysType } from "../../types/types"


interface Props {
  courseData: CourseType
  fullSize:   boolean
}

export default function Card({ courseData, fullSize }: Props) {
  const name = courseData.name
  const link = `/courses/${courseData._id}`
  const navigate = useNavigateFaraway()

  function handleSubmit() {
    navigate(`choose/${courseData._id}`)
  }

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
                <Progress title="" progress={Math.ceil(100 * courseData.progress / courseData.max)} />
              )
          }
        </div>

        {
          fullSize
            && (
              <Button additionalClasses={sharedStyles.buttonWideWithMargin} primary={true} onClick={handleSubmit}>
                {getActionFromProgress(courseData.progress)}
              </Button>
            )
        }
      </div>
    </div>
  )
}
