import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../../context/UserContext/UserContext"
import { useReplacementLastPath } from "../../hooks/useReplacementLastPath"
import pages from "../../data/pages"
import { ModalKindType } from "../../types/types"

import { usersApi } from "../../api/usersApi"


interface Props {
  mode: ModalKindType
}

interface ExtendedProps extends Props {
  formData: {
    email:    string
    login:    string
    password: string
    repeat:   string
  }
  setFormData: (value: ExtendedProps["formData"]) => void
  errorState: {
    showing: boolean
    message: string
    reset:   boolean
  }
  setErrorState: (value: ExtendedProps["errorState"]) => void
  onSwitch:      React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

interface ErrorBlockProps {
  errorState: ExtendedProps["errorState"]
  onSwitch:   React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

export default function SigningModal({ mode }: Props) {
  const [modalMode, setModalMode] = useState<ModalKindType>(mode)
  const navigate = useNavigate()
  const userContext = useUserContext()
  const navigateReplaced = useReplacementLastPath()

  const [errorState, setErrorState] = useState<ExtendedProps["errorState"]>({
    showing: false,
    message: "",
    reset:   false,
  })

  const [formData, setFormData] = useState<ExtendedProps["formData"]>({
    email:    "",
    login:    "",
    password: "",
    repeat:   "",
  })

  function handleGoAnother(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    e.preventDefault()

    setErrorState({ showing: false, message: "", reset: false })

    if (modalMode === "signIn") {
      navigateReplaced("up", true)
      setModalMode("signUp")
    } else if (modalMode === "signUp") {
      navigateReplaced("in", true)
      setModalMode("signIn")
    } else {
      throw new Error("Unknown modal state")
    }
  }

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).dataset.id === "modal-outside")
      navigate(-1)
  }

  return (
    <>
      <div className={sharedStyles.modalWrapper} data-id="modal-outside" onClick={handleClose}>
        <form className={sharedStyles.modalForm}>
          <img className={sharedStyles.headerLogo} src="/img/logo.svg" alt="logo" />

          {
            mode === "resetStart"
              ? (
                <p>Ссылка для восстановления пароля отправлена на {formData.email}</p>
              )
              : (
                <ModalContent mode={modalMode} formData={formData} setFormData={setFormData}
                              errorState={errorState} setErrorState={setErrorState} onSwitch={handleGoAnother} />
              )
          }
        </form>
      </div>
    </>
  )
}

function ModalContent({ mode, formData, setFormData, errorState, setErrorState, onSwitch }: ExtendedProps) {
  return (
    <div className={sharedStyles.modalFormInner}>
      <div className={sharedStyles.modalFormSubgroup}>
        {
          (mode === "signIn" || mode === "signUp")
            && (
              <input className={sharedStyles.modalFormInput} type="email" name="email" placeholder="Электронная почта" />
            )
        }
        <input className={sharedStyles.modalFormInput} type="password" placeholder="Пароль" />
        {
          (mode === "signUp" || mode === "resetEnd")
            && (
              <input className={sharedStyles.modalFormInput} type="password" placeholder="Повтор пароля" />
            )
        }
      </div>

      <ErrorBlock errorState={errorState} onSwitch={onSwitch} />

      <div className={sharedStyles.modalFormSubgroup}>
        {
          mode === "signIn"
            ? (
              <>
                <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Войти</Button>
                <Button primary={false} additionalClasses={sharedStyles.buttonWide} onClick={onSwitch}>Зарегистрироваться</Button>
              </>
            )
          : mode === "signUp"
            ? (
              <>
                <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Зарегистрироваться</Button>
                <Button primary={false} additionalClasses={sharedStyles.buttonWide} onClick={onSwitch}>Войти</Button>
              </>
            )
            : (
              <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Подтвердить</Button>
            )
        }
      </div>
    </div>
  )
}

function ErrorBlock({ errorState, onSwitch }: ErrorBlockProps) {
  if (!errorState.showing)
    return null

  switch (errorState.message) {
    case "Firebase: Error (auth/invalid-email).":
      return (
        <p className={sharedStyles.modalFormError}>
          Указанный адрес электронной почты не идентифицирован. Проверьте ввод.<br />
          <a className={sharedStyles.modalFormSuggestionLink} href="#" onClick={onSwitch}>Зарегистрируйтесь, если впервые здесь.</a>
        </p>
      )
    default:
      throw new Error("Unknown error")
  }
}
