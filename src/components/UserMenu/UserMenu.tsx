import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../Button/Button"

import { useNavigate } from "react-router-dom"
import pages from "../../data/pages"


interface Props {
  email: string
}

export default function UserMenu({ email }: Props) {
  const navigate = useNavigate()

  function handleOpenProfile() {
    navigate(pages.PROFILE)
  }

  return (
    <div className={twMerge(sharedStyles.userMenu, sharedStyles.shadowedBlock)}>
      <p className={sharedStyles.userMenuEmail}>{email}</p>

      <div className={sharedStyles.userMenuButtons}>
        <Button primary={true} additionalClasses={sharedStyles.buttonWideWithFields} onClick={handleOpenProfile}>
          Мой профиль
        </Button>
        <Button primary={false} additionalClasses={sharedStyles.buttonWideWithFields}>Выйти</Button>
      </div>
    </div>
  )
}
