import Button from "../Button/Button"

import { sharedStyles } from "../../sharedStyles"


export default function Header() {
  return (
    <header className={sharedStyles.header}>
      <div className={sharedStyles.headerContainer}>
        <img className={sharedStyles.headerLogo} src="/img/logo.svg" alt="logo" />
        <p className={sharedStyles.headerSlogan}>Онлайн-тренировки для занятий дома</p>
      </div>

      <Button primary={true} onClick={() => console.log("test test")}>Войти</Button>
    </header>
  )
}
