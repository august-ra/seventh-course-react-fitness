import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import { ButtonHTMLAttributes } from "react"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary:            boolean
  additionalClasses?: string
}

export default function Button({ ...props }: Props) {
  const classNames = twMerge(
    sharedStyles.buttonCommon,
    props.primary
      ? sharedStyles.buttonPrimary
      : sharedStyles.buttonSecondary,
    props.additionalClasses,
  )

  return (
    <button type="button" className={classNames} {...props} />
  )
}
