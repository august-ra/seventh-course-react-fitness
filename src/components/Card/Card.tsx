import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import CardAction from "../CardAction/CardAction"
import ProgressBar from "../ProgressBar/ProgressBar"
import Tablet from "../Tablet/Tablet"

import type { KeysType } from "../../types/types"


interface Props {
  name:       string
  hasUser:    boolean
  difficulty: number
}

export default function Card({ name, hasUser, difficulty }: Props) {
  return (
    <div className={twMerge(sharedStyles.card, sharedStyles.shadowedBlock, hasUser && sharedStyles.cardFull)}>
      <div className={sharedStyles.cardPicture}>
        <img className={twMerge(sharedStyles.cardInner, sharedStyles[(`card-${name}`) as KeysType])} src={`/img/${name}.jpeg`} alt={name} />
      </div>

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
