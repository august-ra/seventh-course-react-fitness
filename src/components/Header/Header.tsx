import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"
import UserMenu from "../UserMenu/UserMenu"

import { useState } from "react"
import { useUserContext } from "../../context/UserContext/UserContext"
import { useNavigateFaraway } from "../../hooks/useNavigateFaraway"
import pages from "../../data/pages"


export default function Header() {
  const userContext = useUserContext()
  const navigate = useNavigateFaraway()
  const [isUserOpened, setIsUserOpened] = useState(false)

  function doAuth() {
    navigate(pages.SIGN_IN)
  }

  function doToggleUserMenu() {
    setIsUserOpened((prev) => !prev)
  }

  return (
    <header className={sharedStyles.header}>
      <div className={sharedStyles.headerContainer}>
        <img className={sharedStyles.headerLogo} src="/img/logo.svg" alt="logo" />
        <p className={sharedStyles.headerSlogan}>Онлайн-тренировки для занятий дома</p>
      </div>

      {
        userContext.isAuthenticated()
          ? (
            <div className={sharedStyles.headerUserGroup}>
              <img className={sharedStyles.headerProfileLogo} src="/img/person-fine.svg" alt="person" />
              <div className={sharedStyles.headerProfileBlock} onClick={doToggleUserMenu}>
                <span className={sharedStyles.headerProfileName}>{userContext.email}</span>
                <div className={twMerge(sharedStyles.headerProfileNameBtn, isUserOpened && sharedStyles.headerProfileNameBtnReversed)} />
              </div>

              {
                isUserOpened
                  && (
                    <UserMenu email={userContext.email || ""} />
                  )
              }
            </div>
          )
          : (
            <Button primary={true} onClick={doAuth}>Войти</Button>
          )
      }
    </header>
  )
}
