import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary:            boolean
  additionalClasses?: string
}

export default function Button({ ...props }: Props) {
  if (props.disabled) {}
  if (props.primary) {}

  const classNames = twMerge(
    "text-[18px] w-[103px] h-[52px] rounded-[46px]",
    props.additionalClasses,
    props.primary
      ? "bg-good hover:bg-well active:bg-black active:text-white disabled:bg-light-bg disabled:text-light-tx"
      : "bg-white border border-black hover:bg-light-bg active:bg-dark disabled:text-light-tx",
  )

  return (
    <button type="button" className={classNames} {...props} />
  )
}
