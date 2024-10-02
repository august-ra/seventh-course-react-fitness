import { ButtonHTMLAttributes } from "react"

import TabletDifficulty from "./TabletDifficulty"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgName:     "calendar" | "time" | "difficulty"
  difficulty?: number
}

export default function Tablet({ ...props }: Props) {
  return (
    <div className="h-[38px] flex gap-[6px] p-[10px] bg-light-bg rounded-[50px]">
      {
        props.imgName === "calendar"
          ? (
            <img src="/img/calendar.svg" alt="calendar" />
          )
        : props.imgName === "time"
          ? (
            <img src="/img/time.svg" alt="time" />
          )
          : (
            <TabletDifficulty level={props.difficulty || 1} />
          )
      }

      <p className="text-[16px] leading-[18px] text-nowrap">
        {props.imgName === "difficulty" ? "Сложность" : props.children}
      </p>
    </div>
  )
}
