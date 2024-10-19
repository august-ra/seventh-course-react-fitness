import { sharedStyles } from "../../sharedStyles"

import Button from "../Button/Button"

import { useNavigateFaraway } from "../../hooks/useNavigateFaraway"
import pages from "../../data/pages"


export default function Header() {
  const navigate = useNavigateFaraway()

  function doAuth() {
    navigate(pages.SIGN_IN)
  }

  return (
    <header className={sharedStyles.header}>
      <div className={sharedStyles.headerContainer}>
        <img className={sharedStyles.headerLogo} src="/img/logo.svg" alt="logo" />
        <p className={sharedStyles.headerSlogan}>Онлайн-тренировки для занятий дома</p>
      </div>

      <Button primary={true} onClick={doAuth}>Войти</Button>
    </header>
  )
}
