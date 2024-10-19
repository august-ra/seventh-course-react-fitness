import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import CardAction from "../CardAction/CardAction"
import ProgressBar from "../ProgressBar/ProgressBar"
import Tablet from "../Tablet/Tablet"

import { Link } from "react-router-dom"
import type { SkillType } from "../../data/skills"
import type { KeysType } from "../../types/types"


interface Props {
  skillData:  SkillType
  hasUser:    boolean
  difficulty: number
}

export default function Card({ skillData, hasUser, difficulty }: Props) {
  const name = skillData.name
  const link = `/courses/${skillData._id}`

  return (
    <div className={twMerge(sharedStyles.card, sharedStyles.shadowedBlock, hasUser && sharedStyles.cardFull)}>
      <Link to={link}>
        <div className={sharedStyles.cardPicture}>
          <img className={twMerge(sharedStyles.cardInner, sharedStyles[(`card-${name}`) as KeysType])} src={`/img/${name}.jpeg`} alt={name} />
        </div>
      </Link>

      <CardAction action={Math.floor(Math.random() * 2) - 1 ? "add" : "remove"} />

      <div className={sharedStyles.cardBlock}>
        <div className={sharedStyles.cardContent}>
          <p className={sharedStyles.cardTitle}>Йога</p>

          <div className={sharedStyles.cardTablets}>
            <Tablet imgName="calendar">25 дней</Tablet>
            <Tablet imgName="time">20-50 мин/день</Tablet>
            <Tablet imgName="difficulty" difficulty={difficulty} />
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
