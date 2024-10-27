import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"


export default function Footer() {
  return (
    <footer className={twMerge(sharedStyles.footer, sharedStyles.text_18_20)}>
      Все тренировки разрешены и © все права защищены, 2024 г.
    </footer>
  )
}
