import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar.tsx"
import Tablet from "../Tablet/Tablet"


interface Props {
  hasUser:    boolean
  difficulty: number
}

export default function Card({ hasUser, difficulty }: Props) {
  return (
    <div className={twMerge(sharedStyles.card, sharedStyles.shadowedBlock, hasUser && sharedStyles.cardFull)}>
      <div className={sharedStyles.cardPicture}>
        <img className={sharedStyles.cardInner} src="/img/yoga.jpeg" alt="yoga" />
        <img className={sharedStyles.cardAddBtn} src="/img/plus.svg" alt="add" />
      </div>

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
              <Button additionalClasses={sharedStyles.buttonWide} primary={true}>Продолжить</Button>
            )
        }
      </div>
    </div>
  )
}
