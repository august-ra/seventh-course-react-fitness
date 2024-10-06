import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import { HTMLAttributes } from "react"
import type { SkillType } from "../../data/skills"
import type { KeysType } from "../../types/types"


interface Props extends HTMLAttributes<HTMLDivElement> {
  skillData: SkillType
}

export default function Banner({ skillData, ...props }: Props) {
  const classNames = twMerge(
    sharedStyles.bannerPicture,
    sharedStyles[skillData.name as KeysType],
  )

  return (
    <div className={twMerge(sharedStyles.banner, `bg-${skillData.name}`)}>
      <img className={classNames} src={skillData.picture} alt={skillData.name} />
      {
        props.title
          && (
            <p className={sharedStyles.bannerText}>{skillData.title}</p>
          )
      }
    </div>
  )
}
