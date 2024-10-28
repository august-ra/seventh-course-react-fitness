import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"


export default function Footer() {
  return (
    <footer className={twMerge(sharedStyles.footer, sharedStyles.text_18_20)}>
      <p className={sharedStyles.footerWideText}>Все тренировки разрешены и © все права защищены, 2024 г.</p>
      <p className={sharedStyles.footerThinText}>Все тренировки разрешены и<br />© все права защищены, 2024 г.</p>
    </footer>
  )
}
