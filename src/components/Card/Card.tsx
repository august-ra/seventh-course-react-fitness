import Button from "../Button/Button"
import Progress from "../Progress/Progress"
import Tablet from "../Tablet/Tablet"

import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"


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
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[18px] leading-[20px]">Прогресс 40%</p>
                  <Progress />
                </div>
              )
          }
        </div>

        {
          hasUser
            && (
              <Button additionalClasses="w-full mt-10" primary={true}>Продолжить</Button>
            )
        }
      </div>
    </div>
  )
}
